import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, b as add_attribute } from "../../../../chunks/index.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import { a as authStore } from "../../../../chunks/store.js";
import { P as ProfileOptions } from "../../../../chunks/ProfileOptions.js";
import { X } from "../../../../chunks/runtime.esm.js";
const ProfileEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_authStore = subscribe(authStore, (value) => value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let profileValue = {
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
    messages: []
  };
  $$unsubscribe_authStore();
  $$unsubscribe_t();
  return `<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">${``}


    ${validate_component(ProfileOptions, "ProfileOptions").$$render($$result, {}, {}, {})}

    <div class="flex mt-40 place-content-center place"><form class="w-full max-w-lg "><div class="flex justify-center mb-6"><h1 class="text-blue-0 text-4xl font-abril">${escape($t("EDIT PROFILE"))}</h1></div>
    
        <div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" required id="name" autocomplete="given-name"${add_attribute("value", profileValue.name, 0)}>
            <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("User name"))}</span></label></div></div>
        <div class="flex flex-wrap -mx-3 mb-4"><div class="w-full px-3 h-full"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="description"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="description" placeholder="Description"${add_attribute("value", profileValue.description, 0)}>
              <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Short description about you"))}</span></label>
            <p class="text-gray-600 text-xs italic mt-3">${escape($t("Don't hesitate write as much as you want"))}</p></div></div>
    
        <div class="flex flex-wrap -mx-3 mb-6"><div class="w-full px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="email"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="email" required id="email" autocomplete="email" placeholder="email@web.net"${add_attribute("value", profileValue.email, 0)}>
              <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Email"))}</span></label></div></div>

        <div class="flex flex-wrap -mx-3 mb-6"><div class="w-1/2 px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="phone-number"><input class="peer bg-white-1 h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="tel" id="phone" required autocomplete="tel"${add_attribute("value", profileValue.phone, 0)}>
                <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Phone number"))}</span></label></div>
            <div class="w-1/2 px-3"><label class="block relative overflow-hidden bg-white-1 rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><select class="peer bg-white-1 h-[34px] w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="country" required><option value="">-- ${escape($t("Select Country"))}  --</option><option value="Russia">Russia</option><option value="Europe">Asia</option><option value="Europe">Europe</option><option value="South America">South America</option><option value="North America">North America</option><option value="Australia">Africa</option><option value="Australia">Australia</option><option value="Antarctic">Antarctic</option></select>
              <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 bg-white-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Country"))}</span></label></div></div>


          
     

        
    
        <button class="flex items-center mx-[136px] w-1/2 rounded-md justify-center group relative overflow-hidden border border-orange-0 px-8 py-3 focus:outline-none focus:ring" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span>
    
          <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button></form></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-e8d9gf_START -->${$$result.title = `<title>${escape("Edit profile")}</title>`, ""}<meta name="edit profile" content="forms for editing profile"><!-- HEAD_svelte-e8d9gf_END -->`, ""}



${validate_component(ProfileEdit, "EditProfile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
