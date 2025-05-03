export const buildPost = (post) => {

    const postType = post.isPurchase ? 'purchase' : 'sale';
    //const imageSrc = post.photo ? post.photo : './public/no-image-available.jpg';


    let postView = `

    <div class='post'>

        <img src="${post.image}" alt="Product Image" class="post-image">

        <div class="post-text">

            <p class="post-title">${post.name}</p>

            <p>${post.tag ?? 'None'}</p>

            <p>€ ${post.price}</p>

            <p class="post-description">${post.description}</p>

            <p class="sale-label ${postType}">${postType}</p>

        </div>
    </div>`;

    return postView
}       