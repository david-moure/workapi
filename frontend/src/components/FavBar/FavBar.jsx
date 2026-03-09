import React from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledFavBar } from "./styles";

export default function FavBar() {
  const exercises = [
    "1 Lorem, ipsum.",
    "2 Lorem, ipsum.",
    "3 Lorem, ipsum.",
    "4 Lorem, ipsum.",
    "5 Lorem, ipsum.",
    "6 Lorem, ipsum.",
    "7 Lorem, ipsum.",
    "8 Lorem, ipsum.",
    "9 Lorem, ipsum.",
  ];
  const listExercises = exercises.map((exercise) => (
    <LiList key={exercise}>{exercise}</LiList>
  ));
  return (
    <StyledFavBar>
      <SmallTitle></SmallTitle>
      {listExercises}
    </StyledFavBar>
  );
}
