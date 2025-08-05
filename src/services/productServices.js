const apiUrl = import.meta.env.VITE_API_URL;

export const getAllProductos = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // En lugar de leer como texto y parsear, leé directo JSON
    const data = await response.json();
    return data;

  } catch (e) {
    console.error("Error al obtener productos", e);
    return [];
  }
};
