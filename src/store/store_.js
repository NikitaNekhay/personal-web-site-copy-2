import { writable } from "svelte/store"
import { Language } from "./store"

export const persistLanguageStore = (key,initial) => {
    if (typeof window !== "undefined") {
        const persist = localStorage.getItem(key);
        console.log(persist)
        const data = persist ?? initial;
        console.log(data)
        const store = writable(data, () => {
          const unsubscribe = store.subscribe((value) => {
            //console.log(value)
            localStorage.setItem(key, value);
          });
          return unsubscribe;
        });
        return store;
    }



}

   const currentLanguageData ={
    language: Language.English, 
  }

  export let currentLanguagee = persistLanguageStore("language",currentLanguageData.language)

