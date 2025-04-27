import { createPost, uploadImage } from "./createPostModel.js";

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

        let imageURL

        if (image) {
      
            //===================================
            imageURL = await uploadImage(image);
            //===================================
      
          } else {
            imageURL = '../../../../public/no-image-available.jpg';
          }
      
          const post = {
            image: imageURL,
            name: name,
            description: description,
            price: price,
            tag: tag || null,
            isPurchase: isPurchase,
        }

        handlecreatePost(post)
    })

    //-------------------------------------------------------------------------------------------------------------------
    const handlecreatePost = async (post) => {
        try {
            //----------------------------------------------------
            const event = new CustomEvent("load-post-started");
            createPostForm.dispatchEvent(event);
            //----------------------------------------------------

            //====================================================
            await createPost(post);
            //====================================================

            dispatchNotification('create-post-ok', {
                message: 'Post created successfully.',
                type: 'success'
            })

            setTimeout(() => { window.location = '/index.html'; }, 1000)

        } catch (error) {
            dispatchNotification('create-post-error', error.message)
        } finally {
            //----------------------------------------------------
            const event = new CustomEvent("load-post-finished")
            createPostForm.dispatchEvent(event)
            //----------------------------------------------------
        }
    }
    //-------------------------------------------------------------------------------------------------------------------
    function dispatchNotification(eventType, message) {
        const event = new CustomEvent(eventType, { detail: message })
        createPostForm.dispatchEvent(event)
    }
}
