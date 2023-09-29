import { Outlet } from "react-router-dom";

import s from "./styles.module.sass";

import { Header } from "widgets/Header";
import { LoginModal } from "widgets/LoginModal";
import { RecoveryPasswordModal } from "widgets/RecoveryPasswordModal";
import { Footer } from "widgets/Footer";


export const MainLayout = () => {
  return (
    <div className={s.layout}>
      <LoginModal />
      <RecoveryPasswordModal />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
