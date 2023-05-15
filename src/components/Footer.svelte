<script>
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';

  // Загружаем переводы для русского языка
  addMessages('ru', ru);
  // Устанавливаем язык по умолчанию
  locale.set('ru')
</script>

<nav class="flex w-screen font-anonymous">
    <footer class="h-screen flex justify-center items-center">
        <div>
            {$t('Dream big, work hard')}       
        </div>
    </footer>
</nav>


<style>

</style>