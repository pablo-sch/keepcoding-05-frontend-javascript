import { getPosts } from "./showPostsModel.js"
import { buildPost } from './showPostsView.js';

export async function showPostsController(container) { // the container is ".posts-container"

    try {

        container.dispatchEvent(new CustomEvent("load-posts-started"))
        /* const event = new CustomEvent("load-posts-started");
        container.dispatchEvent(event); */

        const posts = await getPosts();
        drawPosts(posts, container)

    } catch (error) {

        const event = new CustomEvent("load-posts-error", {
            // We attach additional data to our "CustomEvent" using a property called "detail".
            // The "detail" is attached to the "event" variable.
            detail: error.message
        })

        // By sending the following line "main.js" will listen for this event and do what we told it to do, 
        // in this case "showNotification(errorMesage)" method.
        container.dispatchEvent(event)

        alert(error.message) // this error comes from showPostsModel.js.

    } finally {

        container.dispatchEvent(new CustomEvent("load-posts-finished"))
        /* const event = new CustomEvent("load-posts-finished")
        container.dispatchEvent(event) */

    }
}

function drawPosts(posts, container) {

    container.innerHTML = ''; // I clean all displayed posts if any.

    if (posts.length === 0) {
        alert("Sorry, no posts available!")
    } else { // I add this "else" to have more clarity of the code.

        posts.forEach((post) => { // If "posts" is an empty array, the "forEach" will not be executed.

            const postHtml = document.createElement("div");
            // Creates an empty HTML element in memory (postHtml), which is not yet in the DOM.

            postHtml.innerHTML = buildPost(post)
            // In an already cleaned container,
            // I assign to "postHtml" whatever the buildPost(post) function returns.

            container.appendChild(postHtml)
            // I insert this new div in the container.
            // Requires you to pass a node object (postHtml), not plain text or HTML.
        })
    }
}