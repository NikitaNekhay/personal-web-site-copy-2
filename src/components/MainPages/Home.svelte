<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { fly, fade } from "svelte/transition";
    import HomeDesktop from "./HomeDesktop.svelte";

    interface DesktopImage {
        src:String;
        cssClass:string;
    };

    let images = [
        "https://lh3.googleusercontent.com/ppxlqw4aPZCO3livRhql5im9ZOSa2vhsFnt77RKhtqmxB4VQ3tBDgNnBXAv5gtiWalWEXB7gd78AfgfnuMW-79YG-hupQCdCi5m_RutrDJVvpVl35cvAMI7HjQrLICb5bpy4aGRKBA=w2400",
        "https://lh3.googleusercontent.com/f8Kww7LpBp_j18kc4AKBbJBlZ3s__Sgbuwlg9QBaDi1IjkL_FBGVo7sp_soxiIkP5hvP_ODZiKGuv6ft-T60r4ZMsqJbPwAmv9UcvBDsU2b-rqroGoD64OL2Ft-z1yWmsYwntgX7Ww=w2400",
        "https://lh3.googleusercontent.com/e677my93QSVa8O2maHeNjSqthiwAwicktjM_t5Yw1Py-FvRGT9-RppNeItKmwje1f7niebEs8EpOHsiPzJQzdUFEHh-EgVOoKeKYbC_fH411imWtRjzk78YuBSVdnpVXL0-kDbyPpQ=w2400",
        "https://lh3.googleusercontent.com/m0Jhld_-hf58mrFQfA4j0UKoNf1J-4aKUR2emepAzCfhQFqKskIUqE7s_UDZ5jgP5TdmBiz-1JxXNHeNjfYU6ywjiXm9zSJeXTFWOxRpCqm6Up7VJkljXRTpxAZZ8m2t40qfwDNFwg=w2400",
        "https://lh3.googleusercontent.com/m0Jhld_-hf58mrFQfA4j0UKoNf1J-4aKUR2emepAzCfhQFqKskIUqE7s_UDZ5jgP5TdmBiz-1JxXNHeNjfYU6ywjiXm9zSJeXTFWOxRpCqm6Up7VJkljXRTpxAZZ8m2t40qfwDNFwg=w2400",
        "https://lh3.googleusercontent.com/cL05xR42SPsTKQViH4RLmKq6fr1VMybkDkyKMnfqjeeLrUErA7YbA-bmVfXSP8Ih5hi6mWfkt9SKZzLurm_KT6U7wFUEyOKKjKHPv4jo5gEUjGhohfjfsfvNQ6_FsAILGJmZUYJh6Q=w2400",
        "https://lh3.googleusercontent.com/m2wYnpz4cmRze0bMcVEojtAcpU0iIan1Nhnkq96KE2tHxP20lY8a4sV2HX3gpbJ_dGeNDgGzI_pcA2eZ1n9HDjC_9WXwWFV_dOTo53qWXY-l0ZtxMxzlUlXUOy7dNzRvo6tbmyAlLQ=w2400",
        "https://lh3.googleusercontent.com/WB1sEI8GLvUO2x6JPgh7gPEs_tfHQxVLv-7QQF2FP3rDeEGtWlXS9M-O5h0qvhzfeUSxJO6AicrsasRsAlHmVasfw2coqtst6f3M3Ckw917cWBWCLl5L2Jplc3iZQ_xV6pOxOocekA=w2400",
        "https://lh3.googleusercontent.com/pAvVxX8R1De4iInq_qIRLM-Jq88FdanvpUbKqk8lp2jzD4ekJcOgJcnsEeoXN4FjSs-x4PmhenY_7gOp_VRYAQlMXRmJe9enHeemSE-Ewjlonq2iw3vr0LqrPt7qUFBKIAPvPrEamw=w2400",
        "https://lh3.googleusercontent.com/z3Ic-X2IfPL1Sj-OURSgX4ADvv_VrgI8-mLpaNfdOk6e8b4ONsZfsw6xUORQpiZloQIgcoXdy3NzjG_voW890fe-Mb9F5xVo_EITy16488Qa8lzfggpoVgsArtn-UED3IA5onZGBjg=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWjocweHIihrsfw4C8H29PuI6gnQKiZjDiJs29nuugc5wHAMAPusTIMZFbGM5xJQGrNv9Vaw6zqX_wfPfkbmFkBkk3mfzTnuei-Ytma7tN37XjppG0=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaVuNPmnbPOYeKKoyfnSsPGKcVHCBIzGZ4PLq02W-hI0nGnUbNhXJam5Zd7w0DWMJTnpw9DVNQg-F6Yzf_i4tyxhVGfSPqZFGZJsAPF0Gmek4KeOpVU=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaURjiNamjCTHVOEFGPxvGZ544xQeBuhyJbneU1E9kYvF0anAFkgS226XfzQwU7ZUzn6yf2M4UPpQxifjUNy2lgj5TYdhYK1uKlUXsQUnS9fTdYAVF0=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWlHzmJorVGedZDwM_Q3ixFGbulnPLUd9Y3vFSS7PEDIdN2WsDkcvHFB2SU6QyWvxZXuxtAN8ejrjPFKN_mgMXmg4ssc95isKbS-oYV2odnXHtdw5Y=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaUoUeU7N_HYucLo1KT-_BjZ_FZBHcfFpW2lX6M0hJgBV3MxYC524oeTDKcrpd37Jpeh_1PVDgmkXsTT2LYKHBAO25flWHVHejSqvTRp9CpF3kR0Qjs=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWayYx4nmDbir27hVxczQf5GbjywQFLQKzZ_DS6y7uSfvEx5rCSOKsWSQTmaihndf0nvBCvV8eIovM7f8OXabSqvvkzqPW1M2XqaSuyDDEHJOZhOp0=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaX2ik2yG92gDkAvm6sRvM3V78aXWhQyuqqXlZ0oLUdduE2QUivItlH__zVe6mH5XHbK007OTSVnU8Mtx-0OfBiOkIqedJXkEJJJqC1rwd0vYJVh50g=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaV9b6SeRjiqc0-8nRqysYYhCNYT5LS8lBF28FquIBhgFrTjPN8p9w7UuPctBwuwpLZaQyXzANGFaW4weTkuXE4tfS5WUYOPr6haFQ-7C0uVoR1w9r4=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWQBgpguW-5w8mVEHXKVSCODsxBKgEFIsDbhGRojYapor0Fpgd5WH6JDF_4hH9OwyWjiLCdqAOzaUUw3gPw_1P13cvChwTaXvD25uK5syenFauoqFw=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWWDQX9c5AsFeb4zxcehmsOQPY3CqLVm6I4IeXkFYWOzAnQbVAEviaOrwV2XqaiZ2hNtmDQs0RtteX7PrHxs8pYxpkkJE1P35YY8aCheW5StYneJDU=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWrsmj4CE5alfVSgJVx_mG2aRr7PW2pLf33x9tO1E0oeLkQ0L1tQzqYSk1umJ7XCpoznrzm0LwZbpXembhpqpjSMODaPC6kgWG-pS0WEg_f2pEC1Cs=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaU5lOStx4RfoAo9yyrPF11cNP8sfG53ATV5Gis4Mu1rQTX2Fg1utnOERTZir79ImH66EkCCI9t1IDM8JGUl5uUwgE5KppEGUV9U7OKUNkbn0Pqjefs=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaWmegQ9fhX6uHnlPNbLa0yHgSKwhPV9KovXvCpJdykOH1mbIjl3EHOFBT4qWybxgis3VCEkjIRkV8SJtenV0iSGUFW0RJqXVv3Q40Cx-gkqeMtvc-M=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaUmY4F2M5l7-WZvLdVEuO-2gHyAnl3i2jt96jwhEcXSuTr9SSZImWtp4TFwYSlTY4VVwUSG9Db6Q6eSdG4123jHy25n4KMR69dYGJxA7fKK2ZIFkQg=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaVJsfMhdJjwR9oj_qSs0yNaAmH54H8HHshk-hiTs0drGw6FrmN66OY6Y5VszSIjVvSM2xbwmYJw7kS7bqBfPQ-OB9yYy292MJxxm9YF2cioJ8WS7HQ=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaV8StwlRK0HazZSCHmtFlKMQacBXWdUn9fA19Z2S6xys5m9MDiI8qd0Z6DIYwEYIBsShi0zv5f03qvSvvRMo2qimKG_sH017-tV_QpiSLteydxSHgU=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaVBSnNqUPGaCPYqJ7Coq0ySWNt8w6BrwvlLjQam01S-iYGewFuK6iANGDnL9G7DgjaJrO_aRwQZdQ9Ca5I9EdhuAgNszSz-c2gc7JMyKBGqA_itmQE=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaUdjLqUZ9AqTYpLE94z3WsM9b89ja4bdATrilYTZ60p0W7iISgUREODYo8QGQTpL0b6bLkAlvlzycqXSXSmhL8OYlKWlXm2Ma79eYnHgFsDeSuvTLQ=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaUdjLqUZ9AqTYpLE94z3WsM9b89ja4bdATrilYTZ60p0W7iISgUREODYo8QGQTpL0b6bLkAlvlzycqXSXSmhL8OYlKWlXm2Ma79eYnHgFsDeSuvTLQ=w2400",
        "https://lh3.googleusercontent.com/pw/AJFCJaXU8aHdp70z9h3AghQ0Rp6tknchUdTPYgiWuN94YT1aHhNnAz-DOaNG0FXaUO5gCEBGZwWUVqkyoQgkudzUOq3urHD80DJYClG2oF7PTIlLeiNSqe0=w2400",
        "https://lh3.googleusercontent.com/vpNWtB3ZIXObJaLdDmQAr8u9xbLxBSdo6j8HPk6VqpmXfqU7uXTeh1MWdqpx2BmP4uRYKcS085SFXVM0d0Tk7dyO9wKDV0COIoENxpph2LjIQ82ZIP59JwLsAGyGydRZ_J5nAFd_Kw=w2400",
        "https://lh3.googleusercontent.com/4KVxPRZ5qzrHXjwlVsltS7yZIHnfveZel5pzkyr91mDL0PsYpuuIKaJaqPocWqaowx5oGHYxM7mNi8C7OEC53lpDhURbKebJeqMxEmtisMWELSRdZdz-MgfadoY8yipji3ndzORolg=w2400",
        "https://lh3.googleusercontent.com/IKwGZPi7IOxzBKqzLnR8xt0nvNQ50tNzOXiEe6GauhgYG-3tFkEDd49QZFWib0ZjiG_KI4VsCzkiM4Rzudsv8IBrumk-Wm23onG0P1h-w6_osoC2ffN21cD_BpKF60D_kDdoxKeK-A=w2400",
        "https://lh3.googleusercontent.com/BvvT22SL03nEQ9kArqHXfrwRd-tx6VvDQDYP7CyU2-hSrlsBLMycwqEd8x_HWFd2P2H2PIGve6_AlHSwTtT7cfZYiPo9onlMZ9Mu9ivjGKo2ZXuk2rXWW5hzRTYU2T06lY-T6fO7nw=w2400",
        // ... add the rest of your image URLs here
    ];

    let initialImages = [
        "https://lh3.googleusercontent.com/pw/AJFCJaUwN3AhGFTVGV_tpIrTBp09YiYOfLnQdm79wmXowCFlYxMHFWV4TR3jWBS44_BNz4wlomvDeP5otsxNGhVq2udIahgjWl67cdgNm1JnkRRYz-yh5vQ=w2400",
        "https://lh3.googleusercontent.com/Z516X6_C1_5qbfaQPqwgWjuNS1PzLLfhiXppje6BKZDjXnBfr6LXHiq6bKz2EuFb1bssVC4livOCXSFbuXHrWIxs102aVcyZRP5afauUedXuKTAsFNzRt4fsFpclPX88xDNuWUi05g=w2400",
    ];

    let desktopImages: DesktopImage[] = []

    let arrayOfRotations = [];
    let arrayOfRotationsCalculate = [
        "h",
        "v",
        "v",
        "v",
        "h",
        "h",
        "h",
        "h",
        "h",
        "h",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "v",
        "h",
        "v",
        "v",
        "v",
        "v",
        "v",
        "h",
        "v",
        "v",
        "v",
        "h",
        "v",
        "h",
        "v",
    ];

    let innerWidth = 0;
    let innerHeight = 0;

    const scrollY = writable(0);
    const loadedImages = writable(2);
    const prevLoadedImagesTrigger = writable(false);
    let flyBorderValue = 500;

    let flyBorderValueMax = 1200;
    let flyBorderValueMin = 500;

    let flyBorderValuePhoneMax = 500;
    let flyBorderValuePhoneMin = 300;

    if (innerWidth < 600 && innerWidth > 0) {
        flyBorderValueMax = flyBorderValuePhoneMax;
        flyBorderValueMin = flyBorderValuePhoneMin;
    } else {
        console.error("dsds");
    }

    async function getImageDimensions(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = function () {
                resolve({ width: this.width, height: this.height });
            };
            img.onerror = function () {
                reject(new Error("Failed to load image"));
            };
        });
    }

    async function getImageDimensionsForUrls() {
        const dimensions = [];
        for (const url of images) {
            try {
                const dimension = await getImageDimensions(url);
                dimensions.push(dimension);
                // console.log(
                //     `${url}: ${dimension.width}px(w) x ${dimension.height}px(h)`,
                // );
            } catch (error) {
                console.error(
                    `Error fetching dimensions for ${url}: ${error.message}`,
                );
            }
        }
        return dimensions;
    }

    async function calculateDimensions() {
        const imageDimensions = await getImageDimensionsForUrls();
        //console.log("All dimensions fetched:", imageDimensions);
        imageDimensions.forEach((af, index) => {
            if (af.width > af.height) {
                arrayOfRotations[index] = "h";
            } else {
                arrayOfRotations[index] = "v";
            }
        });
        //console.log("All done:", arrayOfRotations);
    }



    $: if (
        ((($scrollY - 100) % flyBorderValue) < 100 &&
        (($scrollY - 100) % flyBorderValue) > 0) &&
        initialImages.length <= 35
    ) {
        $prevLoadedImagesTrigger = true;
        //console.log("prevLoadedImagesTrigger")
        //updateFlyBorderValue(); // Call the function to update flyBorderValue
    }
    // This function updates flyBorderValue based on the current image rotation
    function updateFlyBorderValue() {
        if (innerWidth < 600 && innerWidth > 0) {
            flyBorderValueMax = flyBorderValuePhoneMax;
            flyBorderValueMin = flyBorderValuePhoneMin;
        } else {
            console.error("dsds");
            //initialImages.length = 0;
        }
        //console.log("value of image to change for",$loadedImages,arrayOfRotationsCalculate[$loadedImages-1])
        if (arrayOfRotationsCalculate[$loadedImages-1] === "h") {
            flyBorderValue = flyBorderValueMax;
        } else {
            flyBorderValue = flyBorderValueMin;
        }
    }

    $: if (
        ($scrollY % flyBorderValue < 100 &&
        $scrollY % flyBorderValue > 0) &&
        $loadedImages - initialImages.length === 0 &&
        $prevLoadedImagesTrigger &&
        $scrollY > flyBorderValue &&
        initialImages.length <= 35
    ) {
        //console.log("pop img", $loadedImages, initialImages.length);
        updateFlyBorderValue();
        $loadedImages += 1;
        initialImages.push(images.shift());
        updateFlyBorderValue();
        $prevLoadedImagesTrigger = false;
    }

    onMount(() => {
        const updateScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    });

    // $: console.log(
    //     $scrollY,
    //     $loadedImages,
    //     initialImages.length,
    //     $prevLoadedImagesTrigger,
    //     flyBorderValue,
    //     innerWidth,
    // );
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth > 1024}
        <!-- Desktop layout -->
        <HomeDesktop />
{:else}
<!-- Mobile layout (your existing layout) -->
<div class="h-auto">
    <div class=" pt-36">
        <div class="grid grid-cols-1 gap-y-4">
            {#each initialImages as image, index}
                {#if index > $loadedImages || $loadedImages >= 2}
                    <div id="img{index}">
                        <img
                            data-anchor-target="#img{index}"
                            class=" {$loadedImages-index === 1 ? "opacity-0":"opacity-100"}"
                            src={image}
                            alt="image #{index}"
                            in:fade={{ delay: 300, duration: 400 }}
                        />
                    </div>
                {/if}
            {/each}
        </div>

        <div
            class="{$loadedImages<30 ? "pt-96" :"pt-0"} pt- relative bottom-0 top-10 grid justify-items-center justify-self-center justify-center"
        >
            <button
                on:click={() => {
                    document.body.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                    });
                }}
            >
                <img
                    class="w-12 transition-all duration-200 group-hover:scale-150 animate-bounce"
                    src="{base}/media/chevrons-up.svg"
                    alt="icon arrow up"
                />
            </button>
        </div>
    </div>
</div>
{/if}

