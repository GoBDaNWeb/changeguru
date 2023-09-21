import { useContext } from "react";

import { RecoveryPasswordModalStoreContext } from "./context";

export const useRecoveryPasswordModalStore = () => {
  const store = useContext(RecoveryPasswordModalStoreContext);
  if (!store) {
    throw new Error("Recovery Password Modal Store has not been installed");
  }

  return store;
};
