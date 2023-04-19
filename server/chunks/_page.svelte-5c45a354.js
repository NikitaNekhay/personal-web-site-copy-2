import { c as create_ssr_component, e as escape, v as validate_component, i as is_promise, n as noop, d as add_attribute } from './index-f121e8db.js';

const css$1 = {
  code: "p.svelte-1uhier9{text-align:left}.grid-item4.svelte-1uhier9{text-align:center}",
  map: null
};
function validateData(str) {
  try {
    const newUrl = new URL(str.toString());
    const pattern = new RegExp(
      "^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      // fragment locator
      "i"
    );
    return (newUrl.protocol === "http:" || newUrl.protocol === "https:") && pattern.test(str.toString());
  } catch (err) {
    return false;
  }
}
async function getComic() {
  const email = "n.niakhai@innopolis.university";
  const queryParams1 = new URLSearchParams({ email });
  let varja = await fetch("https://fwd.innopolis.app/api/hw2?" + queryParams1.toString());
  let var_ID = await varja.json();
  if (validateData(var_ID) || var_ID === null) {
    alert("Invalid source!");
    return;
  }
  console.log(var_ID);
  const queryParams2 = new URLSearchParams({ num: var_ID.toString() });
  let comic_obj_json = await fetch("https://getxkcd.vercel.app/api/comic?" + queryParams2.toString());
  return await comic_obj_json.json();
}
const Comic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const comic = getComic();
  $$result.css.add(css$1);
  return `<div class="grid-item4 svelte-1uhier9"><section>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        <p class="svelte-1uhier9">Getting your very very funny joke, sir...</p>
        `;
    }
    return function(comic2) {
      return ` 
            <img${add_attribute("src", comic2.img, 0)}${add_attribute("alt", comic2.alt, 0)}${add_attribute("title", comic2.title, 0)}>
            <span class="XKCD_comic"><p class="svelte-1uhier9"><br><br>Title: ${escape(comic2.title)}<br><br>Description of comic:<br>${escape(comic2.transcript)}<br><br>
                Date: ${escape(comic2.day)}.${escape(comic2.month)}.${escape(comic2.year)}</p></span>
        `;
    }(__value);
  }(comic)}</section> 
</div>`;
});
const css = {
  code: ".grid-item-content.svelte-1qrh1u5{padding-top:200px;padding-left:350px;padding-right:350px;display:flexbox;margin-right:0px;grid-column:auto;grid-row:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1544uoh_START -->${$$result.title = `<title>${escape("Diary")}</title>`, ""}<meta name="description" content="Some notes and little projects. Jokes"><!-- HEAD_svelte-1544uoh_END -->`, ""}



<div class="grid-item-content svelte-1qrh1u5"><div class="grid-item4"><p style="text-align: right;">Diary is hidden!<br></p></div>
  ${validate_component(Comic, "Comic").$$render($$result, {}, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5c45a354.js.map
