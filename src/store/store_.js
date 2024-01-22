import { writable } from "svelte/store"
import { Language } from "../shared/types";


let userLng = "";

const currentLanguageData ={
  language: userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.Russian , 
}

console.log(currentLanguageData)

export const persistLanguageStore = (key,initial) => {
    if (typeof window !== "undefined") {
      
      
      userLng = (window.navigator.userLanguage || window.navigator.language.split("-", 2)[1]).toLowerCase();
      //console.log("window navigate",window.navigator)
      userLng.toLowerCase;
      // console.log(userLng)
      currentLanguageData.language = userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.English;
      
      console.log(currentLanguageData)
      //console.log("window navigate",userLng.length !== 0 ? (userLng === 'ru' ? Language.Russian : Language.English) : Language.English)
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


  export let currentLanguagee = persistLanguageStore("language",currentLanguageData.language)
  console.log(currentLanguagee,userLng,currentLanguageData.language);