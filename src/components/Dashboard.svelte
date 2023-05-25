<script lang="ts">
    import { blogPost } from '../store/store';
    import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { collection, addDoc, Timestamp } from 'firebase/firestore';
    import { db, storage} from "$lib/firebase/firebase";
    import ru from '../services/ru.json';
    import en from '../services/en.json'
  import { currentLanguage } from '../store/store';
  import { onMount } from 'svelte';
  import { addMessages, locale,t } from 'svelte-i18n';

            // Загружаем переводы для русского языка
            addMessages('en', en);
            // Устанавливаем язык по умолчанию
            locale.set('en')
  
    
</script>

<main>
  <div class="grid h-screen px-4 bg-white place-content-center">
    <h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">
      MANAGING USERS ACCOUNTS
    </h1>
  </div> 
</main>
