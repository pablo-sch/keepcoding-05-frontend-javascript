export const createPost = async (postData) => {
  try {
    const token = localStorage.getItem("accessToken");

    const response = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        photo: postData.image,
        name: postData.name,
        description: postData.description,
        price: postData.price,
        isPurchase: postData.isPurchase
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorMessage = data.message;
      console.error(`Error: ${response.status} (${response.statusText}) --> ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }

    const data = await response.json();

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }

}
