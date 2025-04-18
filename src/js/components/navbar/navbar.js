import { isAuthenticated } from '../../auth/auth.js';
import { navbarView } from './navbarView.js';
import {
  handleLogout,
  goToLogin,
  goToSignup,
  goToCreatePost,
  goToIndex
} from './navbarController.js';

export function navbar() {
  const container = document.getElementById('navbar');
  if (!container) return;

  container.innerHTML = navbarView();

  const logoutBtn = document.getElementById('logout-btn');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const createPostBtn = document.getElementById('create-post-btn');
  const indexBtn = document.getElementById('index-btn');

  // Button visibility logic based on authentication state
  if (isAuthenticated()) {

    // Show "Logout" and "Create Post", hide "Login" and "Sign Up"
    if (logoutBtn) logoutBtn.style.display = 'block'; // Make sure it's visible
    if (createPostBtn) createPostBtn.style.display = 'block'; // Make sure it's visible
    if (loginBtn) loginBtn.style.display = 'none'; // Hide if there's a token
    if (signupBtn) signupBtn.style.display = 'none'; // Hide if there's a token
  } else {

    // Show "Login" and "Sign Up", hide "Logout" and "Create Post"
    if (logoutBtn) logoutBtn.style.display = 'none'; // Hide if there's no token
    if (createPostBtn) createPostBtn.style.display = 'none'; // Hide if there's no token
    if (loginBtn) loginBtn.style.display = 'block'; // Make sure it's visible
    if (signupBtn) signupBtn.style.display = 'block'; // Make sure it's visible
  }

  // Assign events to buttons
  if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
  if (loginBtn) loginBtn.addEventListener('click', goToLogin);
  if (signupBtn) signupBtn.addEventListener('click', goToSignup);
  if (createPostBtn) createPostBtn.addEventListener('click', goToCreatePost);
  if (indexBtn) indexBtn.addEventListener('click', goToIndex);
}