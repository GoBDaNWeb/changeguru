import { useRoutes } from "react-router-dom";
import { MainPage } from "pages/main";
import { FaqPage } from "pages/faq";
import { MainLayout } from "layouts/MainLayout";
import { AboutUsPage } from "pages/about-us";
import { PATH_PAGE } from "shared/lib/react-router";
import { RegisterPage } from "pages/register";

const Router = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: PATH_PAGE.root,
          element: <MainPage />,
        },
        { path: PATH_PAGE.faq, element: <FaqPage /> },
        { path: PATH_PAGE.about, element: <AboutUsPage /> },
        { path: PATH_PAGE.register, element: <RegisterPage /> },
      ],
    },
  ]);
};

export default Router;
