

import { initShowPosts } from './modules/show-posts/showPosts.js';
import { initCreatePost } from './modules/create-post/createPost.js';
import { initLogin } from './modules/login/login.js';
import { initPostDetail } from './modules/post-detail/postDetail.js';
import { initSignUp } from './modules/signup/signup.js';

//---------------------------------------------------------------------------------------------------------------------------

import { navbar } from './components/navbar/navbar.js';
import { redirectIfNotAuthenticated } from './auth/auth.js';
import { footer } from './components/footer/footer.js';


document.addEventListener("DOMContentLoaded", () => {

    redirectIfNotAuthenticated();
    navbar();
    footer();

    const path = window.location.pathname;

    if (path.endsWith('index.html')) {
        initShowPosts();
    }

    if (path.endsWith('/views/create-post.html')) {
        initCreatePost();
    }

    if (path.endsWith('/views/login.html')) {
        initLogin();
    }

    if (path.endsWith('/views/post-detail.html')) {
        initPostDetail();
    }

    if (path.endsWith('/views/signup.html')) {
        initSignUp();
    }
})
