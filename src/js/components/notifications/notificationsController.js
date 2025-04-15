import { buildNotification } from "./notificationsView.js";

export function notificationsController(container){ // container is ".notifications"
  
    // Internal function.
  const removeNotification = (newNotification) => {
    newNotification.remove();
  }

  // This method receives a message and type (error / success), if it does not receive type by default it will be "error".
  const showNotification = (message, type = 'error') => {

    const newNotification = document.createElement('div');

    newNotification.classList.add('notification') // <-- Here we add the "notification" class so "notification.css" will detect it.
    newNotification.classList.add(type) // <-- Here we add the class of the container we pass to "type".
    newNotification.innerHTML = buildNotification(message, type) // <-- If "type" is not added, the default will be “error”.

    container.appendChild(newNotification) // <-- Here we insert our HTML ready to use.

    const closeButton = newNotification.querySelector("button"); // <-- It will select only the button element of the container that we pass it.

    closeButton.addEventListener("click", () => {
      removeNotification(newNotification);
    });

    setTimeout(() => {
      removeNotification(newNotification)
    }, 5000);
  }

  return {
    showNotification
  }
}
