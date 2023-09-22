import { NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./styles.module.sass";
import { navigationList } from "../config";
import { Button } from "shared/ui";
import { PATH_PAGE } from "shared/lib/react-router";
import { useEffect, useState } from "react";
import { useLoginModalStore } from "features/LoginModal";
import { observer } from "mobx-react-lite";
import { BurgerIcon } from "shared/ui/BurgerIcon";
import { toTop } from "shared/lib/helpers";

export const Header = observer(() => {
  const [active, setActive] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { handleOpenModal } = useLoginModalStore();

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
      toTop();
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
        <img src="logo.png" alt="logo" className={s.logo} />
        <img src="logo-min.png" alt="logo" className={s.logoMin} />
      </div>
      <nav className={s.navigation}>
        {navigationList.map((nav) => (
          <NavLink key={nav.link} to={nav.link}>
            {nav.title}
          </NavLink>
        ))}
      </nav>
      <div className={s.auth}>
        <Button
          onClick={handleOpenModal}
          variant="clear"
          className={s.loginBtn}
        >
          Log In
        </Button>
        <Button
          onClick={() => navigate(PATH_PAGE.register)}
          className={s.registerBtn}
        >
          Register
        </Button>
        <Button onClick={() => {}} className={s.burger} variant="clear">
          <BurgerIcon />
        </Button>
      </div>
    </header>
  );
});
