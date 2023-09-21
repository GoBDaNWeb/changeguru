import { createContext } from "react";

import RecoveryPasswordModalStore from "./store";

export const RecoveryPasswordModalStoreContext =
  createContext<null | RecoveryPasswordModalStore>(null);
