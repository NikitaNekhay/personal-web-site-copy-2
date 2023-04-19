import { c as create_ssr_component, e as escape } from './index-f121e8db.js';
import { b as base } from './paths-d54b0e6b.js';

const css = {
  code: "footer.svelte-17mgals{padding-top:200px;padding-left:850px;width:600px;height:800px;display:flex}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav><h1><p>NIKITANIAKHAI</p></h1>
        <br>
        <a class="internal_links" target="_self" href="${escape(base, true) + "/about"}">About</a>
        <a class="internal_links" target="_self" href="${escape(base, true) + "/contact"}">Contact</a>
        <a class="internal_links" target="_self" href="${escape(base, true) + "/diary"}">Diary</a>
        <a class="internal_links" target="_self" href="${escape(base, true) + "/"}">Works</a>
        <br></nav>

    ${slots.default ? slots.default({}) : ``}

    <footer class="svelte-17mgals">Dream big, work hard            
    </footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-133d73ab.js.map
