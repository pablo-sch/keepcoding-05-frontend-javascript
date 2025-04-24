import { notificationsController } from "../../components/notifications/notificationsController.js";

import { navbarController } from "../../components/navbar/navbarController.js";

import {
  handleLogout,
  goToLogin,
  goToSignup,
  goToCreatePost,
  goToIndex
} from './navbarController.js';

export function navbar() {
  const container = document.querySelector('.navbar');
  const notifications = document.querySelector(".notifications")
  const { showNotification } = notificationsController(notifications)

  navbarController(container)

  const indexBtn = document.getElementById('index-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const createPostBtn = document.getElementById('create-post-btn');

  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
  if (loginBtn) loginBtn.addEventListener('click', goToLogin);
  if (signupBtn) signupBtn.addEventListener('click', goToSignup);
  if (createPostBtn) createPostBtn.addEventListener('click', goToCreatePost);
  if (indexBtn) indexBtn.addEventListener('click', goToIndex);

  container.addEventListener("search-error", (event) => {
    const message = event.detail;
    showNotification(message)
  })

}