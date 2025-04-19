//-----------------------------------------------------------------------------------------------
export async function postDetailModel(postId) {
  try {
    const response = await fetch(`http://localhost:8000/api/posts/${postId}?_expand=user`);

    if (!response.ok) {

      const errorMessage = response.message;

      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    } else {
      const postDetail = await response.json();

      return postDetail;
    }

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
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
      const errorMessage = response.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
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
      const errorMessage = response.message;
      console.error(`Error: ${response.status} (${response.statusText}): ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }

    const user = await response.json();

    return user;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}
//-----------------------------------------------------------------------------------------------