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

    if (!response.ok) {
      // If response is not OK, throw an error with the response message
      const data = await response.json();
      throw new Error(data.message || "Server error occurred.");
    }

  } catch (error) {
    console.error('Error during user creation:', error);
    throw error;
  }
};