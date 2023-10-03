import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";
import ToTopProvider from "./ToTopProvider";
import { ModalProvider } from "entities/Modal";
import { ConverterProvider } from "features/Converter";
import { TableFiltersProvider } from "features/TableFilters";

const Provider = () => {
  return (
    <BrowserRouter>
      <ConverterProvider>
        <ModalProvider>
          <TableFiltersProvider>
            <ToTopProvider>
              <Router />
            </ToTopProvider>
          </TableFiltersProvider>
        </ModalProvider>
      </ConverterProvider>
    </BrowserRouter>
  );
};

export default Provider;
