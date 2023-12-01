import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/post.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import "../../../chunks/runtime.esm.js";
import "../../../chunks/store_.js";
import { L as LoadingSpinner } from "../../../chunks/LoadingSpinner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1f7zle2_START -->${$$result.title = `<title>${escape("Shop")}</title>`, ""}<meta name="shop" content="clothes, books, and products"><!-- HEAD_svelte-1f7zle2_END -->`, ""} ${`${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
