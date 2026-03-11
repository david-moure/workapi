import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { StyledDataGrid } from "./styles";
import { getAllExercises } from "../../services/exercise-service.js";
import ExerciseCard from "./../ExerciseCard/ExerciseCard";
import { useFilterContext } from "../../services/context/filter-context.jsx";
export default function DataGrid(props) {
  const { filter } = useFilterContext();
  const [exercises, setExercises] = useState([]);
  // const musclesId = [
  //   "11a71b4e-1c3a-484c-9776-68b2b6288821", //trapecio
  //   "ec941c4f-8202-4302-8d59-7942f48b9b6f", //shoulders
  // ];
  useEffect(() => {
    const fetchExercises = async () => {
      const data = await getAllExercises();

      setExercises(data);
    };

    fetchExercises().catch(console.error);
  }, []);
  // Filtrado por musculo
  // console.log("Musculo filtrado");
  // let paco = [];

  // let accum = exercises.reduce((acc, exercise) => {
  //   if (
  //     exercise.primaryMuscles.some((muscle) =>
  //       musclesId.some((muscleId) => muscle.id === muscleId),
  //     )
  //   )
  //     acc.push(exercise);
  //   return acc;
  // }, []);
  // console.log(accum);

  //Obtener listado de musculos

  // console.log("Inicial", muscles);
  // exercises.forEach((exercise) => {
  //   exercise.primaryMuscles.forEach((primaryMuscle) => {
  //     console.log(!muscles.some((muscle) => muscle.id === primaryMuscle.id));
  //     if (!muscles.some((muscle) => muscle.id === primaryMuscle.id)) {
  //       console.log("Guardado -", primaryMuscle);
  //       muscles.push(primaryMuscle);
  //     }
  //   });
  // });

  const roundedShadow = `
  border-radius: 1rem;
  box-shadow:  0 2px 8px rgba(0,0,0,0.35)`;
  const variante = props.variante;

  return (
    <StyledDataGrid rounded={roundedShadow} color={variante}>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise}></ExerciseCard>
      ))}
    </StyledDataGrid>
  );
}
