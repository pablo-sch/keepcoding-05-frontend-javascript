export async function getPosts() {

  let posts = [];

  try {
    const response = await fetch('http://localhost:8000/api/posts')

    posts = await response.json();

    if (!response.ok) {
      const errorMessage = posts.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(errorMessage);
    }

    if (posts.length === 0) {
      const apiMessage = 'No posts to fetch in the API';
      console.error(`Response: ${response.status} (${response.statusText}) --> ${apiMessage}`);
      throw new Error(apiMessage);
    }

  } catch (error) {
    throw error;
  }

  return posts;
}