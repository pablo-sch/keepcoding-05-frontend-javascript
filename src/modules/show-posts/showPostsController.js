import { getPosts } from "./showPostsModel.js"
import { buildPost } from './showPostsView.js';

export async function showPostsController(container) { // the container is ".posts-container"

    try {
        const posts = await getPosts();
        drawPosts(posts, container)
    } catch (error) {
        /* ...  */
    } finally {
        /*  ...  */
    }

}

function drawPosts(posts, container) { // the container is ".posts-container"

    container.innerHTML = '';


    posts.forEach((post) => {

        const postHtml = document.createElement("div");

        postHtml.innerHTML = buildPost(post)

        container.appendChild(postHtml)
    })
}