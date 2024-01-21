<script lang="ts">
    import { onMount } from "svelte";
    import ShoppingCart from "../../../components/MainPages/Profile/ShoppingCart.svelte";
    import LoadingSpinner from "../../../components/Shared/LoadingSpinner.svelte";

    let userCountry = "Unknown";
    let userCity = "Unknown";
    import CountryData from "../../../CountryData.json"

    onMount(async () => {
        // Fetch the user's IP and location using a public IP API (consider using a more private/secure method in production)
        const res = await fetch("https://ipapi.co/json/");
        const locationData = await res.json();
        console.log(locationData);
        if (locationData && locationData.country && locationData.city) {
            userCountry = locationData.country;
            userCity = locationData.city;
        } else {
            console.log("bad luck on fetch");
        }

    });

 
</script>

<svelte:head>
    <title>Shopping cart</title>
    <meta name="description" content="Page of shopping cart and checkout. You can fill all required forms: country, name, contacts, delivery, purchase method. You will get calculated price of your order and then you can follow to purchase it." />
</svelte:head>

{#if userCountry!=="Unknown"}
    <ShoppingCart {userCountry} {userCity} countries={CountryData}/>
{:else}
    <LoadingSpinner />
{/if}



