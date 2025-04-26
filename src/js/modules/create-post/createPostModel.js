
export const createPost = async (post) => {
  try {
    const token = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append('file', post.image);

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

    //===================================================================================================================

    const responseCreatePost = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      body: JSON.stringify({

        image: imageURL,
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

    /*     
    const response = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      body: formData, // Aquí se está enviando FormData, no JSON
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }); 
    */

    const data = await responseCreatePost.json();

    if (!responseCreatePost.ok) {
      console.error(`Error: ${response.status} (${response.statusText})`);
      throw new Error(response.status + " " + response.statusText);
    }

    return data;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}
