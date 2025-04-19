export async function loginUser(email, password) {

  try {
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password
      }),
      headers: {
        "Content-type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message;
      console.error(`Error: ${response.status} (${response.statusText}) --> ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }

    const { accessToken } = data;

    if (!accessToken) {
      throw new Error("The access token was not received.");
    }

    return accessToken;

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
}
