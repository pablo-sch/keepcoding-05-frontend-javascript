import { getPost, getLoggedInUserInfo, removePost, updatePost, uploadImage } from "./postDetailModel.js";
import { buildEditableView, buildReadOnlyView } from "./postDetailView.js";


export const postDetailController = async (postContainer, postId) => {

  let currentPost = null;
  let isOwner = false;

  await readOnlyPost()

  async function loadPostData() {

    let post
    let user = null;

    try {
      //----------------------------------------------------
      loadStarted();
      //----------------------------------------------------

      //===================================
      post = await getPost(postId);
      //===================================

      if(!post){
        throw new Error('No post founded.')
      }

      if (!localStorage.getItem('accessToken')) {
        return {post, owner: false};
      }

      //===================================
      user = await getLoggedInUserInfo();
      //===================================
      const owner = user.id === post.userId;

      return { post, owner };

    } catch (error) {
      dispatchNotification('post-error', error.message);
    } finally {
      //----------------------------------------------------
      loadFinished();
      //----------------------------------------------------
    }
  }

  //===================================================================================================================
  async function readOnlyPost() {

    const result = await loadPostData();

    currentPost = result.post;
    isOwner = result.owner;

    postContainer.innerHTML = ''
    postContainer.innerHTML = buildReadOnlyView(currentPost, isOwner);

    if (isOwner) {
      const editPost = postContainer.querySelector("#edit-post")
      editPost.addEventListener("click", () => editablePost(currentPost));

      const deletePost = postContainer.querySelector("#delete-post")
      deletePost.addEventListener("click", () => handleDelete(currentPost.id));
    }
  }

  //------------------------------------------------------------------------
  function editablePost(post) {

    postContainer.innerHTML = ''
    postContainer.innerHTML = buildEditableView(post);

    const form = document.getElementById("edit-post-form");
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      handleSave(post);
    });

    const cancelEdit = postContainer.querySelector("#cancel-edit")
    cancelEdit.addEventListener("click", (event) => {
      event.preventDefault();

      readOnlyPost()
    });
  }

  //------------------------------------------------------------------------
  async function handleDelete(postId) {
    if (!confirm("Are you sure about deleting the post?")) return;

      try {
        //----------------------------------------------------
        loadStarted();
        //----------------------------------------------------

        //===================================
        await removePost(postId);
        //===================================

        dispatchNotification('post-success', {
          message: "Post successfully deleted.",
          type: 'success',
          type_success: 'post-deleted'
        });
      } catch (error) {
        dispatchNotification('post-error', error.message);
      } finally {
        //----------------------------------------------------
        loadFinished();
        //----------------------------------------------------
      }
  }

  //------------------------------------------------------------------------
  async function handleSave(post) {

    const form = document.getElementById("edit-post-form");

    const { image, name, description, price, tag, isPurchase } = getFormData(form);

    try {
      //----------------------------------------------------
      loadStarted()
      //----------------------------------------------------

      let imageURL

      if (image) {
        //===================================
        imageURL = await uploadImage(image);
        //===================================

      } else {
        imageURL = '../../../../public/no-image-available.jpg';
      }

      const updatedPost = {
        ...post,
        image: imageURL,
        name: name,
        description: description,
        price: price,
        tag: tag || null,
        isPurchase: isPurchase,
      };

      //===================================
      await updatePost(updatedPost);
      //===================================

      //===================================
      currentPost = await getPost(post.id);
      //===================================

      dispatchNotification('post-success', {
        message: "Post successfully updated.",
        type: 'success',
      });

      readOnlyPost()

    } catch (error) {
      dispatchNotification('post-error', error.message);
    } finally {
      //----------------------------------------------------
      loadFinished()
      //----------------------------------------------------
    }
  }

  function getFormData(form) {
    return {
      image: form.querySelector('#post-image').files[0],
      name: form.querySelector('#post-name').value,
      description: form.querySelector('#post-description').value,
      price: form.querySelector('#post-price').value,
      tag: form.querySelector('#post-tag').value || null,
      isPurchase: form.querySelector('input[name="transactionType"]:checked').value === 'purchase',
    };
  }

  //===================================================================================================================
  function dispatchNotification(eventType, message) {
    const event = new CustomEvent(eventType, { detail: message });

    if (message.type_success === 'post-deleted') {
      setTimeout(() => window.location = '/index.html', 500);
    }

    postContainer.dispatchEvent(event);
  }

  function loadStarted() {
    const event = new CustomEvent("load-post-started");
    postContainer.dispatchEvent(event);
  }

  function loadFinished() {
    const event = new CustomEvent("load-post-finished");
    postContainer.dispatchEvent(event);
  }
};