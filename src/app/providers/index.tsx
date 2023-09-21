import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";
import ToTopProvider from "./ToTopProvider";
import { LoginModalProvider } from "@/features/LoginModal/model";
import { RecoveryPasswordModalProvider } from "@/features/RecoveryPasswordModal/model";

const Provider = () => {
  return (
    <BrowserRouter>
      <RecoveryPasswordModalProvider>
        <LoginModalProvider>
          <ToTopProvider>
            <Router />
          </ToTopProvider>
        </LoginModalProvider>
      </RecoveryPasswordModalProvider>
    </BrowserRouter>
  );
};

export default Provider;
