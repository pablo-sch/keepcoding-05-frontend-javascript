import { signUpController } from "./signUpController.js";
import {notificationsController} from "../../components/notifications/notificationsController.js"

document.addEventListener("DOMContentLoaded", () => {
  
  const sigupForm = document.querySelector("#signupForm");
  const notifications = document.querySelector("#notifications");

  const { showNotification } = notificationsController(notifications)

  sigupForm.addEventListener("signup-error", (event) => {
    const message = event.detail;
    showNotification(message)
  })

  sigupForm.addEventListener("signup-ok", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })

  signUpController(registerForm)
})
