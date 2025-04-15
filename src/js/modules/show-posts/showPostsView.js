export const buildPost = (post) => {
    let postView = `
        <p>${post.userId}</p>
        <p>${post.name}</p>
        <p>${post.description}</p>
        <p>${post.price}</p>
        <img src=${post.photo}>
        <p>${post.sale_purchase}</p>
        `;

    return postView
}