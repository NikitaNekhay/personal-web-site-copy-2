import { c as create_ssr_component, s as subscribe, e as escape, f as each, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { X } from "../../../chunks/runtime.esm.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { b as base } from "../../../chunks/paths.js";
const UserTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let userProfiles = [];
  let l_userProfiles = 0;
  let latestProfiles = [];
  function nextPairs(lastElement, lastElement_index) {
    let borderNumber = 4;
    console.log(lastElement_index);
    console.log(latestProfiles);
    if (latestProfiles.length >= 4) {
      latestProfiles.length = 0;
    }
    if (userProfiles.length - lastElement_index % 4 !== 0 && userProfiles.length - lastElement_index <= 4) {
      borderNumber = userProfiles.length - lastElement_index;
    } else if (userProfiles.length > 4) {
      borderNumber = borderNumber - lastElement_index % 4;
    } else {
      if (lastElement_index !== 0)
        borderNumber = lastElement_index % 4;
      else
        borderNumber = userProfiles.length;
    }
    console.log(borderNumber);
    var i = 0;
    for (var j = lastElement_index; i < borderNumber; j++) {
      i = 0;
      if (j % 4 === 0 && j !== lastElement_index) {
        break;
      } else {
        if (userProfiles[j] === void 0) {
          break;
        }
        latestProfiles.push(userProfiles[j]);
        console.log(latestProfiles.length);
        i++;
      }
    }
    return 1;
  }
  $$unsubscribe_t();
  return `<div class="bg-white-1 p-8 rounded-md w-full font-anonymous"><div class="flex items-center justify-between pb-6"><div><h2 class="text-gray-600 font-semibold">${escape($t("Table of users"))}</h2>
        <span class="text-xs">${escape($t("All users"))}</span></div>
      <div class="flex items-center justify-between"><div class="flex bg-white-2 items-center p-2 "><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."></div>
          <div class="lg:ml-40 ml-10 space-x-8">
            <button class="bg-orange-0 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">${escape($t("Create"))}</button></div></div></div>
      <div><div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"><div class="inline-block min-w-full shadow rounded-lg overflow-hidden"><table class="min-w-full leading-normal"><thead><tr><th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("User name"))}</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("Role"))}</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("Email"))}</th>
                  
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("Liked products"))}</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("Status"))}</th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-white-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">${escape($t("Actions"))}</th></tr></thead>
              <tbody>${userProfiles.length != 0 && userProfiles.length != void 0 ? `${userProfiles.length ? (() => {
    nextPairs(userProfiles[0], 0);
    return ``;
  })() : ``}

                  ${each(latestProfiles, (user, i) => {
    return `<tr><td class="px-5 py-5 border-b border-gray-200 bg-white text-sm "><div class="flex mt-4"><div class="flex flex-wrap -mx-3 mb-6 place-content-center place"><div class="w-full px-3"><label class="block relative overflow-hidden rounded-md border border-transparent px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><input class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" required id="name" autocomplete="given-name"${add_attribute("value", user.name, 0)}>
                              <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-900 whitespace-no-wrap transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Enter the name"))}
                            </span></label>
                        </div></div>
                    </div></td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p class="text-gray-900 whitespace-no-wrap">${user.email === "ktofreesapiens@gmail.com" ? `${escape($t("Admin"))}` : `${escape($t("User"))}`}
                      </p></td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"><div class="flex mt-4"><div class="flex flex-wrap -mx-3 mb-6 place-content-center place"><div class="w-full px-3"><label class="block relative overflow-hidden rounded-md border border-transparent px-3 pt-3 shadow-sm focus-within:border-white-2 focus-within:ring-1 focus-within:ring-white-2" for="first-name"><input class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" type="text" required id="email" autocomplete="given-name"${add_attribute("value", user.email, 0)}>
                              <span class="cursor-text absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-900 whitespace-no-wrap transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">${escape($t("Enter email"))}
                            </span></label>
                        </div></div>
                    </div></td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"><p class="text-gray-900 whitespace-no-wrap">${user.messages.length == 0 ? `0` : `${escape(user.messages.length)}`}
                        
                      </p></td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"><span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"><span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span class="relative">${escape(user.id)}</span>
                      </span></td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm"><div class="flex justify-items-center gap-4"><div class=""><div class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true"><span class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>
      
                            <span class="relative block border border-current bg-white px-8 py-3"><img class="mr-1" alt="setting" src="${escape(base, true) + "/media/edit.svg"}"></span>
                          </div></div>
                        <div><div class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true"><span class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>
      
                            <span class="relative block border border-current bg-white px-8 py-3"><img class="mr-1" alt="setting" src="${escape(base, true) + "/media/trash.svg"}"></span>
                          </div></div>
                      </div></td>
                    
                  </tr>`;
  })}` : `<div class="grid h-screen px-4 bg-white place-content-center"><h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">${escape($t("NO USERS | FOUND"))}</h1></div>`}</tbody></table>
            <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between "><span class="text-xs xs:text-sm text-gray-900">${escape($t("Showing"))} ${escape(userProfiles.indexOf(latestProfiles[0]) + 1)} ${escape($t("to"))} ${escape(userProfiles.indexOf(latestProfiles[latestProfiles.length - 1]) + 1)} ${escape($t("of"))} ${escape(l_userProfiles)} ${escape($t("users"))}</span>
              <div class="inline-flex mt-2 xs:mt-0"><button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">${escape($t("BACK"))}</button>
                   
                <button class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">${escape($t("NEXT"))}</button></div></div></div></div></div></div>`;
});
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="grid h-screen px-4 bg-white place-content-center gap-y-20"><div><h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">MANAGING USERS ACCOUNTS
      <h1></h1></h1></div>
    <div>${validate_component(UserTable, "UserTable").$$render($$result, {}, {}, {})}</div></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-4ijm2u_START -->${$$result.title = `<title>${escape("Sandbox of users")}</title>`, ""}<meta name="dashboard" content="Admin dashboard, manage users "><!-- HEAD_svelte-4ijm2u_END -->`, ""}



${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
