<script lang="ts">
  // import states
  import { onMount } from 'svelte';
  import { getBlogPosts, deleteBlogPost } from '../routes/posts/post';
  import { navigate } from 'svelte-routing';
  import { base } from '$app/paths';
  import { blogPost, currentLanguage } from '../store/store';
  import { addMessages, locale, t } from 'svelte-i18n';
  import ru from '../services/ru.json';
  import { goto } from '$app/navigation';
  

        addMessages('ru', ru);
      // Устанавливаем язык по умолчанию
      locale.set('ru')

  // use Firestore's onSnapshot method to listen for changes
  // in the blogs collection and update the page in 
  // real-time whenever a new blog is added, edited, or deleted.

  

  let blogPosts = [];

  onMount(async () => {
  // Fetch blog posts from the database
  blogPosts = await getBlogPosts();
  console.log(blogPosts)

  // if($currentLanguage.language==='ru'){
  //     // Загружаем переводы для русского языка
  //     addMessages('ru', ru);
  //     // Устанавливаем язык по умолчанию
  //     locale.set('ru')
  // } else {
  //     // Загружаем переводы для русского языка
  //     addMessages('en', en);
  //     // Устанавливаем язык по умолчанию
  //     locale.set('en')
  // }

  });

  function handleClick(id:string) {
  // Navigate to the detailed page of the selected blog post
  console.log(id)
  $blogPost.id = id
  console.log($blogPost.id)
  //goto(`${base}/posts/${id}`);
  window.location.href = `${base}/posts/${id}`;
  }

  function handleEdit(id:string) {
  // Navigate to the edit page of the selected blog post
  $blogPost.id = id
  window.location.href = `${base}/posts/${id}/edit`;
  }

  function handleDelete(id:string) {
  // Store the previous scroll position percentage
  const previousScrollPercentage = (window.pageYOffset || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // Delete the blog post and navigate back to the gallery page
  deleteBlogPost(id);
  console.log('Deleted blog post:', id);

  setTimeout(() => {
    // Calculate and set the new scroll position based on the previous percentage
    location.reload();
  }, 500);

  const newScrollPosition = previousScrollPercentage * (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    window.scrollTo(0, newScrollPosition);

  // const newScrollPosition = previousScrollPercentage * (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // window.scrollTo(0, newScrollPosition);
  }

</script>
  
<!-- <div class="gallery padding-top: 200px;">
    {#if blogPosts.length !== 0}
        {#each blogPosts as post}
        <div class="post">
            <img src={post.images[0]} alt="Blog Post" on:click={() => handleClick(post.id)} on:keypress/>
    
            <div class="actions">
            <button class="edit" on:click={() => handleEdit(post.id)}>Edit</button>
            <button class="delete" on:click={() => handleDelete(post.id)}>Delete</button>
            </div>
        </div>
        {/each}
    {:else}
      <div>
        <p>NO POSTS</p>
      </div>
    {/if}
</div> -->


  <div class="bg-white">
    <div class="mx-auto max-w-xl py-16 sm:px-6 sm:py-24 lg: lg:px-8">
      {#if blogPosts.length !== 0}
          {#each blogPosts as post}
          <div class="mt-44 flex gap-x-6 gap-y-10 ">
            <div>
              <div on:click={() => handleClick(post.id)} on:keypress 
                class="min-h-80 overflow-hidden 
                bg-gray-200 hover:opacity-80 lg:h-80
                hover:cursor-pointer">
                <img src={post.images[0]} alt="Blog Post"
                class="object-center"/>
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <p class="">
                      {post.title}
                    </p>
                  </h3>
                  <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                    Lorem, ipsum dolor.
                  </h3>
                
                  <p class="mt-2 max-w-sm text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis
                    sequi ipsam incidunt.
                  </p>
                </div>
              
                <div class="flex flex-col items-end gap-y-2">
                  <div>
                    <p class="text-sm font-medium text-gray-900">{post.price}</p>
                  </div>
                  <div>
                    <div
                    class="group relative inline-block text-sm font-medium text-black-1 
                    focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer"
                    on:click={() => handleEdit(post.id)} on:keypress={() => handleEdit(post.id)} 
                    id="menu-button" aria-expanded="true" aria-haspopup="true"
                    >
                      <span
                      class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform 
                      group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      ></span>

                      <span class="relative block border border-current bg-white px-8 py-3">
                        <img class="mr-1" alt="setting" src="{base}/media/edit.svg" />
                      </span>
                    </div>  
                  </div>
                  <div>
                    <div
                      class="group relative inline-block text-sm font-medium text-black-1 
                      focus:outline-none focus:ring active:text-black-1 hover:cursor-pointer"
                      on:click={() => handleDelete(post.id)} on:keypress={() => handleDelete(post.id)} 
                      id="menu-button" aria-expanded="true" aria-haspopup="true"
                    >
                      <span
                      class="absolute inset-0 translate-x-0 translate-y-0 bg-navy-1 transition-transform 
                      group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      ></span>

                      <span class="relative block border border-current bg-white px-8 py-3">
                        <img class="mr-1" alt="setting" src="{base}/media/trash.svg" />
                      </span>
                    </div>
                  </div>
                </div>
                </div>
                
                
                
              </div>
          
      
          </div>
          {/each}
      {:else}
      <div class="grid h-screen px-4 bg-white place-content-center">
        <h1 class="tracking-widest text-black-1 uppercase font-abril text-3xl">
          {$t('NO POSTS | FOUND')}
        </h1>
      </div>
      {/if}
  
      
    </div>
  </div>




  <style>
      .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-items: center;
  }

  .post {
    position: relative;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  .post img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .actions button {
    padding: 5px 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  </style>

  
