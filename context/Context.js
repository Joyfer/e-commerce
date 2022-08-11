import React, { useContext, createContext } from "react";

//Material Angular
import { useTheme, useMediaQuery } from "@material-ui/core";

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  // Get if is mobile screen
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("xs"));

  //ComponentDidMouunt
  React.useEffect(() => {}, []);

  //
  const values = React.useMemo(
    () => ({
      isMobileScreen, // States que seran visibles en el contexto.
      // Funciones que son exportadas para manejo externo.
    }),
    [isMobileScreen]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;
