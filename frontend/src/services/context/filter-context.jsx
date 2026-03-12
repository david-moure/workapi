import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { getAllExercises, getExercisesByFilter } from "../exercise-service";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [length, setLenght] = useState(1);
  const [page, setPage] = useState(1);

  const fetchExercises = useCallback(async () => {
    setIsLoading(true);
    try {
      let data = [];
      if (filter || page > 1) {
        data = await getExercisesByFilter(filter, page);
        console.log(data);
      } else {
        console.log("Default");
        data = await getAllExercises();
        console.log(data);
      }

      setExercises(data);

      setIsLoading(false);
    } catch {
      console.error;
    }
  }, [setIsLoading, filter, page]);
  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);
  const filterContextValue = {
    filter,
    setFilter,
    exercises,
    setExercises,
    page,
    setPage,
  };

  return (
    <FilterContext.Provider value={filterContextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const ctx = useContext(FilterContext);

  if (!ctx) {
    throw new Error("No context provider");
  }

  return ctx;
};
