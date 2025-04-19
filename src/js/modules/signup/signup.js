import { signUpController } from "./signUpController.js";

import {notificationsController} from "../../components/notifications/notificationsController.js"
import { loaderController } from "../../components/loader/loaderController.js";

export function initSignUp() {
  
  const sigupForm = document.querySelector("#signupForm");
  const notifications = document.querySelector("#notifications");
  const loader = document.querySelector(".loader")
  
  const { showNotification } = notificationsController(notifications)
  const { show, hide } = loaderController(loader);

  sigupForm.addEventListener('load-posts-started', () => {
    show();
  })

  sigupForm.addEventListener('load-posts-finished', () => {
    hide();
  })

  sigupForm.addEventListener("signup-error", (event) => {
    const message = event.detail;
    showNotification(message)
  })

  sigupForm.addEventListener("signup-ok", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })

  signUpController(sigupForm)
}
