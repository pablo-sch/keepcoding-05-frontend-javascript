import { isAuthenticated } from '../../auth/auth.js';

export function handleLogout() {
// Remove the token from localStorage and redirect to index
localStorage.removeItem('accessToken');
  window.location.href = '/index.html';
}

export function goToLogin() {
  // Redirigir a la página de Login solo si no hay token
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