import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { navigationList } from "shared/config";
import { PATH_PAGE } from "shared/config";
import { useModalStore } from "entities/Modal";

import s from "./styles.module.sass";

import { Button, LogoutIcon } from "shared/ui";
import { BurgerIcon } from "shared/ui/BurgerIcon";
import { Burger } from "features/Burger";
import { Logo } from "entities/Logo";
import { useUserStore } from "entities/User";

export const Header = observer(() => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const { handleOpenLoginModal } = useModalStore();
  const { userData, handleSetUserData } = useUserStore();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
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
      <Logo />
      <nav className={s.navigation}>
        {navigationList.map((nav) => (
          <NavLink key={nav.link} to={nav.link} className={s.navLink}>
            {nav.title}
          </NavLink>
        ))}
      </nav>
      {!userData ? (
        <div className={s.auth}>
          <Button
            onClick={handleOpenLoginModal}
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
          <Burger />
        </div>
      ) : (
        <div className={s.user}>
          <NavLink to={PATH_PAGE.userProfile} className={s.userInfo}>
            <div className={s.imageWrapper}>
              {
                //@ts-ignore
                !userData.img ? (
                  <div className={s.imageSkeleton}></div>
                ) : (
                  <img src="" alt="user" />
                )
              }
            </div>
            <p className={s.name}>
              {userData.first_name} {userData.last_name}
            </p>
          </NavLink>

          <Button
            onClick={() => {
              handleSetUserData(null);
              navigate(PATH_PAGE.root);
            }}
            className={s.logoutBtn}
            variant="clear"
          >
            <LogoutIcon />
            <span>Log Out</span>
          </Button>
        </div>
      )}
    </header>
  );
});
