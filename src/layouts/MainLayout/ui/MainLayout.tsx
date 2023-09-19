import { Footer } from "@/widgets/Footer";
import { Outlet } from "react-router-dom";
import s from "./styles.module.sass";
import { Header } from "@/widgets/Header";

export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
