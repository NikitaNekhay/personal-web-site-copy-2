import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import { a as authStore } from "../../../chunks/store.js";
import { P as ProfileOptions } from "../../../chunks/ProfileOptions.js";
import { X } from "../../../chunks/runtime.esm.js";
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="isolate bg-white px-10 pt-36"><div>${validate_component(ProfileOptions, "ProfileOptions").$$render($$result, {}, {}, {})}</div>

  <div><div class="mt-6 border-t border-gray-100"><div class="ml-8"><dl class="divide-y divide-gray-100"><div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">${escape($t("User name"))}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${escape(profileValue.name)}</dd>
          </div><div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">${escape($t("Email address"))}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${escape(profileValue.email)}</dd>
          </div><div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">${escape($t("Country"))}</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${escape(profileValue.country)}</dd>
          </div><div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">${escape($t("Number phone"))}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${escape(profileValue.phone)}</dd>
          </div><div class="px-4 py-6 grid grid-cols-4 gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">${escape($t("About"))}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${escape(profileValue.description)}</dd></div></dl></div></div></div>
    
    
  <div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = "auto";
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${$$result.head += `<!-- HEAD_svelte-5kmet8_START -->${$$result.title = `<title>${escape("User Profile")}</title>`, ""}<meta name="description" content="User Profile"><!-- HEAD_svelte-5kmet8_END -->`, ""}



${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
