import { c as create_ssr_component, s as subscribe, v as validate_component, o as onMount, e as escape, d as set_store_value } from "../../../chunks/index.js";
import "../../../chunks/post.js";
import { b as blogPost, i as isAdmin } from "../../../chunks/store.js";
import "../../../chunks/runtime.esm.js";
import { L as LoadingSpinner } from "../../../chunks/LoadingSpinner.js";
import { a as auth } from "../../../chunks/firebase.js";
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_blogPost;
  $$unsubscribe_blogPost = subscribe(blogPost, (value) => value);
  $$unsubscribe_blogPost();
  return `<div class="h-full bg-white"><div class="sm:px-6 sm:py-24 lg:px-8">${`${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}`}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAdmin, $$unsubscribe_isAdmin;
  $$unsubscribe_isAdmin = subscribe(isAdmin, (value) => $isAdmin = value);
  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com")
          isAdmin.set({ value: true });
      }
      set_store_value(isAdmin, $isAdmin.value = true, $isAdmin);
    });
    return unsubscribe;
  });
  $$unsubscribe_isAdmin();
  return `${$$result.head += `<!-- HEAD_svelte-5qio68_START -->${$$result.title = `<title>${escape("Posts of the blog")}</title>`, ""}<meta name="post list" content="List of blogs"><!-- HEAD_svelte-5qio68_END -->`, ""}


${$isAdmin.value ? `${validate_component(PostList, "PostList").$$render($$result, {}, {}, {})}` : ``}
`;
});
export {
  Page as default
};
