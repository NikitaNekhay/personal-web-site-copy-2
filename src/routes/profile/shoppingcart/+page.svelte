<script lang="ts">
    import { onMount } from "svelte";
    import ShoppingCart from "../../../components/MainPages/Profile/ShoppingCart.svelte";
    import LoadingSpinner from "../../../components/Shared/LoadingSpinner.svelte";

    let userCountry = "Unknown";
    let userCity = "Unknown";
    import CountryData from "../../../CountryData.json";
    import { t } from "svelte-i18n";
    import { cart } from "../../../store/cart_store_";
    import { authStore } from "../../../store/store";

    onMount(async () => {
        // Fetch the user's IP and location using a public IP API (consider using a more private/secure method in production)
        const res = await fetch("https://ipapi.co/json/");
        const locationData = await res.json();
        console.log(locationData);
        if (locationData && locationData.country && locationData.city) {
            userCountry = locationData.country;
            userCity = locationData.city;

            if(!$authStore.user) {
                $cart.country = userCountry;
                $cart.city = userCity;
            }
        } else {
            console.log("bad luck on fetch");
        }
    });
</script>

<svelte:head>
    <title>{$t("SHOPPING CART")}</title>
    <meta
        name="description"
        content={$t("Page of shopping cart and checkout. You can fill all required forms: country, name, contacts, delivery, purchase method. You will get calculated price of your order and then you can follow to purchase it.")}
    />

    <meta property="og:title" content={$t("SHOPPING CART")} />
    <meta
        property="og:description"
        content={$t("Page of shopping cart and checkout. You can fill all required forms: country, name, contacts, delivery, purchase method. You will get calculated price of your order and then you can follow to purchase it.")}
    />

    <meta property="og:type" content="website" />

    <meta
        property="og:image"
        content=""
    />

    <meta property="og:url" content="http://nekhaynikita.shop/profile/shoppingcart" />
</svelte:head>

{#if userCountry !== "Unknown"}
    <ShoppingCart {userCountry} {userCity} countries={CountryData} />
{:else}
    <LoadingSpinner />
{/if}
