<script lang="ts">
  import { base } from "$app/paths";
  import Error from "../../routes/+error.svelte";
  import { Errors } from "../../shared/types";

  export let passedfunction: () => void;
  export let typeSquare: String;
  let SvgPath: string = getPath(typeSquare);

  function getPath(typeSquare: String) {
    let SvgPath: string = `${base}/media/`;
    switch (typeSquare) {
      case "edit": {
        SvgPath = SvgPath.concat("edit.svg");
        break;
      }
      case "delete": {
        SvgPath = SvgPath.concat("trash.svg");
        break;
      }
      case "cart": {
        SvgPath = SvgPath.concat("shopping-cart.svg");
        break;
      }
      default: {
        throw Errors.BadPass;
      }
    }

    return SvgPath;
  }

  let innerWidth = 0;
  let innerHeight = 0;
  let mdDisplaySizeSvg =
    "relative block md:flex border border-current bg-white px-8 py-3 duration-500 active:bg-gray-400";
  if (innerWidth < 550 && innerWidth > 414) {
    mdDisplaySizeSvg =
      "relative block md:flex border border-current bg-white px-1 py-3 duration-500 active:bg-gray-400";
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div>
  <div
    tabindex="0"
    role="button"
    aria-pressed="false"
    class="group relative inline-block text-sm font-medium text-black-1
  hover:cursor-pointer focus:outline-none focus:ring active:text-black-1"
    on:click={() => passedfunction()}
    on:keypress={() => passedfunction()}
    id="menu-button"
    aria-expanded="true"
    aria-haspopup="true"
  >
    <span
      class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform
    group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
    {#if innerWidth < 550 && innerWidth > 414}
      <span class="relative block md:flex border border-current bg-white px-4 py-3 ">
        <img class="" alt="setting" src={SvgPath} />
      </span>
    {:else}
      <span class="relative block md:flex border border-current bg-white px-8 py-3 ">
        <img class="" alt="setting" src={SvgPath} />
      </span>
    {/if}
  </div>
</div>
