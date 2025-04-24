import { getPosts } from "./showPostsModel.js"
import { buildPost } from './showPostsView.js';

//===================================================================================================================
export async function showPostsController(container) { // the container is ".posts-container"

    const pages = document.getElementById('pages');

    const POSTS_PER_PAGE = 10;
    let currentPage = 1;

    try {
        //container.dispatchEvent(new CustomEvent("load-posts-started"))
        const event = new CustomEvent("load-posts-started");
        container.dispatchEvent(event); // --> This "event" goes to "load-posts-started".

        //===================================
        const { posts, totalPosts } = await getPosts(currentPage);
        //===================================

        drawPosts(posts, container);
        drawPages(totalPosts);

    } catch (error) {

        const event = new CustomEvent("load-posts-error", {
            // We attach additional data to our "CustomEvent" using a property called "detail".
            // The "detail" is attached to the "event" variable.
            detail: error.message
        })

        console.log(error)

        // By sending the following line "main.js" will listen for this event and do what we told it to do, 
        // in this case "showNotification(errorMesage)" method.
        container.dispatchEvent(event) // --> This "event" goes to "load-posts-error".

    } finally {

        const event = new CustomEvent("load-posts-finished")
        container.dispatchEvent(event) // --> This "event" goes to "load-posts-finished".
    }


    //-------------------------------------------------------------------------------------------------------------------
    function drawPosts(posts, container) {

        container.innerHTML = ''; // I clean all displayed posts if any.

        if (posts.length === 0) {
            //alert("Sorry, no posts available!")
        } else { // I add this "else" to have more clarity of the code.

            posts.forEach((post) => { // If "posts" is an empty array, the "forEach" will not be executed.

                const postHtml = document.createElement("a");
                postHtml.setAttribute("href", `./views/post-detail.html?id=${post.id}`)
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

    //-------------------------------------------------------------------------------------------------------------------
    function drawPages(totalPosts) {

        pages.innerHTML = '';

        const pageCount = Math.ceil(totalPosts / POSTS_PER_PAGE);

        for (let i = 1; i <= pageCount; i++) {

            const btn = document.createElement('button');
            btn.textContent = i;

            if (i === currentPage) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', async () => {
                
                currentPage = i;

                try {
                    //===================================
                    const { posts } = await getPosts(currentPage);
                    //===================================
                    
                    drawPosts(posts, container);
                    drawPages(totalPosts);

                } catch (error) {

                    const errorEvent = new CustomEvent("load-posts-error", {
                        detail: error.message
                    });
                    container.dispatchEvent(errorEvent);
                }
            });

            pages.appendChild(btn);
        }
    }
}
