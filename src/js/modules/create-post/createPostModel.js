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

    const data = await response.json();

    // If response is not OK, throw an error with the response message
    if (!response.ok) {
      const errorMessage = data.message;
      console.error(`Error: ${response.status} (${response.statusText}) --> ${errorMessage}`);
      throw new Error(errorMessage);
    }

  } catch (error) {
    throw error;

  }

}
