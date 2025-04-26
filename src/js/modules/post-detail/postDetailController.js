import { postDetailModel, getLoggedInUserInfo, removePost, updatePost } from "./postDetailModel.js";
import { buildPostDetailEditableView, buildPostDetailReadOnlyView } from "./postDetailView.js";


export const postDetailController = async (postContainer, postId) => {
  let postDetail = null;
  let user = null;
  let isEditing = false;

  try {
    //----------------------------------------------------
    const event = new CustomEvent("load-posts-started");
    postContainer.dispatchEvent(event);
    //----------------------------------------------------

    try {
      //===================================
      postDetail = await postDetailModel(postId);
      //===================================
    } catch (error) {
      dispatchNotification('post-error', error.message);
    }

    try {
      //===================================
      user = await getLoggedInUserInfo();
      //===================================
    } catch (error) {
      dispatchNotification('post-error', error.message);
    }

    const isOwner = user.id === postDetail.userId;

    renderReadOnlyView(postDetail, isOwner);

  } catch (error) {
    dispatchNotification('post-error', error.message);
  } finally {
    //----------------------------------------------------
    const event = new CustomEvent("load-posts-finished");
    postContainer.dispatchEvent(event);
    //----------------------------------------------------
  }

  //===================================================================================================================

  function renderReadOnlyView(post, isOwner) {
    isEditing = false;
    postContainer.innerHTML = buildPostDetailReadOnlyView(post, isOwner);

    if (isOwner) {
      const editPost = postContainer.querySelector("#edit-post")
      editPost.addEventListener("click", () => renderEditableView(post));

      const deletePost = postContainer.querySelector("#delete-post")
      deletePost.addEventListener("click", () => handleDelete(post.id));
    }
  }

  //------------------------------------------------------------------------
  function renderEditableView(post) {
    isEditing = true;
    postContainer.innerHTML = buildPostDetailEditableView(post);

    const saveEdit = postContainer.querySelector("#save-changes")
    saveEdit.addEventListener("click", (event) => {
      event.preventDefault();

      handleSave(post);
    });

    const cancelEdit = postContainer.querySelector("#cancel-edit")
    cancelEdit.addEventListener("click", (event) => {
      event.preventDefault();

      renderReadOnlyView(postDetail, true);
    });
  }

  //------------------------------------------------------------------------
  async function handleDelete(postId) {
    if (confirm("Are you sure about deleting the post?")) {
      try {
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
      }
    }
  }

  //------------------------------------------------------------------------
  async function handleSave(post) {

    const editPostForm = postContainer.querySelector('#editPostForm');

    const image = editPostForm.querySelector('#post-image').files[0];

    const name = editPostForm.querySelector('#post-name').value;
    const description = editPostForm.querySelector('#post-description').value;
    const price = editPostForm.querySelector('#post-price').value;

    const tag = editPostForm.querySelector('#post-tag').value;

    const isPurchase = editPostForm.querySelector('input[name="transactionType"]:checked').value === 'purchase';

    post.image = image;
    post.name = name;
    post.description = description;
    post.price = price;
    post.tag = tag || null;
    post.isPurchase = isPurchase;

    if (!post.image) {
      post.image = '../../../../public/no-image-available.jpg';
    }

    try {
      //===================================
      const updatedPost = await updatePost(post);
      //===================================

      postDetail = updatedPost;

      dispatchNotification('post-success', {
        message: "Post successfully updated.",
        type: 'success',
      });

      renderReadOnlyView(postDetail, true);

    } catch (error) {
      dispatchNotification('post-error', error.message);
    }
  }

  //------------------------------------------------------------------------
  function dispatchNotification(eventType, message) {
    const event = new CustomEvent(eventType, { detail: message });

    if (message.type_success === 'post-deleted') {
      setTimeout(() => window.location = '/index.html', 500);
    }

    postContainer.dispatchEvent(event);
  }
};