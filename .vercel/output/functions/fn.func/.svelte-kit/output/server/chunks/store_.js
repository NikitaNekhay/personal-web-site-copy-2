import { w as writable } from "./index.js";
import { L as Language } from "./store.js";
const persistLanguageStore = (key, initial) => {
  if (typeof window !== "undefined") {
    const persist = localStorage.getItem(key);
    const data = persist ?? initial;
    const store = writable(data, () => {
      const unsubscribe = store.subscribe((value) => {
        localStorage.setItem(key, value);
      });
      return unsubscribe;
    });
    return store;
  }
};
const currentLanguageData = {
  language: Language.English
};
let currentLanguagee = persistLanguageStore("language", currentLanguageData.language);
export {
  currentLanguagee as c
};
