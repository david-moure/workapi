import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSavedWorkouts } from "../exercise-service";

const FavExerciseContext = createContext();

export const FavExerciseContextProvider = ({ children }) => {
  const [exercisesFav, setExercisesFav] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExercises = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getSavedWorkouts();
      setExercisesFav(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const refetchExercises = () => {
    fetchExercises();
  };
  return (
    <FavExerciseContext.Provider
      value={{ exercisesFav, setExercisesFav, refetchExercises }}
    >
      {children}
    </FavExerciseContext.Provider>
  );
};

export const useFavExerciseContext = () => {
  const ctx = useContext(FavExerciseContext);
  if (!ctx) {
    throw new Error("No context provider");
  }
  return ctx;
};
