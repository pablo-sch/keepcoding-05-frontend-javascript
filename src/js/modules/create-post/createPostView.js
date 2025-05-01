import { tags } from "../../utils/constants.js";

export const buildCreatePostForm = () => {

    const tagSelector = `
      <option value="" selected>None</option>
      ${tags.map(tag => {
          return `<option value="${tag}">${tag}</option>`;
      }).join('')}
    `;
  


    let createPostFormView = `

        <label for="post-image">Photo: </label>
        <input type="file" id="post-image" name="photo" accept="image/*">

        <label for="post-name">Product Name: </label>
        <input required id="post-name" name="post-name" type="text" maxlength="120"
            placeholder="Introduce the name of your post." />

        <label for="post-description">Description: </label>
        <textarea required name="post-description" id="post-description" maxlength="300"
            placeholder="Max. Length 300"></textarea>

        <label for="post-price">Price: </label>
        <input required id="post-price" name="post-price" type="number" min="1" max="9999999" step="0.01"
            placeholder="Introduce the price of your product." />

        <div class="radio-button">
            <label for="purchase">
                <input required type="radio" id="purchase" name="transactionType" value="purchase">
                Purchase
            </label>

            <label for="sale">
                <input required type="radio" id="sale" name="transactionType" value="sale">
                Sale
            </label>
        </div>

        <div class="select-wrapper">
          <p class="tag-label"><strong>Category:</strong></p>
          <select id='post-tag'>${tagSelector}</select>
        </div>

        <button>Create Post</button>
    `;

    return createPostFormView
}       