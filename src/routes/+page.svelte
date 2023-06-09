<script>
    import { base } from '$app/paths'
    import { db } from '$lib/firebase/firebase';
    import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
  import { Route, Router } from 'svelte-routing';
  import Home from '../components/Home.svelte';
    //import {statisticsStore} from "../store/store"
    //async function createStatisticsCollection() {
        // try {
        //     const statisticsCollectionRef = collection(db, "statistics");
        //     const newDocRef = doc(statisticsCollectionRef, 'statistics', ); // Create a reference to a new document
            
        //     console.log("newDocRef.id is:",newDocRef.id)
        //     const postSnapshot = await getDoc(newDocRef);
        //     console.log("post snap of stats:",postSnapshot)
            
        //     //update if not empty
        //     if (postSnapshot.exists()) {
        //         console.log("snapshot exists!")
        //         const postData = postSnapshot.data()
        //         console.log("postData", postData)
        //         // to ensure that the data fits
        //         const updatedData = {
        //             id: postData.id,
        //             authorEmailClicks: postData.authorEmailClicks ?? 0,
        //             adminDataClicks: postData.adminDataClicks ?? 0,
        //         };
        //         // set the value to store
        //         statisticsStore.set(updatedData)
        //         console.log("value of statisticsStore after updating: ",$statisticsStore)
        //         return postSnapshot.data();
        //     } else {
        //         console.log("snapshot not exists. creating the first document...")
        //         console.log($statisticsStore)
        //         const tempStatDoc = await addDoc(statisticsCollectionRef, $statisticsStore);
        //         $statisticsStore.id = tempStatDoc.id
        //         console.log("the first document is created with id:",$statisticsStore.id)
                
        //         return null;
        //      }
        // } catch (error) {
        //     console.error("Error creating statistics collection:", error);
        // }
    //}

    //createStatisticsCollection();
    
</script>


<Home />
