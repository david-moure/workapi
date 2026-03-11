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

  const listExercises = exercisesFav.map((exercise) => (
    <FavItem key={exercise.workout_id} exercise={exercise}></FavItem>
  ));
  return (
    <StyledFavBar>
      <SmallTitle>Favourites</SmallTitle>
      {listExercises}
    </StyledFavBar>
  );
}
