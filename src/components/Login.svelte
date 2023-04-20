<script lang="ts">
    import { base } from '$app/paths'
    import { redirect } from '@sveltejs/kit';
    import { sendMagicLink } from '../firebase/client';

    // prevent default behavior
    const handleSumbit: svelte.JSX.EventHandler<
    SubmitEvent,
    HTMLFormElement
    > = ({currentTarget}) => {
        const email = new FormData(currentTarget).get('email') as string
        const redirectUrl = `${window.location.origin}/auth/confirm`
        sendMagicLink(email, redirectUrl)
    }
    
</script>


<h1>LOGIN</h1>
    
    <div class="">
        {#if 1 === 1}
        <div class="col-span-12 lg:col-span-5">
            <p>You are not logged in!</p>
            <p>
                Please enter your email to login, using the latest in <strong
                    >Passwordless Authentication</strong
                > 🪄💌!
            </p>
        </div>
        <form
            class="col-span-12 mt-1 flex flex-col gap-6 lg:order-1 lg:col-span-7" 
            on:submit|preventDefault={handleSumbit}
            
        >
            <input
                class="w-full rounded p-4 shadow"
                name="email"
                type="email"
                aria-label="email"
                placeholder="example@with-svelte.com"
                required
            />
            <button>send magic link</button>
        </form>
    {:else}
        <div class="col-span-12">
            <p>Great, we’ve sent you an email!</p>
            <p>
                Please find it in your <strong></strong> inbox and follow the link
                there to login.
            </p>
        </div>
    {/if}

    </div>

<style>
    
h1{
    padding-left: 20px;
    list-style-type:upper-roman;
}


</style>