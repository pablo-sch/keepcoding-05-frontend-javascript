import { postDetailModel, getLoggedInUserInfo, removepost } from "./postDetailModel.js"
import { buildpostDetailView, buildRemovepostButton } from "./postDetailView.js"

export const postDetailController = async (postContainer, postId) => {

  const showRemovepostButton = (postId) => {
    const removeButton = buildRemovepostButton()
    postContainer.appendChild(removeButton)

    removeButton.addEventListener("click", async () => {
      if (confirm("Are you sure about deleting the post?")) {
        try {
          await removepost(postId)

          dispatchEventWithMessage('post-success', {
            message: "Post successfully deleted.",
            type: 'success'
          })

          setTimeout(() => window.location = '/', 2000)

        } catch (error) {
          dispatchEventWithMessage('post-error', error.message)
        }
      }
    })
  }

  try {
    const postDetail = await postDetailModel(postId)

    postContainer.innerHTML = buildpostDetailView(postDetail)

    try {
      const user = await getLoggedInUserInfo()
      if (user?.id === postDetail?.userId) {
        showRemovepostButton(postId)
      }
    } catch (error) {
      dispatchEventWithMessage('post-error', error.message)
    }

  } catch (error) {
    dispatchEventWithMessage('post-error', error.message)
  }

  function dispatchEventWithMessage(eventType, message) {
    const event = new CustomEvent(eventType, {
      detail: message
    })
    setTimeout(() => window.location = '/', 2000)
    document.dispatchEvent(event)
  }

}
