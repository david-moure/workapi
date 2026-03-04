const LOCALHOST_URL = "http://localhost:3000/workouts";
export async function getAllExercises() {
  const response = await fetch(LOCALHOST_URL);
  console.log(response);
  if (!response.ok) throw Error("Error reading from backend");
  const data = await response.json();
  return data;
}
