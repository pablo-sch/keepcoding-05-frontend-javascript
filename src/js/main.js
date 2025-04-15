import { loaderController } from "./components/loader/loaderController.js";
import { showPostsController } from "./modules/show-posts/showPostsController.js";


// Get the DOM nodes we need to interact with.
document.addEventListener("DOMContentLoaded", () => {

    // Here I go to the DOM and select the nodes I need to manage in my code.
    const container = document.querySelector(".posts-container")
    const loader = document.querySelector(".loader")

    const { show, hide } = loaderController(loader)

    /*
     'main.js' needs to know when posts start and finish loading, 
     which is handled inside 'showPostsController.js'.

     For that reason, we use 'CustomEvent' in 'showPostsController.js'.

     Here, we listen to those custom events ('load-posts-started' and 'load-posts-finished') 
     on the container element. When triggered, we call 'show()' to display the loader, 
     and 'hide()' to remove it once loading is complete.
    */
    container.addEventListener('load-posts-started', () => {
        show()
    })
    container.addEventListener('load-posts-finished', () => {
        hide()
        /*showNotification('Posts Loaded')*/
    })
    container.addEventListener('load-tweets-error', (event) => {
        /* const errorMesage = event.detail;
        showNotification(errorMesage) */
    })

    // Then this next code happens in showPostsController.js
    showPostsController(container)

})
