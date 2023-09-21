import { useContext } from "react";

import { LoginModalStoreContext } from "./context";

export const useLoginModalStore = () => {
  const store = useContext(LoginModalStoreContext);
  if (!store) {
    throw new Error("Login Modal Store has not been installed");
  }

  return store;
};
