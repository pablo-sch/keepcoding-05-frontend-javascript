//-----------------------------------------------------------------------------------------------
export async function postDetailModel(postId) {
  try {
    const response = await fetch(`http://localhost:8000/api/posts/${postId}?_expand=user`);

    if (!response.ok) {
      const errorMessage = posts.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(errorMessage);
    }

    const postDetail = await response.json();

    return postDetail;

  } catch (error) {
    throw error;
  }
}
//-----------------------------------------------------------------------------------------------
export async function removepost(postId) {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorMessage = posts.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw error;
  }
}
//-----------------------------------------------------------------------------------------------
export async function getLoggedInUserInfo() {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`http://localhost:8000/auth/me`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorMessage = posts.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(errorMessage);
    }

    const user = await response.json();

    return user;
  } catch (error) {
    throw error;
  }
}
//-----------------------------------------------------------------------------------------------