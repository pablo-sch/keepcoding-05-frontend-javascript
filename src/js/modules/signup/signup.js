import { signUpController } from "./signUpController.js";
import {notificationsController} from "../../components/notifications/notificationsController.js"

document.addEventListener("DOMContentLoaded", () => {
  
  const registerForm = document.querySelector("form");
  const notifications = document.querySelector("#notifications");

  const { showNotification } = notificationsController(notifications)

  registerForm.addEventListener("register-error", (event) => {
    const message = event.detail;
    showNotification(message)
  })

  registerForm.addEventListener("register-ok", (event) => {
    const message = event.detail.message;
    const type = event.detail.type;
    showNotification(message, type)
  })

  signUpController(registerForm)
})
