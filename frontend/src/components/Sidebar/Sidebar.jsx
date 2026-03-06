import React from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
const muscles = [
  "biceps",
  "triceps",
  "gluteo",
  "deltoide",
  "gemelo",
  "pectoral",
  "dorsal",
];

export default function SideBar() {
  const muscleList = muscles.map((muscle) => (
    <LiList key={"muscle-" + muscle}>
      <input type="checkbox" name={muscle} id={"muscle-" + muscle} />
      {muscle}
    </LiList>
  ));
  return (
    <div>
      <SmallTitle>Muscles</SmallTitle>
      <ul>{muscleList}</ul>
    </div>
  );
}
