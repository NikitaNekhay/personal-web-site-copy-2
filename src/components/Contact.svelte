<script>
    import {  t } from 'svelte-i18n';




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
        {$t('Currently studies at Innopolis as an exchange student.')}
        <br>{$t('Contacts')}:<br><br>
        <ul style="position: relative;" >
            <li style="padding-bottom: 10px;"> {$t('email')}: <a class="transition duration-100 hover:text-blue-0" href="mailto:ktofreesapiens@gmail.com">{$t('SAY HELLO WITH EMAIL')} </a><br></li>
            <li style="padding-bottom: 10px;">{$t('instagram')}: <a class="transition duration-100 hover:text-blue-0" target="_blank" href="https://instagram.com/araneaesolidum/">ARANEAESOLIDUM</a></li>
            <li style="padding-bottom: 10px;">{$t('telegram')}: <a class="transition duration-100 hover:text-blue-0" target="_blank" href="https://t.me/araneaesolidum">ARANEAESOLIDUM</a><br></li>
        </ul>
    <br>
</div>


<style>
    p.contacts{
        text-align: left; position: relative; height: 100px;
    }

</style>