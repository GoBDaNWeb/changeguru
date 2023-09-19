import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";

const Provider = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default Provider;
