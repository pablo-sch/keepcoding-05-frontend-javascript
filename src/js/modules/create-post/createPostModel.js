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
export const createPost = async (post) => {
  try {
    const token = localStorage.getItem("accessToken");

    //-----------------------------------------------------------------------------------------------
    const responseCreatePost = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
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

    const data = await responseCreatePost.json();

    if (!responseCreatePost.ok) {
      console.error(`Error: ${responseCreatePost.status} (${responseCreatePost.statusText})`);
      throw new Error(responseCreatePost.status + " " + responseCreatePost.statusText);
    }

    return data;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}
