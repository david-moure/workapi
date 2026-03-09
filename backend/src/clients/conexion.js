const API_URL = "https://api.workoutapi.com/exercises";
const API_KEY =
  "dbe8bb519897cbe4c222b15382d5d1734f178dc69250c9d2f87156c11dc5cd9c";

async function getAll() {
  const response = await fetch(API_URL, {
    headers: { "x-api-key": API_KEY },
  });
  if (!response.ok) {
    console.log(response);
    throw new Error("Error en la lectura de la API", response);
  }
  const data = await response.json();

  return data;
}

async function getImage(id) {
  console.log(`A la API ${API_URL}/${id}/image`);
  try {
    const response = await fetch(`${API_URL}/${id}/image`, {
      headers: {
        "x-api-key": API_KEY,
        Accept: "image/svg+xml",
      },
    });

    const svg = await response.text();
    console.log(svg);
    return svg;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getAll, getImage };
