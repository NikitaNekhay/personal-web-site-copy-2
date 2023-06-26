import { c as create_ssr_component, s as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { L as Language } from "../../../chunks/store.js";
import { X, m, x } from "../../../chunks/runtime.esm.js";
import { e as en, r as ru } from "../../../chunks/en.js";
import { c as currentLanguagee } from "../../../chunks/store_.js";
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".containerAuth.svelte-adrkx0.svelte-adrkx0{display:flex;flex:1;padding-top:15%;justify-items:center;@apply max-h-screen;}h1.svelte-adrkx0.svelte-adrkx0{text-align:center}form.svelte-adrkx0.svelte-adrkx0{display:flex;flex-direction:column;gap:14px}form.svelte-adrkx0.svelte-adrkx0,.options.svelte-adrkx0.svelte-adrkx0{width:400px;max-width:100%;margin:0 auto}.errore.svelte-adrkx0.svelte-adrkx0{font-size:0.9ram;text-align:center;@apply text-red-2;}.options.svelte-adrkx0.svelte-adrkx0{padding:14px 0;overflow:hidden;font-size:0.9rem;display:flex;flex-direction:column;gap:4px}.options.svelte-adrkx0 div.svelte-adrkx0{display:flex;align-items:center;gap:8px;justify-content:center}.options.svelte-adrkx0 div p.svelte-adrkx0:last-of-type{cursor:pointer;@apply text-orange-0;}@keyframes svelte-adrkx0-spinner{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentLanguagee, $$unsubscribe_currentLanguagee;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentLanguagee = subscribe(currentLanguagee, (value) => $currentLanguagee = value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  if ($currentLanguagee !== void 0) {
    const currentValue = $currentLanguagee;
    if (currentValue === Language.English) {
      m(Language.English, en);
      x.set(Language.English);
    } else {
      m(Language.Russian, ru);
      x.set(Language.Russian);
    }
  } else {
    m(Language.English, en);
    x.set(Language.English);
  }
  let email = "";
  let password = "";
  $$result.css.add(css);
  $$unsubscribe_currentLanguagee();
  $$unsubscribe_t();
  return `<div class="containerAuth svelte-adrkx0"><div class="flex max-h-screen w-2/6"></div> 
    <div class="h-fit w-2/6 table-column mb-6"><div class="h-2/6 justify-center text-center mb-6"><h1 class="text-blue-0 text-4xl font-abril svelte-adrkx0">${escape($t("LOGIN"))}</h1>
            ${``}</div>
        <div class="flex h-2/6"><form class="w-full max-w-lg  svelte-adrkx0"><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="email"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="email" name="email" type="email" autocomplete="email" placeholder="email@mail-service.com" required${add_attribute("value", email, 0)}>
                          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Email"))}</span></label></div></div>
            
                <div class="flex flex-wrap -mx-3 mb-3"><div class="w-full px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="password"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="password" placeholder="Password" name="password" type="password" autocomplete="current-password" required${add_attribute("value", password, 0)}>
                          <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Password"))}</span></label></div></div>

                  

                ${``}
                

                <button class="flex items-center mx-[98px] w-1/2 rounded-md justify-center group relative overflow-hidden border border-orange-0 px-8 py-3 focus:outline-none focus:ring" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span>
          
                <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button></form></div>
        <div class="flex h-2/6"><div class="options svelte-adrkx0">${`<div class="svelte-adrkx0"><p class="svelte-adrkx0">${escape($t("Don't have an account?"))}</p> 
                        <p class="font-anonymous text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-100 via-red-00 to-yellow-100 transition hover:opacity-25 hover:text-red-0 svelte-adrkx0">${escape($t("Register"))}</p></div>`}</div></div></div>
    <div class="flex max-h-screen w-2/6"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-dc3wr9_START -->${$$result.title = `<title>${escape("Login")}</title>`, ""}<meta name="description" content="Login page"><!-- HEAD_svelte-dc3wr9_END -->`, ""}



${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
