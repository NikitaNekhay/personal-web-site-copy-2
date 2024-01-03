<script lang="ts">
  import Contact from "../../components/MainPages/Contact.svelte";
  import Authorphoto from "../../components/MainPages/About/Authorphoto.svelte";
</script>

<svelte:head>
  <title>{"Contact"}</title>
  <meta name="description" content="Current contacts and placement of author" />
</svelte:head>

<section class="w-screen h-screen flex "> 
  <div class=" self-center" >
    <Contact />
  </div>
</section>
