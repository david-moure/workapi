import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { getAllExercises } from "./services/exercise-service.js";
import "./App.css";
function DataGrid() {
  const exercises = getAllExercises().then((data) => {
    console.log(data);
    return data;
  });

  return <h1>Workout Exercises</h1>;
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
