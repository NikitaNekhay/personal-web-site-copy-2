<script>
    import { base } from '$app/paths'
</script>

<svelte:head>
   <title>{'Works'}</title>
   <meta name="description" content="Recent vivid works">
</svelte:head>

<figure>
    <img
    src="{base}/media/flowers_september1.jpg"
    alt="beatiful flowers"
    title="Some beatiful flowers presented as a gift/1 september anniversary" />
    <figcaption class="img_descript">1 september anniversary</figcaption>
</figure>
<br>

<style>
    .img_descript{
        font-size:18px; 
        text-decoration: underline;

    }
</style>