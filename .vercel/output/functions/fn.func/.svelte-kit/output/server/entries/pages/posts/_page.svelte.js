import { c as create_ssr_component, s as subscribe, f as each, e as escape, b as add_attribute, o as onMount, v as validate_component } from "../../../chunks/index.js";
import "../../../chunks/history.js";
import "../../../chunks/post.js";
import { b as base } from "../../../chunks/paths.js";
import { b as blogPost, L as Language } from "../../../chunks/store.js";
import { X, m, x } from "../../../chunks/runtime.esm.js";
import { c as currentLanguagee } from "../../../chunks/store_.js";
/* empty css                                                        */import { e as en, r as ru } from "../../../chunks/en.js";
import { a as auth } from "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_blogPost;
  let $t, $$unsubscribe_t;
  $$unsubscribe_blogPost = subscribe(blogPost, (value) => value);
  $$unsubscribe_t = subscribe(X, (value) => $t = value);
  let blogPosts = [];
  $$unsubscribe_blogPost();
  $$unsubscribe_t();
  return `


  <div class="bg-white"><div class="mx-auto max-w-xl py-16 sm:px-6 sm:py-24 lg: lg:px-8">${blogPosts.length !== 0 ? `${each(blogPosts, (post) => {
    return `<div class="mt-44 flex gap-x-6 gap-y-10 "><div><div class="min-h-80 overflow-hidden bg-gray-200 hover:opacity-80 lg:h-80 hover:cursor-pointer"><img${add_attribute("src", post.images[0], 0)} alt="Blog Post" class="object-center"></div>
              <div class="mt-4 flex justify-between"><div><h3 class="text-sm text-gray-700"><p class="">${escape(post.title)}
                    </p></h3>
                  <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.
                  </h3>
                
                  <p class="mt-2 max-w-sm text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
                    sequi ipsam incidunt.
                  </p></div>
              
                <div class="flex flex-col items-end gap-y-2"><div><p class="text-sm font-medium text-gray-900">${escape(post.price)}</p></div>
                  <div><div class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true"><span class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>

                      <span class="relative block border border-current bg-white px-8 py-3"><img class="mr-1" alt="setting" src="${escape(base, true) + "/media/edit.svg"}"></span>
                    </div></div>
                  <div><div class="group relative inline-block text-sm font-medium text-black-1 focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true"><span class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"></span>

                      <span class="relative block border border-current bg-white px-8 py-3"><img class="mr-1" alt="setting" src="${escape(base, true) + "/media/trash.svg"}">
                      </span></div>
                  </div></div>
                </div></div>
          
      
          </div>`;
  })}` : `<div class="grid h-screen px-4 bg-white place-content-center"><h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">${escape($t("NO POSTS | FOUND"))}</h1></div>`}</div>
  </div>`;
});
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_blogPost;
  let $currentLanguagee, $$unsubscribe_currentLanguagee;
  let $t, $$unsubscribe_t;
  $$unsubscribe_blogPost = subscribe(blogPost, (value) => value);
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
  let blogPosts = [];
  $$unsubscribe_blogPost();
  $$unsubscribe_currentLanguagee();
  $$unsubscribe_t();
  return `<div class="bg-white"><div class="mx-auto max-w-xl py-16 sm:px-6 sm:py-24 lg: lg:px-8">${blogPosts.length !== 0 ? `${each(blogPosts, (post) => {
    return `<div class="mt-44 flex gap-x-6 gap-y-10 "><div><div class="min-h-80 overflow-hidden bg-gray-200 hover:opacity-80 lg:h-80 hover:cursor-pointer"><img${add_attribute("src", post.images[0], 0)} alt="Blog Post" class="object-center"></div>
                <div class="mt-2 flex justify-between"><div class="items-center"><h3 class="text-lg font-bold text-gray-900 sm:text-xl">${escape(post.title)}</h3>
                  
                    <p class="mt-2 max-w-sm text-gray-700">${escape(post.description.slice(0, post.description.search(" ")))}
                    </p></div>
                
                  <div class="grid grid-rows items-center justify-items-end max-h-fit max-w-fit"><div><p class="text-3xl font-medium text-gray-900 font-anonymous">${escape(post.price)}</p></div>
                    <div><button class="hover:text-yellow-0">add to bucket</button>
                    </div></div>
                </div></div>
            
        
        </div>`;
  })}` : `<div class="grid h-screen px-4 bg-white place-content-center"><h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">${escape($t("NO POSTS | FOUND"))}</h1></div>`}</div>
    </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isAdmin = false;
  onMount(() => {
    console.log("getting the name of profile...");
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (user.email === "ktofreesapiens@gmail.com")
          isAdmin = true;
      }
    });
    return unsubscribe;
  });
  return `${$$result.head += `<!-- HEAD_svelte-vzd1un_START -->${$$result.title = `<title>${escape("Posts of the blog")}</title>`, ""}<meta name="post list" content="List of blogs"><!-- HEAD_svelte-vzd1un_END -->`, ""}







  ${isAdmin ? `${validate_component(PostList, "PostList").$$render($$result, {}, {}, {})}` : `${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})}`}

    `;
});
export {
  Page as default
};
