import { tags } from "../../utils/constants.js";

export const buildPostDetail_ReadOnlyView = (post, isOwner) => {
  const postType = post.isPurchase ? 'purchase' : 'sale';

  const date = new Date(post.updatedAt);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${hours}:${minutes} ${day}-${month}-${year}`;

  const postHTML = `
  <div class="post-view">
      <div class='image-container'>
        <img src="${post.image}" alt="Product Image" class='post-image'>
        <p class='sale-label ${postType}'>${postType}</p>
      </div>

      <p class="title">
        <strong>${post.name} - €${post.price}</strong>
      </p>

      <p><strong>Owner:</strong></p>
      <p>${post.user.name}</p>

      <p><strong>Description:</strong></p>
      <p>${post.description}</p>

      <p><strong>Tag:</strong></p>
      <p>${post.tag != null ? post.tag : 'None'}</p>

      <p><strong>Last update at: </strong>${formattedDate}</p>

      ${isOwner ? `
        <button id="edit-post">Edit</button>
        <button id="delete-post">Delete</button>
      ` : ''}
    </div>
  `;

  return postHTML
};

export const buildPostDetail_EditableView = (post) => {

  const tagSelector = `

  <option value="" ${!post.tag ? 'selected' : ''}>None</option>

  ${tags.map(tag => {

    const selected = tag === post.tag ? 'selected' : '';

    return `<option value="${tag}" ${selected}>${tag}</option>`;

  }).join('')}
  `;

  const postHTML = `
    <form id="edit-post-form" class="form">

      <div class="image-preview">
        <img src="${post.image}" alt="Current Image" class="post-image" />
      </div>

      <label for="post-image">Change Photo:</label>
      <input type="file" id="post-image" name="photo" accept="image/*" />

        <label for="post-name">Product Name: </label>
        <input required id="post-name" name="post-name" type="text" maxlength="120"
            placeholder="Introduce the name of your post." value="${post.name}" />

        <label for="post-description">Description: </label>
        <textarea required name="post-description" id="post-description" maxlength="300"
        placeholder="Max. Length 300">${post.description}</textarea>

        <label for="post-price">Price: </label>
        <input required id="post-price" name="post-price" type="number" min="1" max="9999999" step="0.01"
        placeholder="Introduce the price of your product." value="${post.price}" />

        <div>
            <label for="purchase">
                <input type="radio" id="purchase" name="transactionType" value="purchase" required ${post.isPurchase ? 'checked' : ''}>
                Purchase
            </label>

            <label for="sale">
                <input type="radio" id="sale" name="transactionType" value="sale" required ${!post.isPurchase ? 'checked' : ''}>
                Sale
            </label>
        </div>

      <p><strong>Tag:</strong></p>
      <select id='post-tag'>${tagSelector}</select>

      <button id="save-changes">Save</button>
      <button id="cancel-edit">Cancel</button>
    </form>
  `;
  return postHTML
};