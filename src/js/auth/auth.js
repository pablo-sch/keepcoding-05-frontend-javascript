export function isAuthenticated() {
  return !!localStorage.getItem('accessToken');
}

export function redirectIfNotAuthenticated(path2) {

  const token = isAuthenticated();
  const path = window.location.pathname;

  const isLogin = path.endsWith('/views/login.html');
  const isSignup = path.endsWith('/views/signup.html');
  const isCreatePost = path.endsWith('/views/create-post.html');

  if (token && (isLogin || isSignup)) {
    window.location.href = '/index.html';
  }

  if (!token && isCreatePost) {
    window.location.href = '/index.html';
  }
}
