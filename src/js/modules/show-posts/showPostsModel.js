export async function getPosts() {

  let posts = [];

  try {
    const response = await fetch('http://localhost:8000/api/posts')

    if (!response.ok) {
      // It will occur when there is a connection to the server and to the database, but the server responds with an error.
      throw new Error("Server error: " + response.status + " - " + response.statusText);
    }

    posts = await response.json();

  } catch (error) {

    // It will occur when you cannot connect to the server or database at all.
    console.error("Fetch error:", error);
    throw new Error("It was not possible to get the posts. Please try again later.");
  }

  return posts;
}