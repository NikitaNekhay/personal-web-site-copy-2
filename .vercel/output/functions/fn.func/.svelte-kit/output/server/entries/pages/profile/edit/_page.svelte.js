import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape, b as add_attribute } from "../../../../chunks/index.js";
import "../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import { P as ProfileOptions } from "../../../../chunks/ProfileOptions.js";
import { X } from "../../../../chunks/runtime.esm.js";
const ProfileEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let profileValue = {
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
    messages: []
  };
  $$unsubscribe_t();
  return `<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

  ${validate_component(ProfileOptions, "ProfileOptions").$$render($$result, {}, {}, {})}

  <div class="place mt-40 flex place-content-center"><form class="w-full max-w-lg"><div class="mb-6 flex justify-center"><h1 class="font-abril text-4xl text-blue-0">${escape($t("EDIT PROFILE"))}</h1></div>

      <div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" required id="name" autocomplete="given-name"${add_attribute("value", profileValue.name, 0)}>
            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("User name"))}</span></label></div></div>
      <div class="-mx-3 mb-4 flex flex-wrap"><div class="h-full w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="description"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="description" placeholder="Description"${add_attribute("value", profileValue.description, 0)}>
            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Short description about you"))}</span></label>
          <p class="mt-3 text-xs italic text-gray-600">${escape($t("Don't hesitate write as much as you want"))}</p></div></div>

      <div class="-mx-3 mb-6 flex flex-wrap"><div class="w-full px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="email"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="email" required id="email" autocomplete="email" placeholder="email@web.net"${add_attribute("value", profileValue.email, 0)}>
            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Email"))}</span></label></div></div>

      <div class="-mx-3 mb-6 flex flex-wrap"><div class="w-1/2 px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="phone-number"><input class="peer h-8 w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="tel" id="phone" required autocomplete="tel"${add_attribute("value", profileValue.phone, 0)}>
            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Phone number"))}</span></label></div>
        <div class="w-1/2 px-3"><label class="relative block overflow-hidden rounded-md border border-gray-200 bg-white-1 px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><select class="peer h-[34px] w-full border-none bg-transparent bg-white-1 p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" id="country" required><option value="">-- ${escape($t("Select Country"))} --</option><option value="Russia">Russia</option><option value="Europe">Asia</option><option value="Europe">Europe</option><option value="South America">South America</option><option value="North America">North America</option><option value="Australia">Africa</option><option value="Australia">Australia</option><option value="Antarctic">Antarctic</option></select>
            <span class="absolute start-3 top-3 -translate-y-1/2 cursor-text bg-white-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Country"))}</span></label></div></div>

      ${`<button class="group relative mx-[136px] flex w-1/2 items-center justify-center overflow-hidden rounded-md border border-orange-0 px-8 py-3 focus:outline-none" type="button"><span class="absolute inset-x-0 bottom-0 h-[2px] bg-orange-0 transition-all group-hover:h-full group-active:bg-orange-0"></span>

          <span class="relative text-sm font-medium text-orange-0 transition-colors group-hover:text-white">${escape($t("Submit"))}</span></button>`}</form></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-e8d9gf_START -->${$$result.title = `<title>${escape("Edit profile")}</title>`, ""}<meta name="edit profile" content="forms for editing profile"><!-- HEAD_svelte-e8d9gf_END -->`, ""}



${validate_component(ProfileEdit, "EditProfile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
