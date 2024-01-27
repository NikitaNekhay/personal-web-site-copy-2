import { writable } from 'svelte/store';
import { ContactOptions, DeliveryOptions, PaymentOptions } from '../shared/types';

function createCart() {
    let userData = {
        // Default values for UserCartType
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

    if (typeof window !== 'undefined') {
        const userDataPersist = localStorage.getItem('userCart');
        userData = userDataPersist ? JSON.parse(userDataPersist) : userData;
    }

    const cartStore = writable(userData, () => {
        const unsubscribe = cartStore.subscribe((value) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('userCart', JSON.stringify(value));
            }
        });
        return unsubscribe;
    });

    return cartStore;
}

export let cart = createCart();
