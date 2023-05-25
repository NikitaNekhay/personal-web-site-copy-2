<script>
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

<div class="grid h-screen px-4 bg-white place-content-center">
  <h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">
    {$t('404 | Not Found')}
  </h1>
</div>