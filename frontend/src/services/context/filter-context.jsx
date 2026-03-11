import {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import {
  getAllExercises,
  getExercisesByFilter,
  getExercisesByFilterPage,
  getExercisesByPage,
} from "../exercise-service";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const fetchExercises = useCallback(async () => {
    setIsLoading(true);
    try {
      let data = [];
      if (filter && page) {
        const data = await getExercisesByFilterPage();
      } else if (filter && !page) {
        const data = await getExercisesByFilter();
      } else if (!filter && page) {
        const data = await getExercisesByPage();
      } else {
        console.log("Default");
        data = await getAllExercises();
      }

      setExercises(data);
      setIsLoading(false);
    } catch {
      console.error;
    }
  }, [setIsLoading, filter]);
  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);
  const filterContextValue = {
    filter,
    setFilter,
    exercises,
    setExercises,
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
