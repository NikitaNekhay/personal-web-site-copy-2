<svelte:head>
   <title>{'Diary'}</title>
   <meta name="description" content="Some notes and little projects. Jokes">
</svelte:head>

<script lang='ts'>
  import Comic from '../../components/Comic.svelte'
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../../services/ru.json';

  // Загружаем переводы для русского языка
  addMessages('ru', ru);
  // Устанавливаем язык по умолчанию
  locale.set('ru')
</script>

<div class="grid-item-content">
  <div class="grid-item4">
    <p style="text-align: right;">{$t('Diary is hidden!')} <br>
  </div>
  <!-- <Comic /> -->
</div>

<style>
  .grid-item-content{
    padding-top: 200px;
    padding-left: 350px;
    padding-right: 350px;
    display: flexbox;
    margin-right: 0px;
    grid-column: auto;
    grid-row: auto;
  }

</style>