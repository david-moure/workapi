import React, { createContext, useContext, useState } from "react";

const FavExerciseContext = createContext();

export const FavExerciseContextProvider = ({ children }) => {
  const [exercisesFav, setExercisesFav] = useState([]);

  const favExerciseContextValue = {
    exercisesFav,
    setExercisesFav,
  };
  return (
    <FavExerciseContext.Provider value={favExerciseContextValue}>
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
