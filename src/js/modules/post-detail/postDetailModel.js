//===================================================================================================================
export async function getPost(postId) {
  try {
    const response = await fetch(`http://localhost:8000/api/posts/${postId}?_expand=user`);

    if (!response.ok) {

      console.error(`Error: ${response.status} (${response.statusText})`);
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

//===================================================================================================================
export async function removePost(postId) {
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
      console.error(`Error: ${response.status} (${response.statusText})`);
      throw new Error(response.status + " " + response.statusText);
    }
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}

//===================================================================================================================
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
      console.error(`Error: ${response.status} (${response.statusText})`);
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

//===================================================================================================================
export const uploadImage = async (image) => {
  try {
    const token = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append('file', image);

    //-----------------------------------------------------------------------------------------------
    const responseImage = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!responseImage.ok) {
      console.error(`Error: ${responseImage.status} (${responseImage.statusText})`);
      throw new Error(responseImage.status + " " + responseImage.statusText);
    }

    const dataImage = await responseImage.json();
    const imageURL = dataImage.path

    return imageURL

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}

//===================================================================================================================
export const updatePost = async (post) => {
  try {
    const token = localStorage.getItem("accessToken");

    //-----------------------------------------------------------------------------------------------
    const responseUpdatedPost = await fetch(`http://localhost:8000/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        image: post.image,
        name: post.name,
        tag: post.tag,
        description: post.description,
        price: post.price,
        isPurchase: post.isPurchase
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!responseUpdatedPost.ok) {
      console.error(`Error: ${responseUpdatedPost.status} (${responseUpdatedPost.statusText})`);
      throw new Error(responseUpdatedPost.status + " " + responseUpdatedPost.statusText);
    }

    //-----------------------------------------------------------------------------------------------
    const responsePostWithUser = await fetch(`http://localhost:8000/api/posts/${post.id}?_expand=user`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!responsePostWithUser.ok) {
      console.error(`Error: ${responsePostWithUser.status} (${responsePostWithUser.statusText})`);
      throw new Error(responsePostWithUser.status + " " + responsePostWithUser.statusText);
    }

    const updatedPostWithUser = await responsePostWithUser.json();

    return updatedPostWithUser;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
};