import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const Shop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1aoqh4n_START -->${$$result.title = `<title>${escape("Shop")}</title>`, ""}<meta name="shop" content="clothes, books, and products"><!-- HEAD_svelte-1aoqh4n_END -->`, ""}



${validate_component(Shop, "Shop").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
