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
    content=" What is it about this NIKITA? Who is he? What does he do and suggests? Is he mad? Take your sight on it. About information."
  />
</svelte:head>


<section class=" sm:w-screen md:w-screen w-[60%] h-auto"> 

    <About />

    

</section>