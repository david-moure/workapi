import { useContext } from "react";
// import { FavExerciseContext } from "./context/fav-exercise-context.js";

const LOCALHOST_URL = "http://localhost:3000/";

export async function getAllExercises() {
  const response = await fetch(LOCALHOST_URL);
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

export async function saveWorkout(idW, nameW, categoryW, primaryMuscleW) {
  const urlFetch = `${LOCALHOST_URL}save`;
  const response = await fetch(urlFetch, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      workoutId: idW,
      name: nameW,
      category: categoryW,
      primary_muscle: primaryMuscleW,
    }),
  });

  // const { favExercises, setFavExercises } = useContext(FavExerciseContext);
  // setFavExercises((prevFav) => [
  //   ...prevFav,
  //   {
  //     workout_id: idW,
  //     name: nameW,
  //     category: categoryW,
  //     primary_muscle: primaryMuscleW,
  //   },
  // ]);

  const data = await response.json();
  console.log(data);
}
export async function getSavedWorkouts() {
  const urlFetch = `${LOCALHOST_URL}savedWorkouts`;
  const response = await fetch(urlFetch);
  if (!response.ok) throw new Error("Error en la lectura");
  const data = await response.json();
  console.log(data);
  return data;
}
