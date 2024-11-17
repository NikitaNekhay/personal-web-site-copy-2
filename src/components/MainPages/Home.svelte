<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { ref, getDownloadURL, getMetadata } from "firebase/storage";
    import { storage } from "$lib/firebase/firebase";
    import { fade } from "svelte/transition";
    import piexif from "piexifjs";
    import LoadingSpinner from "../Shared/LoadingSpinner.svelte";

    const fileNames = [
        "a_sunned_man.JPG",
        "american_colorite.JPG",
        "autumn's_attemp_to_the_poetry.JPG",
        "beach_50byn_cili.JPEG",
        "beach_50byn_nik.JPEG",
        "beach_plus.jpg",
        "big_smile.jpg",
        "black_white_swans.JPG",
        "blurred_lights_of_mine.JPG",
        "capturing_view_from_hidden_doors.jpg",
        "car_in_the_fire.JPG",
        "cars_cross_petersburg.jpg",
        "cats_sky.JPG",
        "cats_sky_closer.JPG",
        "church_Zaslavl.jpg",
        "cinnabon_is_tasty.jpg",
        "colorite_cat.jpg",
        "dili_neswizh.jpg",
        "dili_neswizh_run.jpg",
        "dinner_aesthetic.JPG",
        "do_you_see_the_bunny.JPG",
        "dogs_during_the_autumn_Minsk.JPG",
        "dogs_love_water.JPG",
        "drugs_suck.JPG",
        "first_time_in_kremlin.JPG",
        "gallery_pt_1.jpg",
        "gallery_pt_2.jpg",
        "golden_girls.JPG",
        "gopnik_way.jpg",
        "gray_town_beatiful_flowers.JPG",
        "great_music_to_listen_for_free.JPG",
        "great_spain_organ.JPG",
        "guys_Zaslavl.jpg",
        "guys_hill_Zaslavl.jpg",
        "hidden_street_view_on_the_way_to_climbing_gym.JPG",
        "kids_play_in_the_woods.JPG",
        "last_day_on_inno_trip_but_in_kazan.JPG",
        "man_on_the_kazan_hill.jpg",
        "man_walking_in_Almet.jpg",
        "marriage_building.JPG",
        "meet_you_with_the_ride.JPG",
        "mirror_cafe.jpg",
        "mirror_restourant.jpg",
        "mirror_style.JPG",
        "mosque_Almet.jpg",
        "neznakomka_celebration.JPG",
        "neznakomka_found.JPG",
        "nik_into_museum.JPEG",
        "nik_neswizh.JPEG",
        "nik_on_phone_grodno.JPEG",
        "nik_on_style_grodno.JPEG",
        "nik_vano_kazanka.JPG",
        "only_one_such_balcony.JPG",
        "photo_from_grot.JPG",
        "put_the_red_cross_or_censored.jpg",
        "road_from_the_pushkin.jpg",
        "shadow_ball_legs_gulf_rocket.JPG",
        "spine_or_fish_bone.JPG",
        "string_between_houses.JPG",
        "summer_ushkova_gods_touch.jpg",
        "summer_ushkova_pushkin.jpg",
        "sunset_from_the_weel.jpg",
        "thank_you_middle_assian_friend_for_wifi.JPG",
        "volga_says.JPG",
        "we_at_the_gulf_hill.JPG",
        "we_listen_you_gulf.JPG",
        "what_in_his_hand.JPG",
        "wildness_by_the_city.JPG",
        "y3_founder_on_the_bycicle.JPG",
        "yellow_flower_pt1.JPG",
        "yellow_flower_pt2.JPG",
        "yellow_flowers_hands_and_spicy_chips.JPG",
    ];
    let innerWidth = 0;
    let innerHeight = 0;

    let displayedImages = []; // Currently displayed images
    let batchSize = 5; // Number of images per batch
    let loading = true; // Tracks loading state
    let currentBatchIndex = 0; // Tracks the index of the current batch

    // Function to fetch and prepare images
    // Function to fetch a single image's metadata
    // Fetch metadata for a single image
    async function fetchImageMetadata(fileName) {
        console.log(`Downloading: ${fileName}`);
        try {
            const fileRef = ref(storage, `landing-page/${fileName}`);
            const url = await getDownloadURL(fileRef);

            const response = await fetch(url, { mode: "cors" });
            if (!response.ok) throw new Error("Network response not ok");

            const blob = await response.blob();
            const dataUrl = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(blob);
            });

            let exifData = piexif.load(dataUrl);
            delete exifData["GPS"];
            const strippedDataUrl = piexif.insert(
                piexif.dump(exifData),
                dataUrl,
            );

            const dateTimeOriginal =
                exifData["Exif"][piexif.ExifIFD.DateTimeOriginal];
            const createdDate = dateTimeOriginal
                ? new Date(
                      dateTimeOriginal
                          .replace(/^(\d+):(\d+):(\d+)/, "$1-$2-$3")
                          .replace(" ", "T"),
                  ).toISOString()
                : new Date("2024-09-21T00:00:00Z").toISOString();

            return { url: strippedDataUrl, createdDate, name: fileName };
        } catch (error) {
            console.error(`Error downloading image: ${fileName}`, error);
            return null; // Skip invalid images
        }
    }

    // Load and display the next batch of images
    // Load and display the next batch of images
    async function loadNextBatch() {
        if (loading && displayedImages.length!==0) return; // Avoid concurrent loads
        loading = true;

        const startIndex = currentBatchIndex * batchSize;
        const endIndex = Math.min(startIndex + batchSize, fileNames.length);

        const batch = await Promise.all(
            fileNames.slice(startIndex, endIndex).map(fetchImageMetadata)
        );

        const validImages = batch
            .filter(Boolean) // Remove any null entries
            .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)); // Sort by createdDate

        displayedImages = [...displayedImages, ...validImages];
        currentBatchIndex++;

        console.log(
            `Displayed batch: ${startIndex + 1} to ${endIndex} (total: ${displayedImages.length})`
        );

        loading = false;

        // Automatically load the next batch if more images remain
        if (currentBatchIndex * batchSize < fileNames.length) {
            loadNextBatch();
        }
    }

    // Lazy loading directive
    function lazyLoad(node) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.src = node.getAttribute("data-src");
                    observer.unobserve(node);
                }
            },
            { threshold: 0.1 },
        );
        observer.observe(node);
        return {
            destroy() {
                observer.unobserve(node);
            },
        };
    }
    // Fetch images on mount
    onMount(() => {
        loadNextBatch();
    });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<!-- Virtual List for Infinite Scroll and Lazy Loading -->
<div class="h-auto pt-36">
    <div class="justify-items-center grid grid-cols-1 gap-y-4">
        {#each displayedImages as image (image.name)}
            <div
                class="grid justify-items-center {innerWidth > 1400
                    ? 'w-3/5'
                    : 'w-5/5'}"
            >
                <img
                    class="opacity-100"
                    use:lazyLoad
                    data-src={image.url}
                    alt={image.name}
                    style="width: 100%; height: auto;"
                    in:fade={{ delay: 100, duration: 300 }}
                />
                <p class="text-blue-0 text-shadow-yellow">{image.name}</p>
            </div>
        {/each}
    </div>

    {#if loading}
        <div class="grid justify-items-center pt-4">
            <LoadingSpinner />
        </div>
    {/if}

    <div class="pt-96 relative bottom-0 top-10 grid justify-items-center">
        <button
            on:click={() => {
                document.body.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }}
        >
            <img
                class="w-12 transition-all duration-200 animate-bounce"
                src="{base}/media/chevrons-up.svg"
                alt="Scroll to top"
            />
        </button>
    </div>
</div>
