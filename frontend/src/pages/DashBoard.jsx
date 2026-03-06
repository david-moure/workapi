import DataGrid from "../components/DataGrid/DataGrid.jsx";
import SideBar from "../components/Sidebar/Sidebar";
import "./DashBoard.css";
export default function Dashboard() {
  return (
    <div className="container">
      <SideBar className="sidebar"></SideBar>
      <DataGrid classList="main-content"></DataGrid>
    </div>
  );
}
