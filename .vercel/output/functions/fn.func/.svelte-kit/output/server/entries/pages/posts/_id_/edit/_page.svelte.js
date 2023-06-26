import { c as create_ssr_component, s as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../../../chunks/index.js";
import "firebase/storage";
import "../../../../../chunks/firebase.js";
import "../../../../../chunks/post.js";
import { X } from "../../../../../chunks/runtime.esm.js";
import "../../../../../chunks/store_.js";
import "firebase/auth";
import "firebase/firestore";
import { R as Router, a as Route } from "../../../../../chunks/Route.js";
import "../../../../../chunks/history.js";
import { b as base } from "../../../../../chunks/paths.js";
import { p as page } from "../../../../../chunks/stores.js";
const PostEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let { post } = $$props;
  let tempPost = post;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$unsubscribe_t();
  return `<div class="flex pt-60 place-content-center place"><form class="w-full max-w-lg "><div class="flex justify-center mb-6"><h1 class="text-blue-0 text-4xl font-abril">${escape($t("EDIT POST"))}</h1></div>

    <div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="title"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="title" required placeholder="Title"${add_attribute("value", tempPost.title, 0)}>
        <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Title"))}</span></label></div></div>
    <div class="flex flex-wrap -mx-3 mb-4"><div class="w-full px-3 h-full"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="description"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="description" placeholder="Description"${add_attribute("value", tempPost.description, 0)}>
          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Description"))}</span></label>
        <p class="text-gray-600 text-xs italic mt-3">${escape($t("Make it as simple as informative"))}</p></div></div>

    <div class="flex flex-wrap -mx-3 mb-6"><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="author"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="author" placeholder="Author" required${add_attribute("value", tempPost.author, 0)}>
          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Author Name"))}</span></label></div>
      <div class="w-full md:w-1/2 px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="authorEmail"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="email" id="authorEmail" placeholder="email@web.net" required${add_attribute("value", tempPost.authorEmail, 0)}>
          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Author Email"))}</span></label></div></div>
   
    <div class="flex flex-wrap -mx-3 mb-2 ms-0"><div class="w-2/5 mb-6"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="price"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" id="price" placeholder="400$" required${add_attribute("value", tempPost.price, 0)}>
        <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Price"))}</span></label></div>
      <div class="md:w-3/5 h-1/2 px-3 mb-3 md:mb-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="files"><input class="transparent peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-center block" type="file" id="images" multiple placeholder="Files">
          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"></span></label></div></div>

    <button class="flex items-center mx-[136px] w-1/2 rounded-md justify-center group relative overflow-hidden border border-orange-0 px-8 py-3 focus:outline-none focus:ring" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span>

      <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let isLoading = true;
  let post;
  let { data } = $$props;
  if (data.post !== void 0 && data.post !== null) {
    isLoading = false;
    post = data.post;
  } else if ($page.params !== void 0 && $page.params !== null) {
    post = $page.params;
    isLoading = false;
  } else {
    isLoading = true;
    console.log("error getting params for posts page");
  }
  console.log("entered +page.svelte", post);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-ql95em_START -->${$$result.title = `<title>${escape("Edit page of the post")}</title>`, ""}<meta name="edit of a single blog page" content="Edit form for the blog post"><!-- HEAD_svelte-ql95em_END -->`, ""}



${validate_component(Router, "Router").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Route, "Route").$$render($$result, { path: `${base}/posts/:id/edit/` }, {}, {
        default: ({ params }) => {
          return `${isLoading ? `LOADING` : `${validate_component(PostEdit, "PostEdit").$$render($$result, { post }, {}, {})}`}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
