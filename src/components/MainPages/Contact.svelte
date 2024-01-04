<script>
    import { t } from "svelte-i18n";
</script>

{$t("Contacts")}:
<ul style="">
    <li style="padding-bottom: 10px;">
        {$t("email")}:
        <a
            class="p-link"
            href="mailto:ktofreesapiens@gmail.com"
            >{$t("SAY HELLO WITH EMAIL")}
        </a><br />
    </li>
    <li style="padding-bottom: 10px;">
        {$t("instagram")}:
        <a
            class="p-link"
            target="_blank"
            href="https://instagram.com/nikitaaaaaaaaannnnnnnnnekhay/"
            >{$t("OPEN ACCOUNT")}</a
        >
    </li>
    <li style="padding-bottom: 10px;">
        {$t("telegram")}:
        <a
            class="p-link"
            target="_blank"
            href="https://t.me/araneaesolidum">{$t("SAY HELLO IN TELEGRAM")}</a
        ><br />
    </li>
</ul>
<br />
