import React, { useContext, useEffect, useState } from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledSideBar } from "./styles";
import { Rounded } from "../utils/styles";
import { FilterContext } from "../../pages/DashBoard";
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
  // const [filters, setFilters] = useState([]);
  const { filter, setFilter } = useContext(FilterContext);

  function handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    console.log(filter);
    console.log(value);
    setFilter(value);
  }
  useEffect(() => console.log("Filtro actualizado:", filter), [filter]);
  const muscleList = muscles.map((muscle) => (
    <LiList key={"muscle-" + muscle}>
      <input
        type="checkbox"
        onChange={handleChange}
        name={muscle}
        value={muscle}
      />
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
