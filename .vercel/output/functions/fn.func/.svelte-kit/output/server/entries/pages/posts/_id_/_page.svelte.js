import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, e as escape, d as each, a as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/history.js";
import "../../../../chunks/post.js";
import { $ as $format } from "../../../../chunks/runtime.js";
import "../../../../chunks/store_.js";
import "../../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import { p as page } from "../../../../chunks/stores.js";
import "firebase/storage";
import { L as LoadingSpinner } from "../../../../chunks/LoadingSpinner.js";
const NoPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const PostDetail_svelte_svelte_type_style_lang = "";
const css = {
  code: ".slider.svelte-1bnclxd{display:flex;width:800px;height:500px;border:2px solid royalblue;margin:30px auto;overflow:hidden}.slider-line.svelte-1bnclxd{position:relative;display:flex;height:500px;background-color:darkorange;left:0px;transition:all ease 1s}img.svelte-1bnclxd{width:800px;height:500px}",
  map: null
};
const PostDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe($format, (value) => $t = value);
  let { post } = $$props;
  createEventDispatcher();
  let offset = 0;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet"> ${`${post == void 0 ? `${validate_component(NoPosts, "NoPosts").$$render($$result, {}, {}, {})}` : `<div class="container_slider mt-56"><div class="slider svelte-1bnclxd"><div class="slider-line svelte-1bnclxd" style="${"transform: translateX(" + escape(offset, true) + "px);"}">${post.images ? `${each(post.images, (imag) => {
    return `<img${add_attribute("src", imag, 0)}${add_attribute("alt", post.title, 0)} class="w-100 h-100 svelte-1bnclxd">`;
  })}` : `<div data-svelte-h="svelte-1f9zvqe"><p>NO images</p></div>`}</div></div> <div class="buttons content-center items-center justify-center text-center"><button class="slider-back transition duration-200 hover:text-orange-0">← ${escape($t("BACK"))}</button> <button class="slider-next transition duration-200 hover:text-orange-0">${escape($t("NEXT"))} →</button></div></div> <div class="bore mt-4 content-center items-center justify-center text-center"><h1>${escape(post.title)}</h1> <p>${escape(post.description)}</p> <p>${escape($t("Author"))} : ${escape(post.author)}</p> <p>${escape($t("Author Email"))} : ${escape(post.authorEmail)}</p> <p>${escape($t("Price"))} : ${escape(post.price)}</p> <p>${escape($t("Date"))} : ${escape(post.date)}:${escape(post.date)}:${escape(post.date)}</p> <a href="${"mailto:" + escape(post.authorEmail, true)}" class="transition duration-200 hover:text-blue-0">${escape($t("SEND EMAIL TO AUTHOR"))}</a></div>`}`}`;
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
    console.error("error getting params for posts page");
  }
  console.log("entered +page.svelte", post);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-mdmfr5_START -->${$$result.title = `<title>${escape("Page of the post")}</title>`, ""}<meta name="single blog page" content="Detailed blog post"><!-- HEAD_svelte-mdmfr5_END -->`, ""}  ${isLoading ? `${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}` : `${validate_component(PostDetail, "PostDetail").$$render($$result, { post }, {}, {})}`} `;
});
export {
  Page as default
};
