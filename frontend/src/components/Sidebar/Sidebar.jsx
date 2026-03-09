import React from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledSideBar } from "./styles";
import { Rounded } from "../utils/styles";
const muscles = [
  "biceps",
  "triceps",
  "gluteo",
  "deltoide",
  "gemelo",
  "pectoral",
  "dorsal",
];
const roundedShadow = `
  border-radius: 1rem;
  box-shadow:  0 2px 8px rgba(0,0,0,0.35)`;
export default function SideBar() {
  const muscleList = muscles.map((muscle) => (
    <LiList key={"muscle-" + muscle}>
      <input type="checkbox" name={muscle} id={"muscle-" + muscle} />
      {muscle}
    </LiList>
  ));
  return (
    <StyledSideBar rounded={roundedShadow}>
      <SmallTitle>Muscles</SmallTitle>
      <ul>{muscleList}</ul>
    </StyledSideBar>
  );
}
