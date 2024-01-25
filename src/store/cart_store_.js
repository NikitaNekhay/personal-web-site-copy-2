import { writable } from 'svelte/store';

function createCart() {
    let userData = {
        // Default values for UserCartType
        fullName: '',
        phoneNumber: '',
        email: '',
        contactOption: '', // Default contact option
        contactName: '',
        deliveryOption: '', // Default delivery option
        country: '',
        city: '',
        adress: '',
        paymentOption: '', // Default payment option
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
