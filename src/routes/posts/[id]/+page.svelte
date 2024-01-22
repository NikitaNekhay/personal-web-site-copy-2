<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import { base } from "$app/paths";
  import { getProduct } from "../post";
  import { page } from "$app/stores";
  import { productStore } from "../../../store/store";
  import { onMount } from "svelte";
  import type { ProductType, Slide } from "../../../shared/types";
  import LoadingButton from "../../../components/Shared/LoadingButton.svelte";
  import LoadingSpinner from "../../../components/Shared/LoadingSpinner.svelte";
  import PostDetail from "../../../components/MainPages/Posts/PostDetail.svelte";
    import { writable } from "svelte/store";
    import { t } from "svelte-i18n";

  let isLoading = true; // Initialize the loading state
  let isLoading2 = true; // Initialize the loading state
  let preloadCounter = 0;

  let post: ProductType;
  export let data;
  let slides: Slide[]; //;= data.post.images.map(image => ({ img: image }));

  if (data.post !== undefined && data.post !== null) {
    isLoading = false;
    //console.log("entered +page.svelte", data.post);
    post = data.post;
    slides = data.post.images.map(image => ({ img: image }));

  } else if ($page.params !== undefined && $page.params !== null) {
    post = $page.params;
    //console.log("entered +page.svelte with params", $page.params);
    isLoading = false;
  } else {
    isLoading = true;
    console.error("error getting params for posts page");
  }

  onMount(() => {
        slides.forEach(slide => {
            //console.log(slide)
            const img = new Image();
            img.src = slide.img;
            
            // You can also add onload and onerror handlers if needed
            img.onload = () => //console.log('Image loaded:', slide.img);
            img.onerror = () => console.error('Failed to load image:', slide.img);
            preloadCounter ++;
            //console.log(preloadCounter)
        });
        
        if(preloadCounter === slides.length){
          //console.log("equals")
          isLoading2 = false
        }
    });


</script>

<svelte:head>
  <title>{$t(post.title)}</title>
  <meta
    name="description"
    content={$t(post.description["smallDescription"]) + ". " +$t("You can slide through images, check the price, see available sizes, size guide. Click on forms and you get more details on clothes and purchase, return policies.")
  }
  />

  <meta property="og:title" content={$t(post.title)} />

  <meta
    property="og:description"
    content={$t(post.description["smallDescription"]) + ". " +$t("You can slide through images, check the price, see available sizes, size guide. Click on forms and you get more details on clothes and purchase, return policies.")
    }
  />

  <meta property="og:type" content="product" />

  <meta
    property="og:image"
    content={post.images[0]}
  />

  <meta property="og:url" content={"http://nekhaynikita.shop/posts/"+post.id} />
</svelte:head>

<!-- <Router>

  <Route path={`${base}/posts/:id`} let:params> -->
{#if isLoading && isLoading2}
  <LoadingSpinner />
{:else}
  <!-- <PostDetail {post} /> -->
  <PostDetail {post} {slides}/>
{/if}
<!-- </Route>
</Router> -->
