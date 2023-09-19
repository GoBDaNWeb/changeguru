import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./styles.module.sass";
import { navigationList } from "../data/navigationList";
import { Button } from "@/shared/ui";
import { PATH_PAGE } from "@/shared/lib/react-router";
import { useEffect, useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  const handleClickLogo = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate(PATH_PAGE.root);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  const headerClass = `${s.header} ${active ? s.active : ""} container`;

  return (
    <header className={headerClass}>
      <div onClick={handleClickLogo} className={s.logoWrapper}>
        <img src="logo.png" alt="logo" />
      </div>
      <nav className={s.navigation}>
        {navigationList.map((nav) => (
          <NavLink to={nav.link}>{nav.title}</NavLink>
        ))}
      </nav>
      <div className={s.auth}>
        <div>Log In</div>
        <Button
          onClick={() => navigate(PATH_PAGE.register)}
          className={s.registerBtn}
        >
          Register
        </Button>
      </div>
    </header>
  );
};
