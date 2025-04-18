import { loginController } from "./loginController.js"
import {notificationsController} from "../../components/notifications/notificationsController.js"
 
export function initLogin() {

  const loginForm = document.querySelector("#loginForm")
  const notifications = document.querySelector("#notifications");

  const { showNotification } = notificationsController(notifications)

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
