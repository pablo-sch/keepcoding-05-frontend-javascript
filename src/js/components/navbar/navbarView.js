import {tags} from "../../utils/constants.js"

export function navbarView() {

  const tagSelector = `
  <option value="" selected>None</option>
  ${tags.map(tag => {
      return `<option value="${tag}">${tag}</option>`;
  }).join('')}
`;

  return `
    <div class='navbar-container'>
    <div class="nav-left">
          <a id="index-btn" class="btn btn-home">Home</a>
    </div>
      
      <div class="nav-center">
        <form id="search-form">

          <input id="search" class="input-search" name="search" type="text" placeholder="Search" />

          <select id="post-tag" class="select-search" name="tag">
            ${tagSelector}
          </select>

            <button type="submit" class="btn btn-search">Search</button>

          </form>
      </div>

      <div class="nav-right">
        <a id="create-post-btn" class="btn btn-primary-navbar">Create Post</a>
        <a id="login-btn" class="btn btn-primary-navbar">Login</a>
        <a id="signup-btn" class="btn btn-primary-navbar">Sign Up</a>
        <a id="logout-btn" class="btn btn-secondary-navbar">Log Out</a>
      </div>
    </div>
  `;
}
