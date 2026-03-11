import React from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledFavBar } from "./styles";
import { getSavedWorkouts } from "../../services/exercise-service";
import { useEffect } from "react";
import { useState } from "react";
import FavItem from "../FavItem/FavItem";
import { useFavExerciseContext } from "../../services/context/fav-exercise-context";
export default function FavBar() {
  const { exercisesFav, setExercisesFav } = useFavExerciseContext();
  useEffect(() => {
    console.log("favbar cargado");
    const readFav = async () => {
      const data = await getSavedWorkouts();
      setExercisesFav(data);
    };
    readFav().catch(console.error);
  }, []);

  console.log(exercisesFav);
  const listExercises = exercisesFav.map((exercise) => (
    <LiList key={exercise.workout_id}>{exercise.name}</LiList>
  ));
  return (
    <StyledFavBar>
      <SmallTitle>Favourites</SmallTitle>
      {listExercises}
    </StyledFavBar>
  );
}
