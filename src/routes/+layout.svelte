<script lang="ts">
    import Navbar from "../components/NavbarFooter/Navbar.svelte";
    import EmptyPage from "../components/Shared/EmptyPage.svelte";
    import "../app.css";
    import Footer from "../components/NavbarFooter/Footer.svelte";
    import { page } from "$app/stores";
    import { onMount, setContext, subscribe } from "svelte/internal";
    import { doc, getDoc, setDoc } from "firebase/firestore";
    import { auth, db } from "$lib/firebase/firebase";
    import { base } from "$app/paths";
    import { authStore, isAdmin } from "../store/store";
    import { writable } from "svelte/store";
    import { onDestroy } from "svelte";

    let isUser: boolean = false;

    const nonAuthRoutes = [
        `${base}/`,
        `${base}/about`,
        `${base}/contact`,
        `${base}/login`,
        `${base}/shop`,
        `${base}/works`,
        `${base}/posts`,
    ];

    const AdminRoutes = [
        `${base}/dashboard`,
        `${base}/stat`,
        `${base}/create`,
    ];

    const checkUserStatus = (user) => {

        isAdmin.set({ value: false });

        if (user) {
            console.log("there is a user: ", user);
            isUser = true;
            if (user.email === "ktofreesapiens@gmail.com" || user.email === "vaper20041337@gmail.com") {
                isAdmin.set({ value: true });
                // isAdmin.set({ value: true });
                // $isAdmin.value = true ;
                //isAdmin.set({value:true})
                // $isAdmin.value = true;

            } else {
                console.log("no admin")
                isAdmin.set({ value: false });
                //$isAdmin.value = false ;
            }
            
        } else {
            console.log("there is no user: ", user);
            console.log("no admin")
            isUser = false;
            //$isAdmin.value = false ;
            isAdmin.set({ value: false });
            //isAdmin.update({ value: false });
        }
        let adminadmin = {value:false};


    };

    const handleRedirect = (user, currentPath) => {

        // if(user){
        //     console.log("this is user", user)
        //     console.log("this is current path", currentPath)
        // } else {
        //     console.log("this is no user", user)
        //     console.log("this is current path", currentPath)
        // }
        
        const regex = /\/posts\/([a-zA-Z0-9]+)\/edit/;


        if ((AdminRoutes.includes(currentPath) || currentPath.match(regex)) && !$isAdmin.value) {
            console.log("you are not admin")
            window.location.href = `${base}/`;
            return
        }

        if (user && currentPath === `${base}/login`) {
            console.log("go to profile")
            window.location.href = `${base}/profile`;

            return
        }

        if (!user && currentPath === `${base}/profile`) {
            console.log("user haven't logged in")
            window.location.href = `${base}/login`;
            return
        }


    };

    try {
        onMount(() => {


            const unsubscribe = auth.onAuthStateChanged(async (user) => {
                const currentPath = window.location.pathname;
                checkUserStatus(user);
                handleRedirect(user, currentPath);

                let dataToSetToStore = {
                    name: "template",
                    email: user ? user.email : "",
                    phone: "",
                    country: "",
                    description: "",
                    messages: [],
                };
                
                if(user){
                    const docRef = doc(db, "user", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (!docSnap.exists()) {
                        const userRef = doc(db, "user", user.uid);
                        dataToSetToStore = {
                            name: userRef.name ?? "template",
                            email: userRef.email ?? "",
                            phone: userRef.phone ?? "",
                            country: userRef.phone ?? "",
                            description: userRef.description ?? "",
                            messages: userRef.messages ?? [],
                        };
                        await setDoc(userRef, dataToSetToStore, {
                            merge: true,
                        });
                        //console.log("value of user to put in authStore.user, if snapshot doesn't exist",user)
                        authStore.set({
                            user: user,
                            data: dataToSetToStore,
                            loading: false,
                        });
                    } else {
                        const userData = docSnap.data();
                        dataToSetToStore = {
                            // name: userData.name || "template",
                            // phone: userData.phone || "",
                            // email: userData.email || dataToSetToStore.email,
                            // country: userData.phone || "",
                            // description: userData.description || "",
                            // messages: userData.messages || [],
                            name: userData.name ,
                            phone: userData.phone ,
                            email: userData.email ,
                            country: userData.phone,
                            description: userData.description ,
                            messages: userData.messages,
                        };
                       // console.log("value of user to put in authStore.user if snapshot exists",user)
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

    } 
    catch (error) {
        console.error("error while mounting", error);
    }
</script>



<Navbar />
{#if $page.error}
  <EmptyPage />
{:else}
  <slot />
{/if}
<Footer />