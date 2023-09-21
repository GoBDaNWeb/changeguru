import { FC, PropsWithChildren } from "react";
import { LoginModalStoreContext } from "./context";
import LoginModalStore from "./store";

export const LoginModalProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LoginModalStoreContext.Provider value={new LoginModalStore()}>
      {children}
    </LoginModalStoreContext.Provider>
  );
};
