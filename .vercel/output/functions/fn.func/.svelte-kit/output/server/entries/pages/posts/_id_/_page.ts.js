import { g as getBlogPost } from "../../../../chunks/post.js";
async function load({ params }) {
  const post = await getBlogPost(params.id);
  console.log(post);
  return { post };
}
export {
  load
};
