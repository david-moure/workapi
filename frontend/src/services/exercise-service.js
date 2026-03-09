const LOCALHOST_URL = "http://localhost:3000/";

export async function getAllExercises() {
  const response = await fetch(LOCALHOST_URL);
  console.log(response);
  if (!response.ok) throw Error("Error reading from backend");
  const data = await response.json();
  return data;
}

export async function getImage(id) {
  const urlFetch = `${LOCALHOST_URL}image/${id}`;

  const response = await fetch(urlFetch);

  if (!response.ok) throw Error("Error reading from backend");

  return response;
}
