import { c as create_ssr_component, s as subscribe, v as validate_component, e as escape } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import { P as ProfileOptions } from "../../../chunks/ProfileOptions.js";
import { X } from "../../../chunks/runtime.esm.js";
import { L as LoadingSpinner } from "../../../chunks/LoadingSpinner.js";
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => value);
  $$unsubscribe_t();
  return `<div class="isolate bg-white px-10 pt-36"><div>${validate_component(ProfileOptions, "ProfileOptions").$$render($$result, {}, {}, {})}</div>
  ${`${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}`}

  <div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-5kmet8_START -->${$$result.title = `<title>${escape("User Profile")}</title>`, ""}<meta name="description" content="User Profile"><!-- HEAD_svelte-5kmet8_END -->`, ""}



${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
