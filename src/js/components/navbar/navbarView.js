import {tags} from "../../utils/constants.js"

export function navbarView() {

  const tagSelector = `
  <option value="" selected>None</option>
  ${tags.map(tag => {
      return `<option value="${tag}">${tag}</option>`;
  }).join('')}
`;

  return `
    <a id="index-btn" class="nav-left">Home</a>
    
    <div class="nav-center">
      <form id="search-form">

        <input id="search" name="search" type="text" placeholder="Search" />

        <select id="post-tag" name="tag">
          ${tagSelector}
        </select>

          <button type="submit">Search</button>

        </form>
    </div>

    <div class="nav-right">
      <a id="create-post-btn">Create Post</a>
      <a id="login-btn">Login</a>
      <a id="signup-btn">Sign Up</a>
      <a id="logout-btn">Log Out</a>
    </div>
  `;
}
