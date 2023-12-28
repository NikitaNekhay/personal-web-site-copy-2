import { getProduct } from '../post';


export async function load({ params }) {
    const post = await getProduct(params.id); // Fetch the blog post details
   // console.log(post)
    return {post}
 
}