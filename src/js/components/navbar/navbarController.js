import { navbarView } from './navbarView.js';
import { isAuthenticated } from '../../auth/auth.js';

export function navbarController(container) {
  container.innerHTML = navbarView();


  handleVisibility();
  searchForm();
}

//-------------------------------------------------------------------------------------------------------------------
function handleVisibility() {
  const path = window.location.pathname;

  const searchContainer = document.querySelector('.nav-center');
  const logoutBtn = document.getElementById('logout-btn');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const createPostBtn = document.getElementById('create-post-btn');

  // Button visibility logic based on path
  if (searchContainer) searchContainer.style.display = 'none';

  if (path.endsWith('index.html')) {
    if (searchContainer) searchContainer.style.display = 'flex'; // Make sure it's visible
  }

  // Button visibility logic based on authentication state
  if (isAuthenticated()) {

    // Show "Logout" and "Create Post", hide "Login" and "Sign Up"
    if (logoutBtn) logoutBtn.style.display = 'flex'; // Make sure it's visible
    if (loginBtn) loginBtn.style.display = 'none'; // Hide if there's a token
    if (signupBtn) signupBtn.style.display = 'none'; // Hide if there's a token
    if (createPostBtn) createPostBtn.style.display = 'flex'; // Make sure it's visible

  } else {

    // Show "Login" and "Sign Up", hide "Logout" and "Create Post"
    if (logoutBtn) logoutBtn.style.display = 'none'; // Hide if there's no token
    if (createPostBtn) createPostBtn.style.display = 'none'; // Hide if there's no token
    if (loginBtn) loginBtn.style.display = 'flex'; // Make sure it's visible
    if (signupBtn) signupBtn.style.display = 'flex'; // Make sure it's visible
  }

}

//-------------------------------------------------------------------------------------------------------------------
function searchForm() {
  const searchForm = document.getElementById('search-form');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchQuery = document.getElementById('search').value.trim();
    const tag = document.getElementById('post-tag').value;

/*     if (!searchQuery && !selectedCategory) {
      dispatchErrorNotification("Enter a word or select a category.");
      return;
    } */

    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (tag) params.set('tag', tag);

    window.location.href = `/index.html?${params.toString()}`;
  });
}

//-------------------------------------------------------------------------------------------------------------------
export function handleLogout() {
  // Remove the token from localStorage and redirect to index
  localStorage.removeItem('accessToken');
  window.location.href = '/index.html';
}

export function goToLogin() {
  // Redirect to Login page only if no token is present
  if (!isAuthenticated()) {
    window.location.href = '/views/login.html';
  } else {
    window.location.href = '/index.html';
  }
}

export function goToSignup() {
  // Redirect to Login page only if no token is present
  if (!isAuthenticated()) {
    window.location.href = '/views/signup.html';
  } else {
    window.location.href = '/index.html';
  }
}

export function goToCreatePost() {
  // Only allow access to Create Post if token is present, otherwise redirect to index
  if (isAuthenticated()) {
    window.location.href = '/views/create-post.html';
  } else {
    window.location.href = '/index.html';
  }
}

export function goToIndex() {
  // Always redirect to index
  window.location.href = '/index.html';
}

//-------------------------------------------------------------------------------------------------------------------
function dispatchErrorNotification(message) {

  const container = document.querySelector('.navbar');

  const event = new CustomEvent('search-error', {
    detail: message
  })

  container.dispatchEvent(event)
}