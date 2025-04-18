import { postDetailController } from "../post-detail/postDetailController.js";
import { notificationsController } from "../../components/notifications/notificationsController.js";


export function initPostDetail() {

    const searchParams = new URLSearchParams(window.location.search);
    const postId = searchParams.get("id");

    const notifications = document.querySelector("#notifications")

    const { showNotification } = notificationsController(notifications)

    if (postId) {

        const postContainer = document.querySelector(".post-container")

        document.addEventListener("post-error", (event) => {
            showNotification(event.detail)
        })

        document.addEventListener("post-success", (event) => {
            showNotification(event.detail.message, event.detail.type)
        })

        postDetailController(postContainer, postId)
    } else {
        window.location = '/'
    }
}
