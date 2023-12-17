<script lang="ts">
    import { afterUpdate, onMount } from "svelte";
    import { Errors, type MessageType } from "../../../shared/types";
    import { deleteComment, getComments, updateComment } from "../../../routes/posts/comments";
    import { page } from "$app/stores";
    import { authStore, isAdmin, triggerComments } from "../../../store/store";
    import { comment } from "postcss";
    import LoadingSpinner from "../../Shared/LoadingSpinner.svelte";
    import Error from "../../../routes/+error.svelte";

    let commentaries:MessageType[] = [];
    
    let editClicked = {
        value:false,
        index:-1,
    }
    let isLoading:boolean = true;
    let showTrigger:boolean;

    let isChangedError:boolean = false;
    let msg:String ="";
    let smmsg:String = "Something went wrong while handling item."

    onMount(async()=>{
        try {
            try {
                commentaries = await getComments()
                commentaries= commentaries.filter((obj) => obj.post === $page.params.id);
                console.log($triggerComments.value);
                // if($triggerComments.value){
                //     $triggerComments.value = false;
                // }
            } catch (error) {
                throw Errors.FetchComments;
            }

            const unsubscribe = authStore.subscribe((authStore)=>{
                if($authStore.loading)
                    isLoading = false
                else
                    isLoading = true
            })
            isLoading = false
        } catch (err) {
            if(typeof(err)==="string"){
                msg = err;
            } else if(err.message !== undefined){
                msg = err.message;
            } else {
                msg = Errors.FetchPost
            }
            isChangedError= true
            isLoading = false
        }
        
    })

    afterUpdate(async()=>{
        showTrigger = $triggerComments.value;
        console.log(showTrigger)
    })

    function checkUserRight(comment:MessageType){
        if($authStore.user){
            if($authStore.user.uid === comment.id || $isAdmin.value){
                return true
            } else {
                return false
            }
        } else {
            console.error("no user to check the rights")
            isLoading = false
            return false
        }
        
    }
    
    function handleSave(event,comment){
        event.preventDefault()
        editClicked = !editClicked;

        try {
            updateComment(comment)
            console.log(comment)
            $triggerComments.value = true;

            setTimeout(()=>{
            $triggerComments.value = false;
            console.log($triggerComments.value)

            },1500)
        } catch (error) {
            console.log("error while save comment")
            throw Errors.SaveComment;
        }
       
    }

    function handleEdit(event,commentIndex){
        editClicked.value = !(editClicked.value);
        editClicked.index = commentIndex;
    }   

    function handleDelete(event,cid:string){
        try {
            $triggerComments.value = true;

            setTimeout(()=>{
            $triggerComments.value = false;
            console.log($triggerComments.value)

            },1500)
            deleteComment(cid);
        } catch (error) {
            throw Errors.DeleteComment;
            console.log("error while delete comment")
        }
       
    }  




</script>


<div>
    <h1 class="text-center w-full mt-4">Commentaries:</h1>
</div>

{#key triggerComments}
{#if commentaries}
<ul>
{#each commentaries as comment, i}


    {#if $isAdmin.value}
    <li>{comment.id}: {comment.comment}</li> 
    {:else}
    <li>Someone thinks: {comment.comment}</li> 
    {/if}

    <div class="flex items-center justify-end gap-2 bg-white p-3">
        {#if checkUserRight(comment)}
            <p>What to do with your comment?</p>
            {#if editClicked && editClicked.index===i}
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
                on:click={(event)=>{handleEdit(event,i)}}
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



{/each}
</ul>
{:else}
<div>
    <h1 class="text-center w-full mt-4">Please leave a comment!</h1>
</div>
{/if}

{/key}
