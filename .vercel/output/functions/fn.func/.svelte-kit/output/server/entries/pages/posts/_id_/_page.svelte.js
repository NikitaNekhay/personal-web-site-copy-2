import { c as create_ssr_component, s as subscribe, d as createEventDispatcher, e as escape, f as each, b as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { R as Router, a as Route } from "../../../../chunks/Route.js";
import "../../../../chunks/history.js";
import "../../../../chunks/post.js";
import { X } from "../../../../chunks/runtime.esm.js";
import "../../../../chunks/store_.js";
import "../../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
/* empty css                                                           */import { b as base } from "../../../../chunks/paths.js";
import { p as page } from "../../../../chunks/stores.js";
const css = {
  code: ".slider.svelte-uzc2z6{display:flex;width:800px;height:500px;border:2px solid royalblue;margin:30px auto;overflow:hidden}.slider-line.svelte-uzc2z6{position:relative;display:flex;height:500px;background-color:darkorange;left:0px;transition:all ease 1s}img.svelte-uzc2z6{width:800px;height:500px}",
  map: null
};
const PostDetail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let { post } = $$props;
  console.log(post);
  createEventDispatcher();
  let offset = 0;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${post ? `<div class="container_slider"><div class="slider svelte-uzc2z6"><div class="slider-line svelte-uzc2z6" style="${"transform: translateX(" + escape(offset, true) + "px);"}">${post.images ? `${each(post.images, (imag) => {
    return `<img${add_attribute("src", imag, 0)}${add_attribute("alt", post.title, 0)} class="w-100 h-100 svelte-uzc2z6">`;
  })}` : `<div><p>NO images</p></div>`}</div></div>
      <div class="buttons items-center justify-center text-center content-center"><button class="slider-back transition duration-100 hover:text-orange-0">← ${escape($t("BACK"))}</button>
        <button class="slider-next transition duration-100 hover:text-orange-0">${escape($t("NEXT"))} →</button></div></div>
  
    <div class="items-center justify-center text-center content-center mt-4 bore"><h1>${escape(post.title)}</h1>
      <p>${escape(post.description)}</p>
      <p>${escape($t("Author"))} : ${escape(post.author)}</p>
      <p>${escape($t("Author Email"))} : ${escape(post.authorEmail)}</p>
      <p>${escape($t("Price"))} : ${escape(post.price)}</p>
      <p>${escape($t("Date"))} : ${escape(post.date)}:${escape(post.date)}:${escape(post.date)}</p>

      <a href="${"mailto:" + escape(post.authorEmail, true)}" class="transition duration-100 hover:text-blue-0">${escape($t("SEND EMAIL TO AUTHOR"))}</a></div>` : `<p>Loading...</p>`}`;
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
  return `${$$result.head += `<!-- HEAD_svelte-1hyxzw6_START -->${$$result.title = `<title>${escape("Page of the post")}</title>`, ""}<meta name="single blog page" content="Detailed blog post"><!-- HEAD_svelte-1hyxzw6_END -->`, ""}



${validate_component(Router, "Router").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Route, "Route").$$render($$result, { path: `${base}/posts/:id` }, {}, {
        default: ({ params }) => {
          return `${isLoading ? `LOADING` : `${validate_component(PostDetail, "PostDetail").$$render($$result, { post }, {}, {})}`}`;
        }
      })}`;
    }
  })}
  `;
});
export {
  Page as default
};
