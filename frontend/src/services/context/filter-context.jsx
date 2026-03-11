import { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);

  const filterContextValue = {
    filter,
    setFilter,
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
