import { createContext, useContext, useState } from "react";
import DataGrid from "../components/DataGrid/DataGrid.jsx";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import { StyledDashBoard } from "./styles.js";
import FavBar from "../components/FavBar/FavBar.jsx";
import { FilterContextProvider } from "../services/context/filter-context.jsx";
import { FavExerciseContextProvider } from "../services/context/fav-exercise-context.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";

export default function Dashboard() {
  const [filter, setFilter] = useState("");

  return (
    <StyledDashBoard>
      <FilterContextProvider>
        <FavExerciseContextProvider>
          <Header></Header>
          <Pagination></Pagination>
          <DataGrid variante="blue"></DataGrid>
          <SideBar></SideBar>
          <FavBar></FavBar>
        </FavExerciseContextProvider>
      </FilterContextProvider>
    </StyledDashBoard>
  );
}
