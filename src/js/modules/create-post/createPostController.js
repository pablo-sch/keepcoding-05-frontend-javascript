import { createPost } from "./createPostModel.js";

//===================================================================================================================
export const createPostController = (createPostForm) => {

    //-------------------------------------------------------------------------------------------------------------------
    createPostForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const image = createPostForm.querySelector('#post-image').value;
        let postImage;

        if (!image) {
            postImage = '../public/no-image-available.jpg';
        }

        const postName = createPostForm.querySelector('#post-name').value;
        const postTag = createPostForm.querySelector('#post-tag').value;
        const postDescription = createPostForm.querySelector('#post-description').value;
        const postPrice = createPostForm.querySelector('#post-price').value;
        const transactionType = createPostForm.querySelector('input[name="transactionType"]:checked').value;

        const isPurchase = transactionType === 'purchase';

        const postData = {
            image: postImage,
            name: postName,
            tag: postTag,
            description: postDescription,
            price: postPrice,
            isPurchase: isPurchase
        }

        handlecreatePost(postData)

    })

    //-------------------------------------------------------------------------------------------------------------------
    const handlecreatePost = async (postData) => {
        try {
            //----------------------------------------------------
            const event = new CustomEvent("load-posts-started");
            createPostForm.dispatchEvent(event);
            //----------------------------------------------------

            //====================================================
            await createPost(postData);
            //====================================================

            //dispatchCreateProductSuccess(createPostForm, 'Post created successfully.');
            dispatchNotification('createPost-ok', {
                message: 'Post created successfully.',
                type: 'success'
            })

            setTimeout(() => { window.location = '/'; }, 1000)

        } catch (error) {
            //dispatchCreateProductError(createPostForm, error.message);
            dispatchNotification('createPost-error', error.message)
        } finally {
            //----------------------------------------------------
            const event = new CustomEvent("load-posts-finished")
            createPostForm.dispatchEvent(event)
            //----------------------------------------------------
        }
    }
    //-------------------------------------------------------------------------------------------------------------------
    function dispatchNotification(eventType, message) {
        const event = new CustomEvent(eventType, { detail: message })
        createPostForm.dispatchEvent(event)
    }
    //-------------------------------------------------------------------------------------------------------------------
    /*     function dispatchCreateProductSuccess(createPostForm, successMessage) {
            const event = new CustomEvent("createPost-ok", {
                detail: {
                    message: successMessage,
                    type: 'success'
                }
            });
            createPostForm.dispatchEvent(event)
        }
    
        function dispatchCreateProductError(createPostForm, errorMessage) {
            const event = new CustomEvent("createPost-error", {
                detail: errorMessage
            });
            createPostForm.dispatchEvent(event)
        } */
}
