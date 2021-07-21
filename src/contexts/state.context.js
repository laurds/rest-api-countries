import { createContext } from "react";
import useApi from "../customhook/useApi";

export const cards = createContext();
export const filterCards = createContext();
export const allCountriesData = createContext();

function Country({ children }) {
  const [state, allCountries, changeState] = useApi([]);
  return (
    <allCountriesData.Provider value={allCountries}>
      <filterCards.Provider value={changeState}>
        <cards.Provider value={state}>{children}</cards.Provider>
      </filterCards.Provider>
    </allCountriesData.Provider>
  );
}

export { Country };
