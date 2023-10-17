import { c as create_ssr_component, s as subscribe, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { a as authStore, L as Language } from "../../../chunks/store.js";
import { X, m, x } from "../../../chunks/runtime.esm.js";
import { e as en, r as ru } from "../../../chunks/en.js";
import { c as currentLanguagee } from "../../../chunks/store_.js";
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".containerAuth.svelte-1ro3tfn.svelte-1ro3tfn{display:flex;flex:1;padding-top:15%;justify-items:center;@apply max-h-screen;}h1.svelte-1ro3tfn.svelte-1ro3tfn{text-align:center}form.svelte-1ro3tfn.svelte-1ro3tfn{display:flex;flex-direction:column;gap:14px}form.svelte-1ro3tfn.svelte-1ro3tfn,.options.svelte-1ro3tfn.svelte-1ro3tfn{width:400px;max-width:100%;margin:0 auto}.errore.svelte-1ro3tfn.svelte-1ro3tfn{font-size:0.9ram;text-align:center;@apply text-red-2;}.options.svelte-1ro3tfn.svelte-1ro3tfn{padding:14px 0;overflow:hidden;font-size:0.9rem;display:flex;flex-direction:column;gap:4px}.options.svelte-1ro3tfn div.svelte-1ro3tfn{display:flex;align-items:center;gap:8px;justify-content:center}.options.svelte-1ro3tfn div p.svelte-1ro3tfn:last-of-type{cursor:pointer;@apply text-orange-0;}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentLanguagee, $$unsubscribe_currentLanguagee;
  let $authStore, $$unsubscribe_authStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentLanguagee = subscribe(currentLanguagee, (value) => $currentLanguagee = value);
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let isLoading = $authStore.loading;
  console.log("state of dynamic isloading", isLoading);
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
  $$unsubscribe_authStore();
  $$unsubscribe_t();
  return `<div class="containerAuth svelte-1ro3tfn"><div class="flex max-h-screen w-2/6"></div>
    <div class="mb-6 table-column h-fit w-2/6"><div class="mb-6 h-2/6 justify-center text-center"><h1 class="font-abril text-4xl text-blue-0 svelte-1ro3tfn">${escape($t("LOGIN"))}</h1>
            ${``}</div>
        <div class="flex h-2/6"><form class="w-full max-w-lg svelte-1ro3tfn"><div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="email"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="email" name="email" type="email" autocomplete="email" placeholder="email@mail-service.com" required${add_attribute("value", email, 0)}>
                            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Email"))}</span></label></div></div>

                <div class="-mx-3 mb-3 flex flex-wrap"><div class="w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="password"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="password" placeholder="Password" name="password" type="password" autocomplete="current-password" required${add_attribute("value", password, 0)}>
                            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Password"))}</span></label></div></div>

                

                ${``}

                ${`<button class="group relative mx-[98px] flex w-1/2 items-center justify-center overflow-hidden rounded-md border border-orange-0 px-8 py-3 focus:outline-none focus:ring" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span>

                        <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button>`}</form></div>
        <div class="flex h-2/6"><div class="options svelte-1ro3tfn">${`<div class="svelte-1ro3tfn"><p class="svelte-1ro3tfn">${escape($t("Don't have an account?"))}</p>
                        <p class="via-red-00 bg-gradient-to-r from-pink-100 to-yellow-100 bg-clip-text font-anonymous text-base font-extrabold text-transparent transition hover:text-red-0 hover:opacity-25 svelte-1ro3tfn">${escape($t("Register"))}</p></div>`}</div></div></div>
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
