import DataGrid from "../components/DataGrid/DataGrid.jsx";
import FavBar from "../components/FavBar/Favbar.jsx";
import Header from "../components/Header/Header.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import { StyledDashBoard } from "./styles.js";
export default function Dashboard() {
  return (
    <StyledDashBoard>
      <Header></Header>
      <DataGrid variante="blue"></DataGrid>
      <SideBar></SideBar>
      <FavBar></FavBar>
    </StyledDashBoard>
  );
}
