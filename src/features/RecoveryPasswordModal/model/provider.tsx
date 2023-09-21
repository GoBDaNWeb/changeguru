import { FC, PropsWithChildren } from "react";
import { RecoveryPasswordModalStoreContext } from "./context";
import RecoveryPasswordModalStore from "./store";

export const RecoveryPasswordModalProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <RecoveryPasswordModalStoreContext.Provider
      value={new RecoveryPasswordModalStore()}
    >
      {children}
    </RecoveryPasswordModalStoreContext.Provider>
  );
};
