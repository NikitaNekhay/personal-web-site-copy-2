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
  // Delete the blog post and navigate back to the gallery page
  deleteBlogPost(id);
  console.log('Deleted blog post:', id);
  //window.location.href = `${base}/posts/`;
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
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {#if blogPosts.length !== 0}
          {#each blogPosts as post}
          <div class="mt-6 flex gap-x-6 gap-y-10">
            <div>
              <div on:click={() => handleClick(post.id)} on:keypress class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={post.images[0]} alt="Blog Post"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <p>
                      {post.title}
                    </p>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">{post.price}</p>
                <button on:click={() => handleEdit(post.id)}>{$t('Edit')} </button>
                <button on:click={() => handleDelete(post.id)}>{$t('Delete')} </button>
              </div>
            </div>
      
          </div>
          {/each}
      {:else}
        <div>
          <p>{$t('NO POSTS')} </p>
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

  
