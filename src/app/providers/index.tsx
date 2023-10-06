import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";
import ToTopProvider from "./ToTopProvider";
import { ModalProvider } from "entities/Modal";
import { MenuProvider } from "features/Burger";
import { ConverterProvider } from "features/Converter";
import { TableFiltersProvider } from "features/TableFilters";

const Provider = () => {
  return (
    <BrowserRouter>
      <ConverterProvider>
        <MenuProvider>
          <ModalProvider>
            <TableFiltersProvider>
              <ToTopProvider>
                <Router />
              </ToTopProvider>
            </TableFiltersProvider>
          </ModalProvider>
        </MenuProvider>
      </ConverterProvider>
    </BrowserRouter>
  );
};

export default Provider;
