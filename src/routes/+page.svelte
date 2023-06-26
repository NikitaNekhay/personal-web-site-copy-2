<script>
    import { base } from '$app/paths'
    import { db } from '$lib/firebase/firebase';
    import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
  import { Route, Router } from 'svelte-routing';
  import Home from '../components/Home.svelte';
    
</script>


<Home />
