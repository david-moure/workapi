import { createContext, useContext, useState } from "react";
import DataGrid from "../components/DataGrid/DataGrid.jsx";
import FavBar from "../components/FavBar/Favbar.jsx";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import { StyledDashBoard } from "./styles.js";

export const FilterContext = createContext();

export default function Dashboard() {
  const [filter, setFilter] = useState("");
  return (
    <StyledDashBoard>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Header></Header>
        <DataGrid variante="blue"></DataGrid>
        <SideBar></SideBar>
        <FavBar></FavBar>
      </FilterContext.Provider>
    </StyledDashBoard>
  );
}
