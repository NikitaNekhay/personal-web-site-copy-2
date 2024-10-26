<script lang="ts">
    import { onMount } from "svelte";

    import { listAll, ref, getDownloadURL } from "firebase/storage";
    import { storage } from "$lib/firebase/firebase";

    let imageUrls: string[] = [];

    onMount(async () => {
        try {
            const imagesRef = ref(storage, "landing-page");

            // List all items in the folder
            //const result = await listAll(imagesRef);

            // Find all the prefixes and items.
            // imageUrls = await Promise.all(
            //     result.items.map(async (itemRef) => {
            //         try {
            //             return await getDownloadURL(itemRef);
            //         } catch (error) {
            //             console.error(`Error fetching download URL for ${itemRef.name}:`, error);
            //             return null; // Return null if there's an error with a specific file
            //         }
            //     })
            // );

            // const singleFileRef = ref(storage, "landing-page/a_sunned_man.JPG");
            // const url = await getDownloadURL(singleFileRef);
            // console.log("Single file download URL:", url);

            console.log("imagesRef Directory Contents:", imagesRef);
        } catch (error) {
            console.error("Error listing storage paths:", error?.message);
            console.error("Detailed error payload:", error);
        }
    });
</script>

<div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-center mb-4">Landing Page Images</h1>
    <p class="text-center">Check the console for a list of image URLs.</p>
</div>

<style>
    /* Add any custom styles here if needed */
</style>
