export const createUser = async (name, email, pw) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        username: email,
        password: pw
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message;
      console.error(`Error: ${response.status} (${response.statusText}) --> ${errorMessage}`);
      throw new Error(response.status + " " + response.statusText);
    }

  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Oops... There was a problem with the server connection.');
    }
    throw error
  }
};