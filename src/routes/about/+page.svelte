<script lang="ts">
  import { error } from "@sveltejs/kit";
  import About from "../../components/MainPages/About.svelte";
  import { Errors } from "../../shared/types";
</script>

<svelte:head>
  <title>{"About"}</title>
  <meta
    name="description"
    content="About informarion. Achievements, goals, motivation"
  />
</svelte:head>


<section class="w-screen h-screen flex "> 
  <div class=" self-center" >
    <About />
  </div>
</section>