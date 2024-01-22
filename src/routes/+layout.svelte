<script lang="ts">
    import Navbar from "../components/NavbarFooter/Navbar.svelte";
    import EmptyPage from "../components/Shared/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/NavbarFooter/Footer.svelte";
    import { page } from "$app/stores";

    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { auth, db } from "$lib/firebase/firebase";
    import { base } from "$app/paths";
    import { authStore, isAdmin } from "../store/store";
    import { writable } from "svelte/store";
    import { onDestroy, onMount } from "svelte";
    import type { UserDataType } from "../shared/types";
    import { AdminRoutes, Errors, nonAuthRoutes } from "../shared/types";
    import Analytics from "../lib/Analytics.svelte";

    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { error } from "@sveltejs/kit";
    import CommonPopUp from "../components/Shared/CommonPopUp.svelte";
    import { t } from "svelte-i18n";

    let isUser: boolean = false;
    let isChanged: boolead = false;

    const checkUserStatus = (user) => {
        isAdmin.set({ value: false });

        if (user) {
            ////console.log("there is a user: ", user);
            isUser = true;
            if (
                user.email === "ktofreesapiens@gmail.com" ||
                user.email === "vaper20041337@gmail.com"
            ) {
                isAdmin.set({ value: true });
                // isAdmin.set({ value: true });
                // $isAdmin.value = true ;
                //isAdmin.set({value:true})
                // $isAdmin.value = true;
            } else {
                //  //console.log("no admin")
                isAdmin.set({ value: false });
                //$isAdmin.value = false ;
            }
        } else {
            //console.log("there is no user: ", user);
            //console.log("no admin")
            isUser = false;
            //$isAdmin.value = false ;
            isAdmin.set({ value: false });
            //isAdmin.update({ value: false });
        }
        let adminadmin = { value: false };
    };

    const handleRedirect = (user, currentPath) => {
        // if(user){
        //     //console.log("this is user", user)
        //     //console.log("this is current path", currentPath)
        // } else {
        //     //console.log("this is no user", user)
        //     //console.log("this is current path", currentPath)
        // }

        const regex = /\/posts\/([a-zA-Z0-9]+)\/edit/;

        if (
            (AdminRoutes.includes(currentPath) || currentPath.match(regex)) &&
            !$isAdmin.value
        ) {
            //console.log("you are not admin")
            window.location.href = `${base}/`;
            return;
        }

        if (user && currentPath === `${base}/login`) {
            //console.log("go to profile")
            window.location.href = `${base}/profile`;

            return;
        }

        if (
            !user &&
            (currentPath === `${base}/profile` ||
                currentPath === `${base}/profile/edit/credentials` ||
                currentPath === `${base}/profile/edit`)
        ) {
            //console.log("user haven't logged in")
            window.location.href = `${base}/login`;
            return;
        }
    };

    try {
        onMount(() => {
            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                const currentPath = window.location.pathname;
                checkUserStatus(user);
                handleRedirect(user, currentPath);

                let dataToSetToStore: UserDataType = {
                    id: "",
                    name: "template",
                    email: "",
                    phone: "",
                    country: "",
                    description: "",
                    messages: [],
                    cart: [],
                };
                if (user) {
                    const docRef = doc(db, "user", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists()) {
                        const userRef = doc(db, "user", user.uid);
                        dataToSetToStore = {
                            id: userRef.id ?? user.uid,
                            name: userRef.name ?? "template",
                            email: userRef.email ?? user.email,
                            phone: userRef.phone ?? "",
                            country: userRef.phone ?? "",
                            description: userRef.description ?? "",
                            messages: userRef.messages ?? [],
                            cart: userRef.cart ?? [],
                        };
                        await setDoc(userRef, dataToSetToStore, {
                            merge: true,
                        });
                        ////console.log("value of user to put in authStore.user, if snapshot doesn't exist",user)
                        authStore.set({
                            user: user,
                            data: dataToSetToStore,
                            loading: false,
                        });
                    } else {
                        const userData = docSnap.data();
                        dataToSetToStore = {
                            id: userData.id,
                            name: userData.name,
                            phone: userData.phone,
                            email: userData.email,
                            country: userData.phone,
                            description: userData.description,
                            messages: userData.messages,
                            cart: userData.cart,
                        };
                        // //console.log("value of user to put in authStore.user if snapshot exists",user)
                        authStore.set({
                            user: user,
                            data: dataToSetToStore,
                            loading: false,
                        });
                    }
                }
            });

            // const unsubscribe2 = authStore.subscribe((authStore)=>{

            // })

            //onDestroy(unsubscribe);
            // const interval = setInterval(() => {
            //     //passComponent = true;
            // }, 1000);

            return unsubscribe;
        });
    } catch (error) {
        console.error("error while mounting", error);
    }

    injectSpeedInsights(); // function to check speed of site
</script>


<Analytics />
<Navbar />
<!-- <NavbarSm /> -->
{#if $page.error}
    <EmptyPage />
{:else}
    <slot />
{/if}
<Footer />
