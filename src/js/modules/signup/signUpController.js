import { REGEXP } from "../../utils/constants.js";
import { createUser } from "../signup/signUpModel.js";

//===================================================================================================================
export const signUpController = (signupForm) => {

  //-------------------------------------------------------------------------------------------------------------------
  signupForm.addEventListener("submit", (event) => {

    /* By default, when a form is submitted the browser reloads the page and 
    all JavaScript and current app state information is lost. */
    event.preventDefault();

    const nameElement = signupForm.querySelector('#name');
    const name = nameElement.value;

    const emailElement = signupForm.querySelector('#email');
    const email = emailElement.value;

    const passwordElement = signupForm.querySelector('#password');
    const password = passwordElement.value;

    const passwordConfirmElement = signupForm.querySelector('#password-confirm');
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
      handleCreateUser(name, email, password, signupForm)
    } else {
      errors.forEach(error => {

        /* 
        const event = new CustomEvent("signup-error", {
          detail: error // <-- "error" is actually the descriptions
        });

        signupForm.dispatchEvent(event)
        */

        dispatchNotification('signup-error', error)
      })
    }
  })

  //-------------------------------------------------------------------------------------------------------------------
  const handleCreateUser = async (name, email, password, signupForm) => {
    try {
      //----------------------------------------------------
      const event = new CustomEvent("load-posts-started");
      signupForm.dispatchEvent(event);
      //----------------------------------------------------

      //====================================================
      await createUser(name, email, password);
      //====================================================
      /* 
      const event = new CustomEvent("signup-ok", {
        detail: {
          message: 'You have successfully registered.',
          type: 'success'
        }
      });

      signupForm.dispatchEvent(event)

       */
      dispatchNotification(signupForm, "signup-ok", {
        message: 'You have successfully registered.',
        type: 'success'
      });

      
      setTimeout(() => { window.location = '/' }, 5000);

    } catch (error) {

      /* 
      const event = new CustomEvent("signup-error", {
        detail: error.message
      });

      // This event is sent to "signup" as it is being listened to.
      signupForm.dispatchEvent(event) 
      */

      dispatchNotification('signup-error', error.message)

    } finally {
      //----------------------------------------------------
      const event = new CustomEvent("load-posts-finished")
      signupForm.dispatchEvent(event)
      //----------------------------------------------------
    }
  }

  //-------------------------------------------------------------------------------------------------------------------
  const dispatchNotification = (eventType, message) => {
    const event = new CustomEvent(eventType, { detail: message });
    signupForm.dispatchEvent(event);
  }
}
