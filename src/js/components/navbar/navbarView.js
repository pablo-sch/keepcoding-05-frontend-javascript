
export function navbarView() {
  return `
    <a id="index-btn" class="nav-left">Home</a>
    
    <div class="nav-center">
      <form id="search-form">

        <input id="search" name="search" type="text" placeholder="Search" />

          <select id="category-select" name="category">
            <option value="">All Categories</option>
            <option value="tech">Tech</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="education">Education</option>
            <option value="news">News</option>
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
