const LOCALHOST_URL = "http://localhost:3000/";

export async function fetchAllMuscles() {
  const fetchURL = `${LOCALHOST_URL}muscleList`;
  const response = await fetch(fetchURL);
  if (!response.ok) throw new Error("Error en la lectura");
  const data = await response.json();
  return data;
}
