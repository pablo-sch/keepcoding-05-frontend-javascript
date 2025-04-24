import { loaderController } from "../../components/loader/loaderController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";

import { showPostsController } from "../../modules/show-posts/showPostsController.js";
import { loginController } from "../../modules/login/loginController.js";

//document.addEventListener("DOMContentLoaded", () => {

export function initShowPosts() {

    // Here I go to the DOM and select the nodes I need to manage in my code and I manage them in my controllers.
    const container = document.querySelector(".showPosts-container")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    const session = document.querySelector(".session")
    


    const { show, hide } = loaderController(loader);
    const { showNotification } = notificationsController(notifications)

    /*
     'ShowPostsController.js' needs to know when posts start and finish loading, 
     which is handled inside 'showPostsController.js'.

     For that reason, we use 'CustomEvent' in 'showPostsController.js'.

     Here, we listen to those custom events ('load-posts-started' and 'load-posts-finished') 
     on the "container" element. When triggered, we call 'show()' to display the loader, 
     and 'hide()' to remove it once loading is complete.
    */
    container.addEventListener('load-posts-started', () => {
        show();
    })
    container.addEventListener('load-posts-finished', () => {
        hide();
    })
    container.addEventListener('load-posts-error', (event) => {
        const errorMessage = event.detail; // <-- Here we are passing the error obtained from "showPostsController.js".
        showNotification(errorMessage) // <-- Here we do not add the type “success” so it will be “error”.
    })

    showPostsController(container) // This line happens in showPostsController.js
    loginController(session)
}
//})
