import React, { useContext, useEffect, useState } from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledSideBar } from "./styles";
import { Rounded } from "../utils/styles";
import { useFilterContext } from "../../services/context/filter-context";
const musclesArray = [
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
  // const [muscles,setMuscles]=useState([])
  const { filter, setFilter } = useFilterContext();

  function handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    console.log(filter);
    console.log(value);
    if (filter === value) {
      setFilter(null);
      console.log("Puesto a 0");
      return;
    }
    setFilter(value);
  }
  useEffect(() => console.log("Filtro actualizado:", filter), [filter]);
  const muscleList = musclesArray.map((muscle) => (
    // <LiList >
    <>
      <div>
        <input
          key={"muscle-" + muscle}
          id={"muscle-" + muscle}
          type="checkbox"
          onChange={handleChange}
          name={muscle}
          value={muscle}
          checked={filter === muscle}
        />
        <label htmlFor={"muscle-" + muscle}>{muscle}</label>
      </div>
    </>
    // </LiList>
  ));
  return (
    <StyledSideBar rounded={roundedShadow}>
      <SmallTitle>Muscles</SmallTitle>
      <form>{muscleList}</form>
    </StyledSideBar>
  );
}
