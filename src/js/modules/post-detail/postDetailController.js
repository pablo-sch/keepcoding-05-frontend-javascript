import { getPost, getLoggedInUserInfo, removePost, updatePost, uploadImage } from "./postDetailModel.js";
import { buildEditableView, buildReadOnlyView } from "./postDetailView.js";


export const postDetailController = async (postContainer, postId) => {


  let postDetail = null;
  let user = null;
  let isOwner = false

  try {
    //----------------------------------------------------
    loadStarted();
    //----------------------------------------------------

    try {
      //===================================
      postDetail = await getPost(postId);
      //===================================
    } catch (error) {
      dispatchNotification('post-error', error.message);
    }

    if(!localStorage.getItem('accessToken')){
      renderReadOnlyView(postDetail, isOwner);
    }else{
      try {
        //===================================
        user = await getLoggedInUserInfo();
        //===================================
      } catch (error) {
        dispatchNotification('post-error', error.message);
      }
  
      isOwner = user.id === postDetail.userId;
  
      renderReadOnlyView(postDetail, isOwner);
    }
  } catch (error) {
    dispatchNotification('post-error', error.message);
  } finally {
    //----------------------------------------------------
    loadFinished();
    //----------------------------------------------------
  }

  //===================================================================================================================
  function renderReadOnlyView(post, isOwner) {
    postContainer.innerHTML = buildReadOnlyView(post, isOwner);

    if (isOwner) {
      const editPost = postContainer.querySelector("#edit-post")
      editPost.addEventListener("click", () => renderEditableView(post));

      const deletePost = postContainer.querySelector("#delete-post")
      deletePost.addEventListener("click", () => handleDelete(post.id));
    }
  }

  //------------------------------------------------------------------------
  function renderEditableView(post) {
    postContainer.innerHTML = buildEditableView(post);

    const editForm = document.getElementById("edit-post-form");

    editForm.addEventListener('submit', (event) => {
      event.preventDefault();

      handleSave(post);
    });

    const cancel = postContainer.querySelector("#cancel-edit")
    cancel.addEventListener("click", (event) => {
      event.preventDefault();

      postContainer.innerHTML = buildReadOnlyView(post, true);
      renderReadOnlyView(post, true)
    });
  }

  //------------------------------------------------------------------------
  async function handleDelete(postId) {
    if (confirm("Are you sure about deleting the post?")) {
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
  }

  //------------------------------------------------------------------------
  async function handleSave(post) {

    const editForm = document.getElementById("edit-post-form");

    const image = editForm.querySelector('#post-image').files[0];

    const name = editForm.querySelector('#post-name').value;
    const description = editForm.querySelector('#post-description').value;
    const price = editForm.querySelector('#post-price').value;

    const tag = editForm.querySelector('#post-tag').value;

    const isPurchase = editForm.querySelector('input[name="transactionType"]:checked').value === 'purchase';

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

      post.image = imageURL;
      post.name = name;
      post.description = description;
      post.price = price;
      post.tag = tag || null;
      post.isPurchase = isPurchase;

      //===================================
      await updatePost(post);
      //===================================

      let getUpdatedPost;

      const postId = post.id
      //===================================
      getUpdatedPost = await getPost(postId);
      //===================================

      postDetail = getUpdatedPost;

      dispatchNotification('post-success', {
        message: "Post successfully updated.",
        type: 'success',
      });

      render_ReadOnlyView(postDetail, true);

    } catch (error) {
      dispatchNotification('post-error', error.message);
    } finally {
      //----------------------------------------------------
      loadFinished()
      //----------------------------------------------------
    }
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