import { writable } from "svelte/store"
import { Language } from "../shared/types";


let userLng = "";

const currentLanguageData = {
  language: userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.Russian,
}

console.log(currentLanguageData)

export const persistLanguageStore = (key, initial) => {
  if (typeof window !== "undefined") {
    console.log("window navigator", window.navigator);

    // Initialize userLng with a default value
    let userLng = 'ru';

    // Check if navigator.language or navigator.languages is defined
    const language = window.navigator.language || (window.navigator.languages && window.navigator.languages[0]);

    if (language) {
      // Normalize language codes to "en" or "ru"
      if (language.toLowerCase().startsWith('ru')) {
        userLng = 'ru';
      } else if (language.toLowerCase().startsWith('en')) {
        userLng = 'en';
      }
    } else if (window.navigator['userLanguage']) {
      // Fallback for older browsers using userLanguage
      if (window.navigator['userLanguage'].toLowerCase().startsWith('ru')) {
        userLng = 'ru';
      } else if (window.navigator['userLanguage'].toLowerCase().startsWith('en')) {
        userLng = 'en';
      }
    }

    const persist = localStorage.getItem(key);
    //console.log(persist)
    const data = persist ?? initial;
    // //console.log(data)
    const store = writable(data, () => {
      const unsubscribe = store.subscribe((value) => {
        ////console.log(value)
        localStorage.setItem(key, value);
      });
      return unsubscribe;
    });
    return store;
  }



}


export let currentLanguagee = persistLanguageStore("language", currentLanguageData.language)
console.log(currentLanguagee, userLng, currentLanguageData.language);