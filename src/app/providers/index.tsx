import { BrowserRouter } from "react-router-dom";
import Router from "./RouterProvider";
import ToTopProvider from "./ToTopProvider";
import { ModalProvider } from "entities/Modal";
import { MenuProvider } from "features/Burger";
import { ConverterProvider } from "features/Converter";
import { TableFiltersProvider } from "features/TableFilters";
import { RegisterExchangeProvider } from "features/RegisterExchange";
import { UserProvider } from "entities/User";

const Provider = () => {
  return (
    <BrowserRouter>
      <ConverterProvider>
        <MenuProvider>
          <ModalProvider>
            <UserProvider>
              <RegisterExchangeProvider>
                <TableFiltersProvider>
                  <ToTopProvider>
                    <Router />
                  </ToTopProvider>
                </TableFiltersProvider>
              </RegisterExchangeProvider>
            </UserProvider>
          </ModalProvider>
        </MenuProvider>
      </ConverterProvider>
    </BrowserRouter>
  );
};

export default Provider;
