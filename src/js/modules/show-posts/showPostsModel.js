export async function getPosts() {

    let posts = [];
  
    try {
      const response = await fetch('http://localhost:8000/api/posts')
      posts = await response.json(); 
      // This code line won't be executed if fech fails.
      // Automatically catch(error) will be executed.
    } catch (error) {
      /* being in the model if an error occurs on fech,
       the error will have a better context so you have a better answer for detecting problems with BD. */

       // here "error" would return a 'status code'.
       
      throw new Error("It was not possible to get the posts. Please try again later.") // this error is sended to showPostsController.js
    }
    
    return posts;
  }