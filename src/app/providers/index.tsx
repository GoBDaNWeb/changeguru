import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";
import ToTopProvider from "./ToTopProvider";
import { ModalProvider } from "entities/Modal";

const Provider = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ToTopProvider>
          <Router />
        </ToTopProvider>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default Provider;
