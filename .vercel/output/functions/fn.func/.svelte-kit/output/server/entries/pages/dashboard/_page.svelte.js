import { c as create_ssr_component, s as subscribe, e as escape, v as validate_component } from "../../../chunks/index.js";
import { X } from "../../../chunks/runtime.esm.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import { L as LoadingSpinner } from "../../../chunks/LoadingSpinner.js";
const UserTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let userProfiles = [];
  let latestProfiles = [];
  function nextPairs(lastElement, lastElement_index) {
    let borderNumber = 4;
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
        i++;
      }
    }
    return 1;
  }
  $$unsubscribe_t();
  return `<div class="w-full rounded-md bg-white-1 p-8 font-anonymous"><div class="flex items-center justify-between pb-6"><div><h2 class="font-semibold text-gray-600">${escape($t("Table of users"))}</h2>
      <span class="text-xs">${escape($t("All users"))}</span></div>
    <div class="flex items-center justify-between"><div class="flex items-center bg-white-2 p-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <input class="ml-1 block bg-gray-50 outline-none" type="text" name="" id="" placeholder="search..."></div>
      <div class="ml-10 space-x-8 lg:ml-40">
        <button class="cursor-pointer rounded-md bg-orange-0 px-4 py-2 font-semibold tracking-wide text-white">${escape($t("Create"))}</button></div></div></div>
  <div><div class="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8"><div class="inline-block min-w-full overflow-hidden rounded-lg shadow"><table class="min-w-full leading-normal"><thead><tr><th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("User name"))}</th>
              <th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("Role"))}</th>
              <th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("Email"))}</th>
              
              <th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("Liked products"))}</th>
              <th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("Status"))}</th>
              <th class="border-b-2 border-gray-200 bg-white-2 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">${escape($t("Actions"))}</th></tr></thead>
          <tbody>${userProfiles.length != 0 && userProfiles.length != void 0 ? `${userProfiles.length ? (() => {
    nextPairs(userProfiles[0], 0);
    return `<p class="text-transparent">1</p>
                `;
  })() : ``}
              ${`<div class="w-full">${validate_component(LoadingSpinner, "LoadingSpinner").$$render($$result, {}, {}, {})}</div>`}` : ``}</tbody></table>
        <div class="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5"><span class="xs:text-sm text-xs text-gray-900">${escape($t("Showing"))}
            ${escape(userProfiles.indexOf(latestProfiles[0]) + 1)}
            ${escape($t("to"))}
            ${escape(userProfiles.indexOf(latestProfiles[latestProfiles.length - 1]) + 1)}
            ${escape($t("of"))}
            ${escape(userProfiles.length)}
            ${escape($t("users"))}</span>
          <div class="xs:mt-0 mt-2 inline-flex"><button class="rounded-l bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">${escape($t("BACK"))}</button>
               
            <button class="rounded-r bg-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">${escape($t("NEXT"))}</button></div></div></div></div></div></div>`;
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
