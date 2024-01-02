<script>
    import {  t } from 'svelte-i18n';

</script>


    <p class="contacts">

        <br>{$t('Contacts')}:<br>
        <ul style="" >
            <li style="padding-bottom: 10px;"> {$t('email')}: <a class="transition duration-200 hover:text-blue-0" href="mailto:ktofreesapiens@gmail.com">{$t('SAY HELLO WITH EMAIL')} </a><br></li>
            <li style="padding-bottom: 10px;">{$t('instagram')}: <a class="transition duration-200 hover:text-blue-0" target="_blank" href="https://instagram.com/nikitaaaaaaaaannnnnnnnnekhay/">{$t('OPEN ACCOUNT')}</a></li>
            <li style="padding-bottom: 10px;">{$t('telegram')}: <a class="transition duration-200 hover:text-blue-0" target="_blank" href="https://t.me/araneaesolidum">{$t('SAY HELLO IN TELEGRAM')}</a><br></li>
        </ul>
    <br>



<style>
    p.contacts{
        text-align: left; position: relative; height: 100px;
    }

</style>