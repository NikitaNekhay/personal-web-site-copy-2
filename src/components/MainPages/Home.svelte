<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import HomeDesktop from "./HomeDesktop.svelte";
    import { ref, getDownloadURL, getMetadata } from "firebase/storage";
    import { storage } from "$lib/firebase/firebase";
    import { fade } from "svelte/transition";
    import piexif from "piexifjs";

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

    let images = []; // Holds the remaining images after initial load
    let initialImages = []; // Holds the first 2 images to display initially
    let innerWidth = 0;
    let innerHeight = 0;
    const scrollY = writable(0); // Reactive scroll position tracker
    let loadedImages = 2; // Number of images initially loaded

    // Function to fetch and prepare images
    async function fetchAndSortImages() {
        try {
            const imageUrls = await Promise.all(
                fileNames.map(async (fileName) => {
                    const fileRef = ref(storage, `landing-page/${fileName}`);
                    const url = await getDownloadURL(fileRef);

                    const response = await fetch(url, { mode: "cors" });
                    if (!response.ok) {
                        console.error(
                            "Network response was not ok",
                            response,
                            url,
                        );
                        return {
                            url,
                            createdDate: new Date().toISOString(),
                            name: fileName,
                        };
                    }

                    const blob = await response.blob();

                    // Convert blob to data URL (base64)
                    const dataUrl = await new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.readAsDataURL(blob);
                    });

                    // Extract EXIF metadata using piexifjs
                    const exifData = piexif.load(dataUrl);

                    // Get the DateTimeOriginal string
                    const dateTimeOriginal =
                        exifData["Exif"][piexif.ExifIFD.DateTimeOriginal];

                    // Parse the DateTimeOriginal string if it exists, else use current date
                    const createdDate = dateTimeOriginal
                        ? new Date(
                              dateTimeOriginal
                                  .replace(/^(\d+):(\d+):(\d+)/, "$1-$2-$3")
                                  .replace(" ", "T"),
                          ).toISOString()
                        : new Date().toISOString();

                 
                    return { url, createdDate, name: fileName };
                }),
            );

            // Sort images by creation date
            imageUrls.sort(
                (a, b) =>
                    new Date(a.createdDate).getTime() -
                    new Date(b.createdDate).getTime(),
            );

            // Split into initial and remaining images
            initialImages = imageUrls.slice(0, 2);
            images = imageUrls.slice(2);
        } catch (error) {
            console.error("Error fetching and sorting images:", error);
        }
    }

    // Load more images on scroll
    function loadMoreImages() {
        if (images.length > 0) {
            const additionalImages = images.splice(0, 2); // Load 2 more images at a time
            initialImages = [...initialImages, ...additionalImages];
            loadedImages += additionalImages.length;
        }
    }

    // Infinite scroll: trigger loading more images as the user scrolls down
    $: if (
        typeof window !== "undefined" &&
        $scrollY > document.body.scrollHeight - window.innerHeight - 300
    ) {
        loadMoreImages();
    }

    // Update scroll position on component mount (client-side only)
    if (typeof window !== "undefined") {
        onMount(async () => {
            await fetchAndSortImages(); // Fetch images on mount
            
            const updateScroll = () => scrollY.set(window.scrollY);
            window.addEventListener("scroll", updateScroll);

            return () => window.removeEventListener("scroll", updateScroll);
        });
    }

    // Update scroll position on component mount
    // Update scroll position on component mount (client-side only)
</script>

<svelte:window bind:innerWidth bind:innerHeight />



{#if innerWidth > 1024}
    <!-- <HomeDesktop /> -->
    <div class="h-auto pt-36">
        <div class=" justify-items-center grid grid-cols-1 gap-y-4">
            {#each initialImages as image, index}
                <div id="img{index}" class="grid justify-items-center w-3/5">
                    <img
                        class="opacity-100"
                        src={image.url}
                        alt={image.name}
                        in:fade={{ delay: 100, duration: 300 }}
                    />
                    <p class="text-blue-0 text-shadow-yellow">
                        {image.name}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Scroll to top button -->
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
{:else}
    <!-- Mobile layout with infinite scroll -->
    <div class="h-auto pt-36">
        <div class="grid grid-cols-1 gap-y-4">
            {#each initialImages as image, index}
                <div id="img{index}">
                    <img
                        class="opacity-100"
                        src={image.url}
                        alt={image.name}
                        in:fade={{ delay: 100, duration: 300 }}
                    />
                    <p class="text-blue-0 text-shadow-yellow">
                        {image.name}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Scroll to top button -->
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
{/if}

<style>
    /* Custom styling for fade effect and scroll behavior */
    .opacity-100 {
        opacity: 1;
    }
</style>
