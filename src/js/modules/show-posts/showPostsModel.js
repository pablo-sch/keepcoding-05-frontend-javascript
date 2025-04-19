export async function getPosts() {

  let posts = [];

  try {
    const response = await fetch('http://localhost:8000/api/posts')

    if (!response.ok) {
      const errorMessage = response.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }

    posts = await response.json();

    if (posts.length === 0) {
      const apiMessage = 'Sorry... No Post available at the moment.';
      console.error(`Response: ${response.status} (${response.statusText}) --> ${response.message}`);
      throw new Error(apiMessage);
    }

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }

  return posts;
}