export const buildpostDetailView = (post) => {
  let postView = `
        <label> Post Owner: ${post.user.name}</label>
        <label>${post.name}</label>
        <label>${post.photo}</label>
        <label> Description:</label>
        <p>${post.description}</p>
        <label>Price: $ ${post.price}</label>
        <label>${post.isPurchase}</label>
      `;

  return postView
}

export const buildRemovepostButton = () => {
  const removeButton = document.createElement("button");
  removeButton.textContent = 'Delete Post';

  return removeButton;
}
