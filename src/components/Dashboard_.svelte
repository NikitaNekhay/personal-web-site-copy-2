<script lang="ts">
    import { authHandlers, authStore } from "../store/store";
    import { getDoc, doc, setDoc } from 'firebase/firestore';
    import {auth, db} from '../lib/firebase/firebase'
    import { onMount } from "svelte";

    let index 

    //let descriptionList: string[] = [] 
    let descriptionList = [""]
    let errore = false
    let currDescription = ""

    authStore.subscribe((curr) => {
        descriptionList = curr.data.messages
        //descriptionList.concat(curr.data)
        //descriptionList.push(curr.data)
    })

    function addDescription(){
        errore = false
        if(!currDescription){
            errore= true;
        }
        descriptionList = [...descriptionList,currDescription]
        currDescription =""
    }

    function editDescription(index = 0){
        let newDescriptionList = [...descriptionList].filter((val,i) => {
            return i !== index
        })
        currDescription = descriptionList[index]
        descriptionList = newDescriptionList
    }

    function deleteDescription(index= 0){
        let newDescriptionList = [...descriptionList].filter((val,i) => {
            return i !== index
        })
        
        descriptionList = newDescriptionList
    }

    async function saveDescription(){
        try {
            console.log($authStore)
            let userRef = doc(db, 'user', $authStore.user.uid)
            await setDoc(userRef,
            {
                messages:descriptionList
            },
            {merge:true}
            )
        } catch (err) {
           console.log("Error while saving info", err) 
        }
    }


</script>

<!-- {#if !$authStore.loading} -->
    <div class="mainContainer py-100">
        <div class="headerContainer">
            <h1>Your description</h1>
            <div class="headerButtons">
                <button on:click={saveDescription}><i class="fa-sharp fa-light fa-floppy-disk"></i><p>Save</p></button>
            </div>
        </div>
        
        <main>
            {#if descriptionList.length===0}
                <p>
                    You have nothing to do!
                </p>
            {/if}
            {#each descriptionList as description, index}
                <div class="description">
                    <p>
                        {index+1}. {description}
                    </p>
                    <div class="actions">
                        <p on:click={() =>{
                            editDescription(index)
                        }} on:keydown={()=>{}}>edit</p>
                        <p on:click={() =>{
                            deleteDescription(index)
                        }} on:keydown={()=>{}}>delete</p>
                    </div>
                </div>
            {/each}
        </main>
        <div class={"enterDescription " + (errore ? "erroreBorder" : "")}>
            <input bind:value={currDescription} type="text" placeholder="Enter Description">
            <button on:click={addDescription}>ADD</button>
        </div>
    </div>
<!-- {/if} -->
<style>
    .mainContainer{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap:24px;
        padding: 24px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      
    }

    .headerContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerButtons{
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .headerContainer button{
        background: hsl(200, 100%, 18%);
        color: black;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    .headerContainer button i{
      font-size: 1.1rem;
    }

    .headerContainer button:hover{
        background: hsl(200, 100%, 18%);
        color: black;
        padding: 10px 18px;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    main{
        display: flex;
        flex-direction: column;  
        gap:8px;
        flex: 1;

    }
    
    .description{
        border-left: 1px solid chartreuse;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .actions{
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 1.3rem;
    }

    .actions p:hover{
        cursor: pointer;
    }

    .actions p:hover{
        color: coral;
    }

    .enterDescription{
        display: felx;
        align-items: stretch;
        border: 1px solid cyan;
        border-radius: 5px;
        overflow: hidden;
    }

    .erroreBorder{
        border-color: coral !important;
    }

    .enterDescription input{
        background: transparent;
        border: none;
        padding: 14px;
        color: black;
        flex: 1;
    }

    .enterDescription input:focus{
        outline: none;
    }

    .enterDescription button{
        background: #003c5b;
        border: none;
        padding: 0 28px;
        color: cyan;
        font-weight: 600;
        cursor: pointer;
    }

    .enterDescription button:hover{
        background: transparent;
    }
</style>