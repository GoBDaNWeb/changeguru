import { useContext } from "react";

import { ConverterStoreContext } from "./context";

export const useConverterStore = () => {
  const store = useContext(ConverterStoreContext);
  if (!store) {
    throw new Error("Converter Store has not been installed");
  }

  return store;
};
