<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import type { MessageType } from "../../../shared/types";
    import { deleteComment, getComments, updateComment } from "../../../routes/posts/comments";
    import { page } from "$app/stores";
    import { authStore, isAdmin } from "../../../store/store";
    import { comment } from "postcss";
    import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";

    let commentaries:MessageType[] = [];
    
    let editClicked:boolean = false;
    let isLoading:boolean = true;

    onMount(async()=>{
        commentaries = await getComments()
        commentaries= commentaries.filter((obj) => obj.post === $page.params.id);

        const unsubscribe = authStore.subscribe((authStore)=>{
            if($authStore.loading)
                isLoading = false
            else
                isLoading = true

        })
        return unsubscribe;
        
    })


    function checkUserRight(comment:MessageType){

        if($authStore.user){
            if($authStore.user.uid === comment.id || $isAdmin.value){
                return true
            } else {
                return false
            }
        } else {
            console.error("error while checking users rights")
            return false
        }
        
    }
    
    function handleSave(event,comment){
        event.preventDefault()
        editClicked = !editClicked;

        try {
            updateComment(comment)
            console.log(comment)
        } catch (error) {
            console.log("error while crud comment")
        }
       
    }

    function handleEdit(event){
        editClicked = !editClicked;
        try {
            
        } catch (error) {
            console.log("error while crud comment")
        }
       
    }   

    function handleDelete(event,cid:string){
        try {
            deleteComment(cid);
        } catch (error) {
            console.log("error while crud comment")
        }
       
    }  




</script>

<div>
    <h1 class="text-center w-full mt-4">Commentaries:</h1>
</div>
{#key commentaries}
{#if commentaries}
<ul>
{#each commentaries as comment, i}


    {#if $isAdmin.value}
    <li>{comment.id}: {comment.comment}</li> 
    {:else}
    <li>Someone thinks: {comment.comment}</li> 
    {/if}

    {#if isLoading}
    <div class="flex items-center justify-end gap-2 bg-white p-3">
        {#if checkUserRight(comment)}
            {#if editClicked}
            <input type="text" bind:value={comment.comment} />
            <button
                type="button"
                class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                on:click={(event)=>{handleSave(event,comment)}}
            >
                Save
            </button>
            {:else}
            <button
                type="button"
                class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                on:click={(event)=>{handleEdit(event)}}
            >
                Edit
            </button>
            {/if}
              
                <button
                type="button"
                class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                on:click={(event)=>{handleDelete(event,comment.cid)}}
            >
                Delete
            </button>
        {/if}
      </div>
    {:else}
        <LoadingSpinner />
    {/if}


{/each}
</ul>
{:else}
<div>
    <h1 class="text-center w-full mt-4">Please leave a comment!</h1>
</div>
{/if}

{/key}