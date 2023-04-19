import { c as create_ssr_component, e as escape, v as validate_component } from './index-f121e8db.js';

const css$1 = {
  code: "ul.svelte-muvav9{padding-left:20px;list-style-type:upper-roman}.short_info.svelte-muvav9{text-align:left;padding-left:0px\n\n        }",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<p class="short_info svelte-muvav9">IT-Student based in Belarus, Minsk.<br>
        Part-time making clothes-design, photography, videography.<br>
        Mainly studies at BSUIR and majoring in 
        Informational systems and technologies in logistics.
        <br>Currently studies at <b>Innopolis</b> as an exchange student.</p><br>
    
    
    <ul class="svelte-muvav9"><li><p style="margin-block-start: 0px; margin-block-end: 0px; text-decoration:overline;"><a style="text-decoration:none;" class="href_links" href="https://docs.google.com/document/d/1rcklzYqRFf4ICC1Ai48KPzl5S0NArSxANsda5uv7IdM/edit">CV</a></p></li>
        <li><p style="margin-block-start: 0px; margin-block-end: 0px;"><a style="text-decoration:none;" class="href_links" href="https://github.com/NikitaNekhay?tab=repositories">Github projects</a></p></li></ul>  

    <ul class="svelte-muvav9"><li>Conceptual video <a class="href_links" href="https://youtu.be/aJqHTiAQ560">&quot;Campus tour&quot;</a></li>
        <li>Short cut film <a class="href_links" href="https://youtu.be/WdUAxi6tISg">&quot;Slot&quot;</a></li>
        <li><a class="href_links" href="https://www.instagram.com/nekhaynikita/" style="text-decoration: underline; ">Capsule collection 2022</a></li>
        <li><a class="href_links" href="https://www.behance.net/nekhaynikita" style="text-decoration: underline;">Phography pieces</a></li>
    </ul>`;
});
const css = {
  code: ".grid-item-content.svelte-1qrh1u5{padding-top:200px;padding-left:350px;padding-right:350px;display:flexbox;margin-right:0px;grid-column:auto;grid-row:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1jpy8ey_START -->${$$result.title = `<title>${escape("About")}</title>`, ""}<meta name="description" content="About informarion. Achievements, goals, motivation"><!-- HEAD_svelte-1jpy8ey_END -->`, ""}



<div class="grid-item-content svelte-1qrh1u5">${validate_component(About, "About").$$render($$result, {}, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-87786df9.js.map
