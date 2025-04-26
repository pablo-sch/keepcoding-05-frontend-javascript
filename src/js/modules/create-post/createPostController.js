import { createPost } from "./createPostModel.js";

//===================================================================================================================
export const createPostController = (createPostForm) => {

    //-------------------------------------------------------------------------------------------------------------------
    createPostForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const image = createPostForm.querySelector('#post-image').files[0];

        const name = createPostForm.querySelector('#post-name').value;
        const description = createPostForm.querySelector('#post-description').value;
        const price = createPostForm.querySelector('#post-price').value;

        const tag = createPostForm.querySelector('#post-tag').value;

        const isPurchase = createPostForm.querySelector('input[name="transactionType"]:checked').value === 'purchase';



        const post = {
            image: image,
            name: name,
            description: description,
            price: price,
            tag: tag || null,
            isPurchase: isPurchase,
        }

        if (!post.image) {
            post.image = '../../../../public/no-image-available.jpg';
          }

        handlecreatePost(post)
    })

    //-------------------------------------------------------------------------------------------------------------------
    const handlecreatePost = async (post) => {
        try {
            //----------------------------------------------------
            const event = new CustomEvent("load-posts-started");
            createPostForm.dispatchEvent(event);
            //----------------------------------------------------

/*             try {

                if (!image) {
                    image = '../../../../public/no-image-available.jpg';
                    postData.image = image
                } else {
                    //====================================================
                    image = await uploadImage(image);
                    //====================================================
                    postData.image = image
                }

            } catch (error) {
                dispatchNotification('createPost-error', error.message)
            } */

                

            //====================================================
            await createPost(post);
            //====================================================

            //dispatchCreateProductSuccess(createPostForm, 'Post created successfully.');
            dispatchNotification('createPost-ok', {
                message: 'Post created successfully.',
                type: 'success'
            })

            setTimeout(() => { window.location = '/index.html'; }, 1000)

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
