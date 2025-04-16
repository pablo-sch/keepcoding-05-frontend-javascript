export async function getPosts() {

  let posts = [];

  try {
    const response = await fetch('http://localhost:8000/api/posts')

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || 'Error desconocido';
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(errorMessage);
    }

    if (data.length === 0) {
      const apiMessage = 'No posts to fetch in the API';
      console.error(`Response: ${response.status} (${response.statusText}) --> ${apiMessage}`);
      throw new Error(apiMessage);
    }

  } catch (error) {
    throw error;
  }

  return posts;
}