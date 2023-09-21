import { Button, Input, Selector } from "@/shared/ui";
import s from "./styles.module.sass";
import { countryList, genderList } from "../../config";
import { FC } from "react";

interface IUserRegisterProps {
  onComplite: () => void;
}

export const UserRegister: FC<IUserRegisterProps> = ({ onComplite }) => {
  return (
    <div className={s.userRegister}>
      <form className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input placeholder="Email/ID" />
          <div className={s.withHint}>
            <Input placeholder="Password" />
            <p className={s.hint}>
              8 or more characters, including numbers and special characters
            </p>
          </div>
          <Input placeholder="Repeat password" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input placeholder="NickName" />
            <p className={s.hint}>Excluding special characters</p>
          </div>
          <Selector
            options={countryList}
            placeholder="Country"
            className={s.selector}
            name="country"
          />
          <div className={s.withHint}>
            <Input placeholder="Phone" />
            <p className={s.hint}>Enter numbers only</p>
          </div>
          <Selector
            options={genderList}
            placeholder="Gender"
            className={s.selector}
            name="gender"
          />
          <Input placeholder="Age" />
        </div>
        <Button onClick={onComplite} className={s.regBtn}>
          Pre-Registration
        </Button>
      </form>
    </div>
  );
};
