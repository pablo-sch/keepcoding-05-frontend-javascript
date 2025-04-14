import { showPostsController } from "./modules/show-posts/showPostsController.js";


// this callback is executed once the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".posts-container")
    showPostsController(container)

})
