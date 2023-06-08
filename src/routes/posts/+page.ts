import { getBlogPost } from './post';


export async function load({ params }) {
    const post = await getBlogPost(params.id); // Fetch the blog post details
    console.log(post)
    return {post}
 
}