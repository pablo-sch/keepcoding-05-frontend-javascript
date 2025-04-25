import { buildNotification } from "./notificationsView.js";

export function notificationsController(container) { // container is ".notifications"

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

    const closeButton = newNotification.querySelector("button"); // <-- It will select only the button element of the container that we pass it.
    closeButton.addEventListener("click", () => {
      removeNotification(newNotification);
    });

    container.appendChild(newNotification) // <-- Here we insert our HTML ready to use.

    let currentNotifications = Array.from(container.querySelectorAll('.notification'));

    while (currentNotifications.length > 3) {
      const oldest = currentNotifications.shift();
      removeNotification(oldest);
    }

    if (type === 'error') {
      const oldErrors = currentNotifications.filter(n =>
        n !== newNotification && n.classList.contains('error')
      );

      oldErrors.forEach(n => {
        setTimeout(() => removeNotification(n), 1000);
      });

      setTimeout(() => {
        removeNotification(newNotification);
      }, 5000);
    } else {
      setTimeout(() => {
        removeNotification(newNotification);
      }, 5000);
    }

    console.log('Error:',message)
  };
  

  return {
    showNotification
  }
}
