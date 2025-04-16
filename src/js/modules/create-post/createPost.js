import { createPostController } from "../create-post/createPostController.js";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    window.location = '/views/login.html'
  }

  const createPostForm = document.querySelector('#createPostForm')
  createPostController(createPostForm)
})
