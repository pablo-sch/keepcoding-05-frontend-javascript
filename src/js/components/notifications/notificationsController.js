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

    // Obtener todas las notificaciones actuales después de agregar la nueva
    let currentNotifications = Array.from(container.querySelectorAll('.notification'));

    // Si hay más de 3, elimina las más antiguas
    while (currentNotifications.length > 3) {
      const oldest = currentNotifications.shift(); // remueve la primera (más vieja)
      removeNotification(oldest);
    }

    // Control de duración dependiendo del tipo
    if (type === 'error') {
      // Errores antiguos (excepto el nuevo)
      const oldErrors = currentNotifications.filter(n =>
        n !== newNotification && n.classList.contains('error')
      );

      // Los errores antiguos duran 1 segundo
      oldErrors.forEach(n => {
        setTimeout(() => removeNotification(n), 1000);
      });

      // El nuevo error dura 5 segundos
      setTimeout(() => {
        removeNotification(newNotification);
      }, 5000);
    } else {
      // Notificaciones que no son de tipo 'error' también desaparecen a los 5s
      setTimeout(() => {
        removeNotification(newNotification);
      }, 5000);
    }
  };

  return {
    showNotification
  }
}
