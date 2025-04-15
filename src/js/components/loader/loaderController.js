
// the "loader" in loaderController(loader) is the class '.loader' from index.html"
export function loaderController(loader) { // 'loader' comes from ShowPostsController.js

  const show = () => {

    // <div class="loader hidden -> X"></div> 
    loader.classList.remove("hidden");
  }
  const hide = () => {

    // <div class="loader + hidden"></div> 
    loader.classList.add("hidden");
  }

  return {
    show,
    hide
  }
}
