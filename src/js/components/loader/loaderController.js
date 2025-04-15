
// the "loader" in loaderController(loader) is the class '.loader' from index.html".
export function loaderController(container) { // 'container' is ".loader" and comes from ShowPostsController.js.

  const show = () => {

    // <div class="loader -> -hidden</div> 
    // "classList" is a property of DOM elements.
    container.classList.remove("hidden");
  }
  const hide = () => {

    // <div class="loader -> +hidden"></div> 
    container.classList.add("hidden");
  }

  return {
    show,
    hide
  }
}
