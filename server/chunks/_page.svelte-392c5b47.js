import { c as create_ssr_component, e as escape } from './index-f121e8db.js';
import { b as base } from './paths-d54b0e6b.js';

const css = {
  code: ".img_descript.svelte-1l8jvjp{font-size:18px;text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-cflww3_START -->${$$result.title = `<title>${escape("Works")}</title>`, ""}<meta name="description" content="Recent vivid works"><!-- HEAD_svelte-cflww3_END -->`, ""}

<figure><img src="${escape(base, true) + "/media/flowers_september1.jpg"}" alt="beatiful flowers" title="Some beatiful flowers presented as a gift/1 september anniversary">
    <figcaption class="img_descript svelte-1l8jvjp">1 september anniversary</figcaption></figure>
<br>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-392c5b47.js.map
