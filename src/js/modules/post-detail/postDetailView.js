export const buildpostDetailView = (post) => {
  let postView = `
        <p>${post.user.name}</p>
        <p>${post.name}</p>
        <p>${post.photo}</p>
        <p>${post.description}</p>
        <p>${post.price}</p>
        <p>${post.isPurchase}</p>
      `;

  return postView
}

export const buildRemovepostButton = () => {
  const removeButton = document.createElement("button");
  removeButton.textContent = 'Borrar post';

  return removeButton;
}
