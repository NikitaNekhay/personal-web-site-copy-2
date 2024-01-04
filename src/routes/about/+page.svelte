<script lang="ts">
  import { error } from "@sveltejs/kit";
  import About from "../../components/MainPages/About.svelte";
  import { Errors } from "../../shared/types";
    import Authorphoto from "../../components/MainPages/About/Authorphoto.svelte";
</script>

<svelte:head>
  <title>About</title>
  <meta
    name="description"
    content="About informarion. Who am I? What I do? Where to follow me?"
  />
</svelte:head>


<section class=" sm:w-screen md:w-screen w-[60%] h-auto"> 

    <About />

    

</section>