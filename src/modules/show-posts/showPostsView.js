export const buildPost = (post) => {
    let postView = `
        <p>${post.userId}</p>
        <p>${post.name}</p>
        <p>${post.description}</p>
        <p>${post.price}</p>
        <p>${post.photo}</p>
        <p>${post.sale_purchase}</p>
        `;

    return postView
}

export const buildNoTweetsAdvice = () => {
    return '<h3>Sorry, no posts available!</h3>'
}
