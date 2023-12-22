<script>
    import { base } from "$app/paths";
    import { t } from "svelte-i18n";
    import { currentLanguage } from "../../store/store";
    let innerWidth = 0
    let innerHeight = 0
    let reverseDisplay = "h-screen w-screen mb-44 md:mb-[400px]";
    if( innerHeight <600 ){
      reverseDisplay = "h-screen w-screen mb-44 md:mb-[1000px]";
    }
</script>
<svelte:window bind:innerWidth bind:innerHeight />
<main>
  <section class="h-screen">
    <div class="grid h-screen px-4 bg-white place-content-center lg:mb-0 md:mb-48 sm:mb-48">
      <h1 class="tracking-widest text-black-1 uppercase font-abril text-6xl sm:text-4xl sm:text-center md:text-center lg:text-center" >
        {$t('project 1 CAPSULE COLLECTION')}
      </h1>
      
    </div>
</section>
{#if innerWidth <=700}
<section class={reverseDisplay}>
  <div class="">
    <div>      
      <div class="flex ">
        <img src="https://lh3.googleusercontent.com/pw/AJFCJaV-M3Nn0qHBrDNRQQ4e9b-N8qc9CIx02_HG5pDHWD22yCeSbpVpYebhR19qs0Cc_wpcuEoQRYUsnGfyWrZcURhFhR4hd4JwgfgxDwLCjTWxUX4TxOg=w2400" 
        alt="polar bear 1" title="polar bear 1" 
        class=" h-3/12 w-4/12">
        <img src="https://lh3.googleusercontent.com/pw/AJFCJaVHekBNOjPVxp_1sDKg2x0lnHYdeD6W1Uw7P-CYZtNvMVb3c59vAZREj5-Rad5Tscon3v3EoAjpVBG-STfmqzJwJFCsRHAU86cHE9M6WOfHoMcURdI=w2400" 
        alt="polar bear 2" title="polar bear 2" 
        class="h-5/12 w-4/12">
        <div class=" bg-cover bg-top w-6/12 h-3/12 bg-[url('https://lh3.googleusercontent.com/pw/AJFCJaVEQUnLA4ikpKxj4HyL84AYwH1dl2V22jNmpkjOOtTN-2nSbKIw1JP2gilpBsHXj834zS_cjqyvFmms51ooQx8NirpNN8klV0j2ntn3pjKMJLLglD8=w2400')]">
        
      </div>
    </div>
      
      <div class="flex justify-end">
        <div class=" bg-cover bg-center w-6/12 h-3/12 bg-[url('https://lh3.googleusercontent.com/pw/AJFCJaWePvjATJe1e5cXk9NParsCaTLT-yE9OTvbGdfsFynItQJ9fg9y_m6bSkK6YqEoFvuvzm3LXxrArlNBxk9DOVg8nmaGH3_RascPJ3m6tSXs9OECRsk=w2400')]"></div>
        <img src="https://lh3.googleusercontent.com/bQX6rwiBe-gtXA_t1LaFJVxNhdTlgnHIp0fjc-bNn8XTMe5JT1gUnjyZT3zsOEr3PsiYlqxoYb480CGAyzZ2ByeNMuARhT0eLeuMvgUq1ObAhBj-fUgV-QYW1_ZSBe_Jvg_QWeCvjA=w2400" 
        alt="chanel 1" title="chanel 1" 
        class="h-4/12 w-4/12">
        <img src="https://lh3.googleusercontent.com/Es2fpNKkBf-jrUw7kpj5BTQGzizO8XxDkXd5xR_Woci7E6HDtns7C9ppkdk6Xke5zWtkH8eHF--qcd2vfYLP4RM8ueRfKN0rDyFBjRmt7abRHdAJVqz2VCHuK8JBX-BUwnj1qdo7Xw=w2400" 
        alt="chanel 2" title="chanel 2"  
        class="h-4/12 w-4/12">
        
      </div>
    
  
  
  <div class="flex justify-center">
    
      <img src="https://lh3.googleusercontent.com/7iP5TOv6XA9Tt6YMJwIJ5rPk6N-PuIZiwSKJR960lmcv22pzgP_tQsKmOu2D_xMnub4qMcvR3wF7SrnxQlfkBmcwDEd6PZvY4mbCS9jrLQW5WL-m0Sv5IUCScMfs8RmYwFzNNgDuEw=w2400" 
      alt="black 1" title="black 1"  
      class="h-6/12 w-4/12">
    
      <img src="https://lh3.googleusercontent.com/pw/AJFCJaXNJYHmbsFzdxyQHdnmOxipFFmEiavoYzP_IpT5sqW0tcSdfpFVO_USgnpl_b1zxL94or3RYMfp3JZHFo4xs-L2IeLTPBSL2yYkwJvU3zbPU0ldGpY=w2400" 
      alt="black 2" title="black 2"  
      class="h-6/12 w-4/12">
    
  </div>
  <div class="flex justify-center">
    
    <img src="https://lh3.googleusercontent.com/I5xvTDQQaLkBipQksD7O02OtjBu0Bb3jUG3H0S7bEqKeO9GovQkF66dS1ZW_Xr2B5BtIwAmFBlxZ7590NOQoIiu7g8qXY3hy9CAVWYUgNO41tqxIUt9GFcKySWqdFcag4xb5fXjRNA=w2400" 
    alt="tank 1" title="tank 1"  
    class="h-6/12 w-4/12">
  
    <img src="https://lh3.googleusercontent.com/AEs9uGffV9Ie4KZoNo5f6ykdIRBM968xjamb3zNlFZQ0KlXHOokOpdTm1JPDgFPFv_2adC6lTNv0S4P5HZtQcaqf_tG8aFKS4qilaoVukeTK-91LbygHwtlFOKdXXZCimy2QiMv4YQ=w2400" 
    alt="tank 2" title="tank 2"  
    class="h-6/12 w-4/12">

    <img src="https://lh3.googleusercontent.com/z2ebtCAt5Vrc7loda-LbpH0dtxCx1wRAezzsK3nqYX8egPQTuAe60lFy2kxhyE8dSq_N8A4_4vz0n3sTGUjn6wxscU0G7SmtfCO00fWdKxPMWEjanAQLGFqFQj61iwqOxol8Q7fEDQ=w2400" 
    alt="tank 3" title="tank 3"  
    class="h-6/12 w-4/12">
  
</div>
</div>
</div>
</section>
{/if}
<section class="h-screen w-screen mb-44 lg:mb-20 xl:mb-80 md:mb-[460px] ">
    <div class="col-span-full sm:h-full">
      <div class="posts flex  sm:h-full sm:self-center">
        <div class=" text-transparent w-1/12 ">
          
        </div > 
        <div class="h-auto w-4/12 sm:w-6/12 mb-20 sm:mb-0 sm:place-content-center justify-center self-center font-anonymous 
        text-2xl sm:text-sm md:text-xl lg:text-xl">
          <article class="hyphens-auto" lang={$currentLanguage.language}>
            <p>
              {$t("This is a presentation of first capsule collection made by my hands. Also it is my early experience in clothes' making.")}
              <br><br>
              {$t("Basis of the idea encourages my interest in nature, fashion history and thoughts of future. References during the design stage were my feelings and memories. Not only the clothes, but the lookbook in the whole represent my sight on different things and events. Together they create digital, futuristic, anthic, and sexy appearence.")}
              <br><br>
              {$t("Each garment is very important and keeps it's own story.")}<br>
              {$t("")}<br>
              {$t("It's very important for me to see your attention and support that will provide continuing and growth of this art.")}<br>
            </p>
            
          </article>
          
        </div > 
        <!-- <div class=" w-1/6 ">
          3
        </div >  -->
        <div class="flex w-1/12">
          <div class=" w-1/2  sm:w-[30%]  border-r-2 border-navy-2"></div>
          <div class=" w-1/2 sm:w-[30%] border-l-2 border-navy-2"></div>
        </div>
        <div class="h-auto grid w-3/12 md:w-6/12 sm:gap-y-30 justify-center sm:justify-end self-center font-anonymous text-2xl sm:text-lg gap-y-20">
          <div>
            <a class="transition duration-200 hover:text-yellow-0"  href="{base}/posts/FiBQiwdz8PGMbVZaX5SZ">{$t("longsleeve 'Polar bear'")}</a>
          </div>
          <div>
            <a class=" transition duration-200 hover:text-yellow-0"  href="{base}/posts/lmeIFdYuXjilAHVh7ClK">{$t('jacket Channel')}</a>
          </div>
          <div>
            <a class=" transition duration-200 hover:text-yellow-0"  href="{base}/posts/7pnembg3O6YIsmaJWdbG">{$t('assymetric longsleeve')}</a>
          </div>
          <div>
            <a class=" transition duration-200 hover:text-yellow-0"  href="{base}/posts/Y1JigqXUTUrLEYxmv2G2">{$t('circled tank top')}</a>
          </div>


        </div>
        {#if innerWidth>700}
          <div class="w-3/12 sm:w-0 relative -top-0">
            <div>
              <div class="">
                <div class="flex ">
                  <img src="https://lh3.googleusercontent.com/pw/AJFCJaV-M3Nn0qHBrDNRQQ4e9b-N8qc9CIx02_HG5pDHWD22yCeSbpVpYebhR19qs0Cc_wpcuEoQRYUsnGfyWrZcURhFhR4hd4JwgfgxDwLCjTWxUX4TxOg=w2400" 
                  alt="polar bear 1" title="polar bear 1" 
                  class=" h-3/12 w-5/12">
                  <img src="https://lh3.googleusercontent.com/pw/AJFCJaVHekBNOjPVxp_1sDKg2x0lnHYdeD6W1Uw7P-CYZtNvMVb3c59vAZREj5-Rad5Tscon3v3EoAjpVBG-STfmqzJwJFCsRHAU86cHE9M6WOfHoMcURdI=w2400" 
                  alt="polar bear 2" title="polar bear 2" 
                  class="h-5/12 w-5/12">
                  <div class=" bg-cover bg-top w-6/12 h-3/12 bg-[url('https://lh3.googleusercontent.com/pw/AJFCJaVEQUnLA4ikpKxj4HyL84AYwH1dl2V22jNmpkjOOtTN-2nSbKIw1JP2gilpBsHXj834zS_cjqyvFmms51ooQx8NirpNN8klV0j2ntn3pjKMJLLglD8=w2400')]">
                  
                </div>
              </div>
                
                <div class="flex justify-end">
                  <div class=" bg-cover bg-center w-6/12 h-3/12 bg-[url('https://lh3.googleusercontent.com/pw/AJFCJaWePvjATJe1e5cXk9NParsCaTLT-yE9OTvbGdfsFynItQJ9fg9y_m6bSkK6YqEoFvuvzm3LXxrArlNBxk9DOVg8nmaGH3_RascPJ3m6tSXs9OECRsk=w2400')]"></div>
                  <img src="https://lh3.googleusercontent.com/bQX6rwiBe-gtXA_t1LaFJVxNhdTlgnHIp0fjc-bNn8XTMe5JT1gUnjyZT3zsOEr3PsiYlqxoYb480CGAyzZ2ByeNMuARhT0eLeuMvgUq1ObAhBj-fUgV-QYW1_ZSBe_Jvg_QWeCvjA=w2400" 
                  alt="chanel 1" title="chanel 1" 
                  class="h-4/12 w-4/12">
                  <img src="https://lh3.googleusercontent.com/Es2fpNKkBf-jrUw7kpj5BTQGzizO8XxDkXd5xR_Woci7E6HDtns7C9ppkdk6Xke5zWtkH8eHF--qcd2vfYLP4RM8ueRfKN0rDyFBjRmt7abRHdAJVqz2VCHuK8JBX-BUwnj1qdo7Xw=w2400" 
                  alt="chanel 2" title="chanel 2"  
                  class="h-4/12 w-4/12">
                  
                </div>
              
            
            
            <div class="flex justify-center">
              
                <img src="https://lh3.googleusercontent.com/7iP5TOv6XA9Tt6YMJwIJ5rPk6N-PuIZiwSKJR960lmcv22pzgP_tQsKmOu2D_xMnub4qMcvR3wF7SrnxQlfkBmcwDEd6PZvY4mbCS9jrLQW5WL-m0Sv5IUCScMfs8RmYwFzNNgDuEw=w2400" 
                alt="black 1" title="black 1"  
                class="h-6/12 w-6/12">
              
                <img src="https://lh3.googleusercontent.com/pw/AJFCJaXNJYHmbsFzdxyQHdnmOxipFFmEiavoYzP_IpT5sqW0tcSdfpFVO_USgnpl_b1zxL94or3RYMfp3JZHFo4xs-L2IeLTPBSL2yYkwJvU3zbPU0ldGpY=w2400" 
                alt="black 2" title="black 2"  
                class="h-6/12 w-6/12">
              
            </div>
            <div class="flex justify-center">
              
              <img src="https://lh3.googleusercontent.com/I5xvTDQQaLkBipQksD7O02OtjBu0Bb3jUG3H0S7bEqKeO9GovQkF66dS1ZW_Xr2B5BtIwAmFBlxZ7590NOQoIiu7g8qXY3hy9CAVWYUgNO41tqxIUt9GFcKySWqdFcag4xb5fXjRNA=w2400" 
              alt="tank 1" title="tank 1"  
              class="h-6/12 w-5/12">
            
              <img src="https://lh3.googleusercontent.com/AEs9uGffV9Ie4KZoNo5f6ykdIRBM968xjamb3zNlFZQ0KlXHOokOpdTm1JPDgFPFv_2adC6lTNv0S4P5HZtQcaqf_tG8aFKS4qilaoVukeTK-91LbygHwtlFOKdXXZCimy2QiMv4YQ=w2400" 
              alt="tank 2" title="tank 2"  
              class="h-6/12 w-5/12">

              <img src="https://lh3.googleusercontent.com/z2ebtCAt5Vrc7loda-LbpH0dtxCx1wRAezzsK3nqYX8egPQTuAe60lFy2kxhyE8dSq_N8A4_4vz0n3sTGUjn6wxscU0G7SmtfCO00fWdKxPMWEjanAQLGFqFQj61iwqOxol8Q7fEDQ=w2400" 
              alt="tank 3" title="tank 3"  
              class="h-6/12 w-5/12">
            
          </div>
          </div>
        </div>
      </div>
        {/if}

      </div>
      
    </div>

  </section>

 

</main>