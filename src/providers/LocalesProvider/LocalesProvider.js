import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "../../helpers/localStorage";
import { langs } from "./translations";

const LocalesContext = createContext({});

export const useLocales = () => useContext(LocalesContext);

const LocalesProvider = ({ children }) => {
  const [lang, setLang] = useState(getItemFromLocalStorage("language") || "en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  }, []);

  useEffect(() => {
    setItemToLocalStorage("language", lang);
  }, [lang]);

  return (
    <LocalesContext.Provider value={{ trans: langs[lang], lang, toggleLang }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
