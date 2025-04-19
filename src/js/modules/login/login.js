import { loginController } from "./loginController.js"

import { notificationsController } from "../../components/notifications/notificationsController.js"
import { loaderController } from "../../components/loader/loaderController.js";

export function initLogin() {

  const loginForm = document.querySelector("#loginForm")
  const notifications = document.querySelector("#notifications");
  const loader = document.querySelector(".loader")

  const { showNotification } = notificationsController(notifications)
  const { show, hide } = loaderController(loader);

  loginForm.addEventListener('load-posts-started', () => {
    show();
  })

  loginForm.addEventListener('load-posts-finished', () => {
    hide();
  })

  loginForm.addEventListener("login-error", (event) => {
    const message = event.detail;
    showNotification(message)
  })

  loginForm.addEventListener("login-ok", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })

  loginController(loginForm)
}
