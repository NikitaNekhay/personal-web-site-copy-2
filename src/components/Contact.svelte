<script>
    import { base } from '$app/paths'
    import { db } from '$lib/firebase/firebase';
    import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';
    //import { statisticsStore } from '../store/store';

   // async function updateStatisticsCollection() {
        // try {
        //     console.log("statistic store before click", $statisticsStore)
        //     $statisticsStore.adminDataClicks += 1
        //     console.log("statistic store after click", $statisticsStore)
        //     const statisticsCollectionRef = collection(db, "statistics");
        //     const newDocRef = doc(statisticsCollectionRef); // Create a reference to a new document
        //     console.log("what we got from db:",newDocRef)
        //     // update if not empty
    
        //     console.log("value of statisticsStore after updating: ",$statisticsStore)
        //     await updateDoc(newDocRef, $statisticsStore);
        // } catch (error) {
        //     console.error("Error updating statistics collection:", error);
        // }
  //  }
</script>

<div style="display: table-column;">
    <p class="contacts">
        Currently studies at <b>Innopolis</b> as an exchange student.<br><br>Contacts:<br>
        <ul style="position: relative;" >
            <li style="list-style-image:url({base}/media/envelop.svg); padding-bottom: 10px;"> email: <a href="mailto:ktofreesapiens@gmail.com">SAY HELLO WITH EMAIL</a><br></li>
            <li style="list-style-image:url({base}/media/instagram.svg); padding-bottom: 10px;"> instagram: <a target="_blank" href="https://instagram.com/araneaesolidum/">ARANEAESOLIDUM</a> || <a href="https://instagram.com/nekhaynikita/">NEKHAYNIKITA</a><br></li>
            <li style="list-style-image:url({base}/media/telegram.svg); padding-bottom: 10px;"> telegram: <a target="_blank" href="https://t.me/araneaesolidum">ARANEAESOLIDUM</a><br></li>
        </ul>
    <br>
</div>


<style>
    p.contacts{
        text-align: left; position: relative; height: 100px;
    }

</style>