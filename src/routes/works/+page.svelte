<script>
  import { t } from "svelte-i18n";
  import Works from "../../components/MainPages/Works.svelte";
</script>

<svelte:head>
  <title>{$t("NEKHAY NIKITA - LAST CAPSULE COLLECTION")}</title>
  <meta
    name="description"
    content={$t(
      "This is the first presentation of my work on clothes, embodying my ideas about nature, fashion and thoughts about the future. Each element of the collection reflects my memories and vision, blending futuristic, antique and sexual elements, making each item unique and valuable.",
    )}
    />

  <meta
    property="og:title"
    content={$t("NEKHAY NIKITA - LAST CAPSULE COLLECTION")}
  />
  <meta
    property="og:description"
    content={$t(
      "This is the first presentation of my work on clothes, embodying my ideas about nature, fashion and thoughts about the future. Each element of the collection reflects my memories and vision, blending futuristic, antique and sexual elements, making each item unique and valuable.",
    )}
  />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://lh3.googleusercontent.com/pw/ABLVV84JchPziKpXc_40NBIEKF_N3a-AS1VWAN8VVYVTM7iB1amsSAPqM1Z2XW9pFMB96_-14X6wmzvmIp9cUSyyI8vzVubwcl9hg73Ve5xLgCrJSMBATmdfdQF90TF-iwp9njS_iB631feHpJY6vVzKPt-ZJhIOPaNleuy1TONMC0tSP4wImdq1OG4qKoDq_Bz77Hb3v6IN-fzQ9tViOjAAJy7pij4uJZB0wCRmH-RvVOT8gHjSK3OY9JylBOAcKY6XNo2auu_oM2pHWrguMwOLs9cXEbW-YVpr8kpX0xIKnMFqTAg1oaW7SxIMlLMTrvgLisWbHV3Sseru9MEFBY9HSwvrtLMh-cb4zdoI87IfAv612h3QvjP62X4i9eF4rnA4irysbPVXRbykLsuG8R7o42oKT3UxWxUYDi5YlHP-AXNN0w-f1UF7ViBUNETptZ2XDxybh8I0pA2fnLV86OepXPwrSqEyjnaEv6vcAwHlp7c1vKehHep37COx0Ju1rw5f-LsH91RYloIcdOarSSfat73RRWvi2pScMK26qBfXC0yCmF9_mRMd5cPZWQsQLuxqshLbibRpSDenDOnPMv1YvlsRLeXRbpBhLnczC5nuSDJueLXdTiypT5JQct0MgBs-6qx9sB8HBrrX_Akn1uwIg5UtOm7B2f-53mFvFcjI_WkShqkZvzC5TZlKrM6V-w0DkW1JEDGFYWft4I3sbB9tbXbu3hpTh_DZevVW2YXM6gs4EMO82upu6KWFN_RinIzzFs9pwjtE4HV71zthvdIm6lnMnrT8pCLtjjDtnT7i6l4gKZj2YbdgR_64NMEcAQ4dPki5C-WWxgzMHlfP4jnyndfYKfjEdLFtJ3PAMp00tY0izf0ZDg6e3E1mwEka1G6TaVHWvK5ja337C98KhYMGBwGO2HsiPcst-OW-cLjgYcy7olefZoaFlRIfWH4EXDEqdNy_2_CObs4ChwOGXv3joXoF0VEsrGy4fzmnwtltgAdMDSyrFA2Vf3bgTmmPNYcEdg1ykMc=w737-h412-no?authuser=0" />
  <meta property="og:url" content="http://nekhaynikita.shop/works" />

  <meta name="twitter:image" content="https://lh3.googleusercontent.com/pw/ABLVV84JchPziKpXc_40NBIEKF_N3a-AS1VWAN8VVYVTM7iB1amsSAPqM1Z2XW9pFMB96_-14X6wmzvmIp9cUSyyI8vzVubwcl9hg73Ve5xLgCrJSMBATmdfdQF90TF-iwp9njS_iB631feHpJY6vVzKPt-ZJhIOPaNleuy1TONMC0tSP4wImdq1OG4qKoDq_Bz77Hb3v6IN-fzQ9tViOjAAJy7pij4uJZB0wCRmH-RvVOT8gHjSK3OY9JylBOAcKY6XNo2auu_oM2pHWrguMwOLs9cXEbW-YVpr8kpX0xIKnMFqTAg1oaW7SxIMlLMTrvgLisWbHV3Sseru9MEFBY9HSwvrtLMh-cb4zdoI87IfAv612h3QvjP62X4i9eF4rnA4irysbPVXRbykLsuG8R7o42oKT3UxWxUYDi5YlHP-AXNN0w-f1UF7ViBUNETptZ2XDxybh8I0pA2fnLV86OepXPwrSqEyjnaEv6vcAwHlp7c1vKehHep37COx0Ju1rw5f-LsH91RYloIcdOarSSfat73RRWvi2pScMK26qBfXC0yCmF9_mRMd5cPZWQsQLuxqshLbibRpSDenDOnPMv1YvlsRLeXRbpBhLnczC5nuSDJueLXdTiypT5JQct0MgBs-6qx9sB8HBrrX_Akn1uwIg5UtOm7B2f-53mFvFcjI_WkShqkZvzC5TZlKrM6V-w0DkW1JEDGFYWft4I3sbB9tbXbu3hpTh_DZevVW2YXM6gs4EMO82upu6KWFN_RinIzzFs9pwjtE4HV71zthvdIm6lnMnrT8pCLtjjDtnT7i6l4gKZj2YbdgR_64NMEcAQ4dPki5C-WWxgzMHlfP4jnyndfYKfjEdLFtJ3PAMp00tY0izf0ZDg6e3E1mwEka1G6TaVHWvK5ja337C98KhYMGBwGO2HsiPcst-OW-cLjgYcy7olefZoaFlRIfWH4EXDEqdNy_2_CObs4ChwOGXv3joXoF0VEsrGy4fzmnwtltgAdMDSyrFA2Vf3bgTmmPNYcEdg1ykMc=w737-h412-no?authuser=0" />
<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Works />
