import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { s as subscribe } from "../../../chunks/utils.js";
import { $ as $format } from "../../../chunks/runtime.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-muvav9{padding-left:20px;list-style-type:upper-roman}.short_info.svelte-muvav9{text-align:left;padding-left:0px\n\n        }",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe($format, (value) => $t = value);
  $$result.css.add(css$1);
  $$unsubscribe_t();
  return `<p class="short_info svelte-muvav9">${escape($t("IT-Student based in Belarus, Minsk. Part-time making clothes-design, photography, videography. Mainly studies at BSUIR and majoring in Informational systems and technologies in logistics."))}<br></p> <div class="text-center justify-self-center" data-svelte-h="svelte-35dd8r"><ul class="text-center  svelte-muvav9"><li class="gap-y-10"><p style="margin-block-start: 0px; margin-block-end: 0px;"><a target="_blank" style="text-decoration:none;" class="href_links transition duration-200 hover:text-blue-0" href="https://docs.google.com/document/d/1rcklzYqRFf4ICC1Ai48KPzl5S0NArSxANsda5uv7IdM/edit">CV</a></p></li> <li><a style="text-decoration:none;" class="href_links transition duration-200 hover:text-blue-0" target="_blank" href="https://github.com/NikitaNekhay?tab=repositories">Github projects</a></li> <li><a class="href_links transition duration-200 hover:text-blue-0" target="_blank" href="https://youtu.be/aJqHTiAQ560">Conceptual video &quot;Campus tour&quot;</a></li> <li><a class="href_links transition duration-200 hover:text-blue-0" target="_blank" href="https://youtu.be/WdUAxi6tISg">Short cut film &quot;The Whole&quot;</a></li> <li><a class="href_links transition duration-200 hover:text-blue-0" target="_blank" href="https://www.instagram.com/nekhaynikita/">Capsule collection 2022</a></li> <li><a class="href_links transition duration-200 hover:text-blue-0" target="_blank" href="https://www.behance.net/nekhaynikita">Phography pieces</a></li></ul> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-item-content.svelte-15bm2zp{padding-left:350px;padding-right:350px;display:flexbox;margin-right:0px;grid-column:auto;grid-row:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1jpy8ey_START -->${$$result.title = `<title>${escape("About")}</title>`, ""}<meta name="description" content="About informarion. Achievements, goals, motivation"><!-- HEAD_svelte-1jpy8ey_END -->`, ""}  <div class="grid-item-content mt-[200px] mb-[420px] svelte-15bm2zp">${validate_component(About, "About").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
