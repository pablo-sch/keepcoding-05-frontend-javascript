export async function getPosts() {

    let posts = [];
  
    try {
      const response = await fetch('http://localhost:8000/api/posts')
      posts = await response.json();
    } catch (error) {
      throw new Error("It was not possible to get the posts. Please try again later.")
    }
    
    return posts;
  }