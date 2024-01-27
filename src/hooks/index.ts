import type { Writable } from "svelte/store"
import { ContactOptions, DeliveryOptions, Language, PaymentOptions, type UserCartType } from "../shared/types"



export type SessionData = {
    language: Language;
    cart: UserCartType
}
export type SessionStore = Writable<SessionData>

export const getSession = () => {
    // Initialize language
    const language = Language.Russian

    let cart: UserCartType;


    const storedUserCart = localStorage.getItem('userCart');
    console.log(storedUserCart)
    cart = storedUserCart ? JSON.parse(storedUserCart) : {
        // Provide default values for all properties of UserCartType
        fullName: '',
        phoneNumber: '',
        email: '',
        contactOption: ContactOptions.Telegram, // Default contact option
        contactName: '',
        deliveryOption: DeliveryOptions.SelfDelivery, // Default delivery option
        country: '',
        city: '',
        adress: '',
        paymentOption: PaymentOptions.CashLessTotal, // Default payment option
        discount: '',
        cart: []
    };

    return { language, cart }
}


