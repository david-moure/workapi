import React, { useState } from "react";
import { useEffect } from "react";
import { StyledDataGrid } from "./styles";
import { getAllExercises } from "../../services/exercise-service.js";
import ExerciseCard from "./../ExerciseCard/ExerciseCard";

export default function DataGrid(props) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await getAllExercises();
      console.log(data);
      setExercises(data);
    };

    fetchExercises().catch(console.error);
  }, []);

  const roundedShadow = `
  border-radius: 1rem;
  box-shadow:  0 2px 8px rgba(0,0,0,0.35)`;
  const variante = props.variante;
  return (
    <StyledDataGrid rounded={roundedShadow} color={variante}>
      <ExerciseCard />
    </StyledDataGrid>
  );
}
