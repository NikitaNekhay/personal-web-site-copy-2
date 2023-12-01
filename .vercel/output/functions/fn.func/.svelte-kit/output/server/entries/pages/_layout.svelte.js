import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape, o as onMount, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
import { L as Language, a as authStore, i as isAdmin } from "../../chunks/store.js";
import { X, m, x } from "../../chunks/runtime.esm.js";
import { e as en, r as ru } from "../../chunks/en.js";
import { c as currentLanguagee } from "../../chunks/store_.js";
import { p as page } from "../../chunks/stores.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { a as auth, d as db } from "../../chunks/firebase.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let isUser = false;
  console.log("is there any user at navbar", isUser);
  $$unsubscribe_currentLanguagee();
  $$unsubscribe_t();
  return `<nav class="flex w-screen font-anonymous"> <div class="fixed top-0 z-30 w-full"><div class="mx-auto flex w-11/12 items-center justify-between border-x-4 border-navy-1 bg-white-1 shadow-white-2 drop-shadow-2xl"><div class="mx-2 flex w-full items-center justify-between sm:gap-0 md:gap-8 lg:gap-16"> <div class="text-2xl" data-svelte-h="svelte-1aim4ul"><a class="transition duration-200 hover:text-yellow-0" target="_self" href="${escape(base, true) + "/"}"><h1><p class="flex justify-center">NIKITA</p> <p>NIAKHAI</p></h1></a></div>  <div class="flex items-center justify-between drop-shadow sm:mx-8 md:mx-12 lg:mx-20"><div class="border-r-2 border-navy-2"><a class="text-black no-underline underline-offset-4 hover:underline" target="_self" href="${escape(base, true) + "/about"}">${escape($t("About"))}</a> <a class="text-black no-underline underline-offset-4 hover:underline sm:mx-8 md:mx-12 lg:mx-20" target="_self" href="${escape(base, true) + "/contact"}">${escape($t("Contact"))}</a></div> <div class="border-l-2 border-navy-2"><a class="text-black no-underline underline-offset-4 hover:underline sm:mx-8 md:mx-12 lg:mx-20" target="_self" href="${escape(base, true) + "/shop"}">${escape($t("Shop"))}</a> <a class="text-black no-underline underline-offset-4 hover:underline" target="_self" href="${escape(base, true) + "/works"}">${escape($t("Works"))}</a></div></div>  <div><div class="grid-column-auto grid-row-auto">${`<a class="grid-row-auto col-span-full transition duration-200 hover:text-yellow-0" target="_self" href="${escape(base, true) + "/login"}">${escape($t("Login"))}</a>`}</div></div></div></div></div></nav>`;
});
const EmptyPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  $$unsubscribe_t();
  return `<div class="grid h-screen px-4 bg-white place-content-center"><h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">${escape($t("404 | Not Found"))}</h1></div>`;
});
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentLanguagee, $$unsubscribe_currentLanguagee;
  $$unsubscribe_currentLanguagee = subscribe(currentLanguagee, (value) => $currentLanguagee = value);
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
  $$unsubscribe_currentLanguagee();
  return `<footer aria-label="Site Footer" class="relative bg-white-1 lg:grid lg:grid-cols-5 font-anonymous bottom-0 mt-20 shadow-white-2 drop-shadow-2xl"><div class="relative block h-32 lg:col-span-2 lg:h-full" data-svelte-h="svelte-1pz2s5q"><img src="https://lh3.googleusercontent.com/pw/AJFCJaWk73NiFqnvmE4ERdCThcHS_cjkfnjyMZT77oTLttHPaAYfRT2E0vWixrFc_Yk_PkkbBO6EunYTPi65rkik7TkcgBi1Av-UeGfMTcww1syn7ZlhRpU=w2400" alt="pink flower in lake" class="absolute inset-0 object-cover w-full h-full"></div> <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8"><div class="grid grid-cols-1 gap-8 sm:grid-cols-2" data-svelte-h="svelte-8skjma"><div><p><span class="text-xs tracking-wide text-black-0 uppercase">Call us</span> <a href="tel:+375445785057" class="block text-2xl font-medium text-black-1 transition duration-200 hover:opacity-75 hover:text-blue-0 sm:text-3xl">+375445785057</a></p> <ul class="mt-8 space-y-1 text-sm text-red-2"><li>Monday to Friday: 10am - 5pm</li> <li>Weekend: 10am - 3pm</li></ul> <ul class="flex gap-6 mt-8"><li><a href="${escape(base, true) + "/"}" rel="noreferrer" target="_blank" class="text-red-2 transition hover:opacity-75"><span class="sr-only">Facebook</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a></li> <li><a href="https://instagram.com/nekhaynikita" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75 hover:text-blue-0"><span class="sr-only">Instagram</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a></li> <li><a href="${escape(base, true) + "/"}" rel="noreferrer" target="_blank" class="text-red-2 transition hover:opacity-75 hover:text-blue-0"><span class="sr-only">Twitter</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a></li> <li><a href="https://github.com/NikitaNekhay/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75 hover:text-blue-0"><span class="sr-only">GitHub</span> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a></li></ul></div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div><p class="font-medium text-gray-700">Services</p> <nav aria-label="Footer Navigation - Services" class="mt-6"><ul class="space-y-4 text-sm"><li><a href="${escape(base, true) + "/"}" class="text-black-0 transition duration-200 hover:text-yellow-0">Individual sewing and designing</a></li> <li><a href="${escape(base, true) + "/"}" class="text-black-0 transition duration-200 hover:text-yellow-0">Creative director</a></li> <li><a href="https://www.behance.net/nekhaynikita" target="_blank" class="text-black-0 transition duration-200 hover:text-yellow-0">Photography</a></li></ul></nav></div> <div><p class="font-medium text-gray-700">Company</p> <nav aria-label="Footer Navigation - Company" class="mt-6"><ul class="space-y-4 text-sm"><li><a href="${escape(base, true) + "/about"}" class="text-black-0 transition duration-200 hover:text-yellow-0">About</a></li> <li><a href="${escape(base, true) + "/"}" class="text-red-2 transition hover:opacity-75">Accounts Review</a></li></ul></nav></div></div></div> <div class="pt-12 mt-12 border-navy-1 border-t-2"><div class="sm:flex sm:items-center sm:justify-between"><nav aria-label="Footer Navigation - Support"><ul class="flex flex-wrap gap-4 text-xs"><li data-svelte-h="svelte-1gbpic6"><a href="${escape(base, true) + "/"}" class="text-red-2 transition hover:opacity-75">Terms &amp; Conditions</a></li> <li data-svelte-h="svelte-1xqii4v"><a href="${escape(base, true) + "/"}" class="text-red-2 transition hover:opacity-75">Privacy Policy</a></li> <li data-svelte-h="svelte-wnyhf0"><a href="${escape(base, true) + "/"}" class="text-red-2 transition hover:opacity-75">Cookies</a></li> <li><button><form method="POST" action="/?/setLang" class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition hover:opacity-75 hover:text-red-0">[language: ${escape($currentLanguagee)} :language]</form></button></li></ul></nav> <p class="mt-8 text-xs text-gray-700 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500" data-svelte-h="svelte-11onon5">© 2023. NIKITA NIAKHAI. All rights reserved.</p></div></div></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAdmin, $$unsubscribe_isAdmin;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isAdmin = subscribe(isAdmin, (value) => $isAdmin = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const AdminRoutes = [`${base}/dashboard`, `${base}/stat`, `${base}/create`];
  const checkUserStatus = (user) => {
    isAdmin.set({ value: false });
    if (user) {
      console.log("there is a user: ", user);
      if (user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com") {
        isAdmin.set({ value: true });
      } else {
        console.log("no admin");
        isAdmin.set({ value: false });
      }
    } else {
      console.log("there is no user: ", user);
      console.log("no admin");
      isAdmin.set({ value: false });
    }
  };
  const handleRedirect = (user, currentPath) => {
    console.log("this is current path", currentPath);
    if (user) {
      console.log("this is user", user);
    } else {
      console.log("this is no user");
    }
    const regex = /\/posts\/([a-zA-Z0-9]+)\/edit/;
    if ((AdminRoutes.includes(currentPath) || currentPath.match(regex)) && !$isAdmin.value) {
      console.log("you are not admin");
      window.location.href = `${base}/`;
      return;
    }
    if (user && currentPath === `${base}/login/`) {
      console.log("go to profile");
      window.location.href = `${base}/profile/`;
      return;
    }
    if (!user && currentPath === `${base}/profile/}`) {
      console.log("user haven't logged in");
      window.location.href = `${base}/login/`;
      return;
    }
  };
  try {
    const unsub2 = onMount(() => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        const currentPath = window.location.pathname;
        checkUserStatus(user);
        handleRedirect(user, currentPath);
        let dataToSetToStore = {
          name: "template",
          email: user ? user.email : "",
          phone: "",
          country: "",
          description: "",
          messages: []
        };
        if (user) {
          const docRef = doc(db, "user", user.uid);
          const docSnap = await getDoc(docRef);
          if (!docSnap.exists()) {
            const userRef = doc(db, "user", user.uid);
            dataToSetToStore = {
              name: userRef.name ?? "template",
              email: userRef.email ?? "",
              phone: userRef.phone ?? "",
              country: userRef.phone ?? "",
              description: userRef.description ?? "",
              messages: userRef.messages ?? []
            };
            await setDoc(userRef, dataToSetToStore, { merge: true });
            authStore.set({
              user,
              data: dataToSetToStore,
              loading: false
            });
          } else {
            const userData = docSnap.data();
            dataToSetToStore = {
              // name: userData.name || "template",
              // phone: userData.phone || "",
              // email: userData.email || dataToSetToStore.email,
              // country: userData.phone || "",
              // description: userData.description || "",
              // messages: userData.messages || [],
              name: userData.name,
              phone: userData.phone,
              email: userData.email,
              country: userData.phone,
              description: userData.description,
              messages: userData.messages
            };
            authStore.set({
              user,
              data: dataToSetToStore,
              loading: false
            });
          }
        }
      });
      return unsubscribe;
    });
  } catch (error) {
    console.error("error while mounting", error);
  }
  $$unsubscribe_isAdmin();
  $$unsubscribe_page();
  return `  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${$page.error ? `${validate_component(EmptyPage, "EmptyPage").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
