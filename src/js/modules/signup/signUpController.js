import { REGEXP } from "../../utils/constants.js";
import { createUser } from "../signup/signUpModel.js";

export const signUpController = (form) => {

  form.addEventListener("submit", (event) => {

    /* By default, when a form is submitted the browser reloads the page and 
    all JavaScript and current app state information is lost. */
    event.preventDefault();

    const nameElement = form.querySelector('#name');
    const name = nameElement.value;

    const emailElement = form.querySelector('#email');
    const email = emailElement.value;

    const passwordElement = form.querySelector('#password');
    const password = passwordElement.value;

    const passwordConfirmElement = form.querySelector('#password-confirm');
    const passwordConfirm = passwordConfirmElement.value;

    const errors = []

    // validate email format
    const emailRegExp = REGEXP.mail;

    /* ".test(email)" is a method of regular expressions in JavaScript. 
    It returns "true" if the email matches the pattern and "false" if it does not. */

    /* Regular expressions (or regex) are patterns used to search, validate or replace text. */

    /* ".test()" is a JavaScript method used with regular expressions to check if a text conforms to a pattern. */
    if (!emailRegExp.test(email)) {
      errors.push('The email format is incorrect.')
    }

    // check that the passwords are the same
    if (password !== passwordConfirm) {
      errors.push('Passwords are not the same.')
    }

    if (errors.length === 0) {
      handleCreateUser(name, email, password, form)
    } else {
      errors.forEach(error => {
        const event = new CustomEvent("register-error", {
          detail: error
        });
        form.dispatchEvent(event)
      })
    }
  })

  const handleCreateUser = async (name, email, password, form) => {
    try {

      /* Insert User to API REST VVVVVVVVVVVVVVVVVVV */
      await createUser(name, email, password);
      const event = new CustomEvent("register-ok", {
        detail: {
          message: 'You have successfully registered.',
          type: 'success'
        }
      });
      /* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

      form.dispatchEvent(event)
      setTimeout(() => {
        window.location = '/'
      }, 5000);

    } catch (error) {

      const event = new CustomEvent("register-error", {
        detail: error.message
      });

      // This event is sent to "signup" as it is being listened to.
      form.dispatchEvent(event)
    }
  }
}
