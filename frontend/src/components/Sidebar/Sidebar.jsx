import React, { useContext, useEffect, useState } from "react";
import { LiList, SmallTitle } from "../../styledComponents/styledComponents";
import { StyledSideBar } from "./styles";
import { Rounded } from "../utils/styles";
import { useFilterContext } from "../../services/context/filter-context";
import { fetchAllMuscles } from "../../services/muscle-service";
import InputLabel from "../InputLabel/InputLabel";
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
  const { filter, setFilter, setPage } = useFilterContext();
  const [muscles, setMuscles] = useState([]);
  useEffect(() => {
    const fetchMuscleList = async () => {
      const data = await fetchAllMuscles();
      setMuscles(data);
    };
    fetchMuscleList().catch(console.error);
  }, []);

  function handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    setPage(1);
    if (filter === value) {
      setFilter(null);
      return;
    }
    setFilter(value);
  }
  useEffect(() => console.log("Filtro actualizado:", filter), [filter]);
  const muscleList = muscles.map((muscle) => (
    <InputLabel
      key={"muscle-" + muscle.id}
      muscle={muscle}
      filter={filter}
      handleChange={handleChange}
    ></InputLabel>
  ));
  return (
    <StyledSideBar rounded={roundedShadow}>
      <SmallTitle>Muscles</SmallTitle>
      <form>{muscleList}</form>
    </StyledSideBar>
  );
}
