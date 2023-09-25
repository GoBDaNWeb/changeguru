import { Breadcrumbs, Title } from "shared/ui";
import s from "./styles.module.sass";
import { Profile } from "widgets/Profile";
import { breadcrumbsList, menuList } from "../../config";
import { useState } from "react";
import { BasicInfo } from "features/BasicInfo";
import { ContactDetials } from "features/ContactDetials";
import { ChangePassword } from "features/ChangePassword";
import { AdvancedSetting } from "features/AdvancedSetting";
import { AdvancedProfile } from "../AdvancedProfile/AdvancedProfile";

export const ExchangeProfilePage = () => {
  const [tab, setTab] = useState(0);

  const tabContent = () => {
    if (tab === 0) {
      return <BasicInfo />;
    } else if (tab === 1) {
      return <ContactDetials />;
    } else if (tab === 2) {
      return <AdvancedProfile />;
    } else if (tab === 3) {
      return <ChangePassword />;
    }
  };

  return (
    <div className={s.profile}>
      <div className={`${s.top} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbsList} />
        <Title>Exchange Profile</Title>
      </div>
      <div className={s.content}>
        <Profile currentTab={tab} changeTab={setTab} menuList={menuList} />
        <div className={s.mainContent}>{tabContent()}</div>
      </div>
    </div>
  );
};