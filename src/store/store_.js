import { writable } from "svelte/store"
import { Language } from "../shared/types";


let userLng = "";

const currentLanguageData ={
  language: userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.English , 
}

export const persistLanguageStore = (key,initial) => {
    if (typeof window !== "undefined") {
      
      
      userLng = window.navigator.userLanguage || window.navigator.language.split("-", 2)[1];
      userLng.toLowerCase;
      console.log("window navigate",window.navigator.language)
    
      currentLanguageData.language = userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.English;

      const persist = localStorage.getItem(key);
      //  //console.log(persist)
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


  

  

  export let currentLanguagee = persistLanguageStore("language",currentLanguageData.language)

