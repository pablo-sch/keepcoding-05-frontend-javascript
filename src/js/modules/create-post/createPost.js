import { createPostController } from "../create-post/createPostController.js";

import {notificationsController} from "../../components/notifications/notificationsController.js"
import { loaderController } from "../../components/loader/loaderController.js";


export function initCreatePost() {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        window.location = '/views/login.html'
    }

    const createPostForm = document.querySelector('#createPostForm')
    const notifications = document.querySelector(".notifications");
    const loader = document.querySelector(".loader")

    const { showNotification } = notificationsController(notifications)
    const { show, hide } = loaderController(loader);

    createPostForm.addEventListener('load-posts-started', () => {
        show();
    })

    createPostForm.addEventListener('load-posts-finished', () => {
        hide();
    })

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
