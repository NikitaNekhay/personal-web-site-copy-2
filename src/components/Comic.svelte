<script lang="ts">

    interface ComicObj{
    alt: string;
    day: string;
    img: string;
    link: string;
    month: string;
    news: string;
    num: number;
    safe_title: string;
    title: string;
    transcript: string;
    year: string;
    };

    function validateData(str:string | number) : boolean{
    try {
        const newUrl = new URL(str.toString());
        const pattern = new RegExp(
            '^([a-zA-Z]+:\\/\\/)?' + // protocol
              '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
              '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
              '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
              '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
              '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
          );
          
        return (newUrl.protocol === 'http:' || newUrl.protocol === 'https:')&&pattern.test(str.toString());
      } catch (err) {
        return false;
      }
    }

    async function getComic(){  
      const email: string = "n.niakhai@innopolis.university"
      const queryParams1: URLSearchParams = new URLSearchParams({ email: email });
        // fetching id from inno
        let varja: Response = await fetch("https://fwd.innopolis.app/api/hw2?" + queryParams1.toString());
        let var_ID:number = await varja.json(); 

        if(validateData(var_ID) || var_ID === null){
            alert('Invalid source!');
            return;
        }
        console.log(var_ID);

        const queryParams2: URLSearchParams = new URLSearchParams({
        num: var_ID.toString(),});

        // API fetching xcc data from comic site
        let comic_obj_json:Response = await fetch("https://getxkcd.vercel.app/api/comic?" + queryParams2.toString());
        return await comic_obj_json.json(); 

    }

    const comic:Promise<ComicObj> = getComic(); 
    
</script>

<div class="grid-item4">
    <section >
        {#await comic}
        <p>Getting your very very funny joke, sir...</p>
        {:then comic} 
            <img src={comic.img} alt={comic.alt} title={comic.title}>
            <span class="XKCD_comic">
              <p>
                <br><br>Title: {comic.title}<br><br>Description of comic:<br>{comic.transcript}<br><br>
                Date: {comic.day}.{comic.month}.{comic.year}
              </p>
            </span>
        {/await}
    </section> 
</div>

<style>
  p{
    text-align: left;
  }
   .grid-item4{
    text-align: center;
    }

</style>