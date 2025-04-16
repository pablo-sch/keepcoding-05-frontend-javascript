import { createPost } from "./createPostModel.js";

export const createPostController = (createPostForm) => {
    createPostForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const postImage = createPostForm.querySelector('#post-image').value;
        const postName = createPostForm.querySelector('#post-name').value;
        const postDescription = createPostForm.querySelector('#post-description').value;
        const postPrice = createPostForm.querySelector('#post-price').value;
        const transactionType = createPostForm.querySelector('input[name="transactionType"]:checked').value;

        const isPurchase = transactionType === 'purchase';

        const postData = {
            image: postImage,
            name: postName,
            description: postDescription,
            price: postPrice,
            isPurchase: isPurchase
        }

        handlecreatePost(postData, createPostForm)

    })

    const handlecreatePost = async (postData, createPostForm) => {
        try {
            await createPost(postData);

            dispatchCreateProductSuccess(createPostForm, 'Post created successfully.');

            setTimeout(() => {
                window.location = '/';
            }, 2000)

        } catch (error) {
            dispatchCreateProductError(createPostForm, error.message);
        }
    }

    function dispatchCreateProductSuccess(createPostForm, successMessage) {
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
    }
}
