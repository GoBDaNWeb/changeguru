import { createContext } from "react";

import loginModalStore from "./store";

export const LoginModalStoreContext = createContext<null | loginModalStore>(
  null
);
