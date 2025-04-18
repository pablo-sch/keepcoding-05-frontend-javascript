import { createPostController } from "../create-post/createPostController.js";
import {notificationsController} from "../../components/notifications/notificationsController.js"

export function initCreatePost() {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        window.location = '/views/login.html'
    }

    const createPostForm = document.querySelector('#createPostForm')
    const notifications = document.querySelector("#notifications");

    const { showNotification } = notificationsController(notifications)

    createPostForm.addEventListener("createPost-ok", (event) => {
        const message = event.detail.message;
        const type = event.detail.type;
        showNotification(message, type)
    })

    createPostForm.addEventListener("createPost-error", (event) => {
        const message = event.detail;
        showNotification(message)
    })

    createPostController(createPostForm)
}
