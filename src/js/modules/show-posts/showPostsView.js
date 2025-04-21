export const buildPost = (post) => {

    const postType = post.isPurchase ? 'purchase' : 'sale';
    const imageSrc = post.photo ? post.photo : './public/no-image-available.jpg';


    let postView = `

    <div class='post'>

        <img src="${imageSrc}" alt="Product Image" class="post-image">

        <p class="title">${post.name}</p>

        <p>€ ${post.price}</p>

        <p>${post.description}</p>

        <p class="sale-label ${postType}">${postType}</p>
    </div>`;

    return postView

}       