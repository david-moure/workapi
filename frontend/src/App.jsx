import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getAllExercises } from "./services/exercise-service.js";
import "./App.css";
import styled from "@emotion/styled";

const Header = styled.button`
  color: hotpink;
`;
function DataGrid() {
  const exercises = getAllExercises().then((data) => {
    console.log(data);
    return data;
  });

  return <Header id="">HOLA</Header>;
  //return <h1 css={style}>Workout Exercises</h1>;
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataGrid></DataGrid>
    </>
  );
}

export default App;
