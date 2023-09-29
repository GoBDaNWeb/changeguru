import { Dispatch, FC, ReactNode, SetStateAction } from "react";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { DeleteIcon } from "shared/ui";

type MenuList = {
  title: string;
  icon: ReactNode;
};

interface IProfileProps {
  currentTab: number;
  changeTab: Dispatch<SetStateAction<number>>;
  menuList: MenuList[];
}

export const Profile: FC<IProfileProps> = ({
  currentTab,
  changeTab,
  menuList,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.user}>
        <div className={s.imageWrapper}>
          <img src="/user.jpg" alt="user" />
          <div className={s.backdrop} />
          <UploadPhoto label="Upload Photo" className={s.upload} />
        </div>
        <div className={s.userInfo}>
          <span className={s.name}>Peterson Kennady</span>
          <span className={s.email}>petersonkenn@demo.com</span>
        </div>
      </div>
      <div className={s.menu}>
        {menuList.map((menu, index) => {
          const menuItemClass = `${s.menuItem} ${
            currentTab === index ? s.active : ""
          }`;
          return (
            <div
              key={index}
              className={menuItemClass}
              onClick={() => changeTab(index)}
            >
              {menu.icon}
              <span>{menu.title}</span>
            </div>
          );
        })}
        <div className={s.deleteProfile}>
          <DeleteIcon />
          <span>Delete profile</span>
        </div>
      </div>
    </div>
  );
};
