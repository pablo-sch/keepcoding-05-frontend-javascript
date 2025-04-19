import { postDetailModel, getLoggedInUserInfo, removepost } from "./postDetailModel.js"
import { buildpostDetailView, buildRemovepostButton } from "./postDetailView.js"

//===================================================================================================================
export const postDetailController = async (postContainer, postId) => {

  //-------------------------------------------------------------------------------------------------------------------
  const showRemovepostButton = (postId) => {
    const removeButton = buildRemovepostButton()
    postContainer.appendChild(removeButton)

    removeButton.addEventListener("click", async () => {
      if (confirm("Are you sure about deleting the post?")) {
        try {

          //====================================================
          await removepost(postId)
          //====================================================

          dispatchNotification('post-success', {
            message: "Post successfully deleted.",
            type: 'success'
          })

          setTimeout(() => window.location = '/', 7000)

        } catch (error) {
          dispatchNotification('post-error', error.message)
        }
      }
    })
  }

  //-------------------------------------------------------------------------------------------------------------------
  try {

    //----------------------------------------------------
    const event = new CustomEvent("load-posts-started");
    postContainer.dispatchEvent(event);
    //----------------------------------------------------

    //====================================================
    const postDetail = await postDetailModel(postId)
    //====================================================

    postContainer.innerHTML = buildpostDetailView(postDetail)

    try {
      //====================================================
      const user = await getLoggedInUserInfo()
      //====================================================
      if (user?.id === postDetail?.userId) {
        showRemovepostButton(postId)
      }
    } catch (error) {
      dispatchNotification('post-error', error.message)
    }

  } catch (error) {

    dispatchNotification('post-error', error.message)

  } finally {

    //----------------------------------------------------
    const event = new CustomEvent("load-posts-finished")
    postContainer.dispatchEvent(event)
    //----------------------------------------------------
  }

  //-------------------------------------------------------------------------------------------------------------------
  function dispatchNotification(eventType, message) {
    const event = new CustomEvent(eventType, {
      detail: message
    })

    if (message.type === 'success') {
      setTimeout(() => window.location = '/', 7000)
    }

    postContainer.dispatchEvent(event)
  }
}
