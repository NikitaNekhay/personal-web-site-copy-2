import { c as create_ssr_component, s as subscribe, e as escape } from "./index.js";
import { b as base } from "./paths.js";
import "./firebase.js";
import "firebase/auth";
import "firebase/firestore";
import { X } from "./runtime.esm.js";
const ProfileOptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="px-6 sm:px-0"><div class="grid items-center justify-items-center grid-rows-1 grid-cols-3"><div><div class="justify-items-start"><h3 class="text-base font-semibold leading-7 text-gray-900">${escape($t("Applicant Information"))} 
            <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">${escape($t("Personal details and application."))}</p></h3></div></div>
      
        <div class="ml-16"><div class="grid justify-items-center">${`<div class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1" id="menu-button" aria-expanded="true" aria-haspopup="true"><span class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>

              <span class="relative block border border-current bg-white px-8 py-3"><img class="mr-1" alt="setting" src="${escape(base, true) + "/media/settings.svg"}">
  
                  <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg></span></div>


              
              `}</div></div>
        
      <div><div class="flex"><h3 class="text-base font-semibold leading-7 text-transparent">${escape($t("Applicant Information"))} 
            <p class="mt-1 max-w-2xl text-sm leading-6 text-transparent">${escape($t("Personal details and application."))}</p></h3></div></div></div></div>

${``}`;
});
export {
  ProfileOptions as P
};
