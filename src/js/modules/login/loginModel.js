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
      throw new Error(errorMessage);
    }

    /*     if (!response.ok) {
          throw new Error("error iniciando sesión")
        } */

    const { accessToken } = data;

    if (!accessToken) {
      throw new Error("No se recibió el token de acceso");
    }

    return accessToken;

  } catch (error) {
    throw error;
  }
}
