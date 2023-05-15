export const translationLang ={
    en: {
        aboutLink: "About",
        contactLink: "Contact",
        worksLink:"Works",
        diaryLink:"Diary",
        LoginLink:"Login",
    },
    ru: {
        abouLink: "Главное",
        contactLink: "Контакты",
        worksLink:"Работы",
        diaryLink:"Дневник",
        LoginLink:"Логин",
    }
} 

export function getCurrentLanguage(switcher:boolean){
    try {
        if(switcher){
            return "en"
        } else {
            return "ru"
        }
    } catch (error) {
        console.log("error while switching the lang", error)
    }
   

}

export function getTranslation(key) {
    const currentLanguage = getCurrentLanguage(); // Функция для получения текущего языка
    return translationLang[currentLanguage][key];
  }
  