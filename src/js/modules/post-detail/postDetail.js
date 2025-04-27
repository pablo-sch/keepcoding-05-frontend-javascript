import { postDetailController } from "../post-detail/postDetailController.js";

import { notificationsController } from "../../components/notifications/notificationsController.js";
import { loaderController } from "../../components/loader/loaderController.js";


export function initPostDetail() {

    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id");

    const notifications = document.querySelector(".notifications")
    const loader = document.querySelector(".loader")


    const { showNotification } = notificationsController(notifications)
    const { show, hide } = loaderController(loader);

    if (postId) {

        const postContainer = document.querySelector(".postDetail-container")

        postContainer.addEventListener('load-post-started', () => {
            show();
        })

        postContainer.addEventListener('load-post-finished', () => {
            hide();
        })

        postContainer.addEventListener("post-error", (event) => {
            showNotification(event.detail)
        })

        postContainer.addEventListener("post-success", (event) => {
            showNotification(event.detail.message, event.detail.type)
        })

        postDetailController(postContainer, postId)
    } else {
        window.location = '/'
    }
}
