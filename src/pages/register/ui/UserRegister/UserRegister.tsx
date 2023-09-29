import { FC, useRef } from "react";

import { countryList, genderList } from "shared/config";
import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input, Selector } from "shared/ui";

interface IUserRegisterProps {
  onComplite: () => void;
}

export const UserRegister: FC<IUserRegisterProps> = ({ onComplite }) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.userRegister}>
      <form className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input placeholder="Email/ID" className={s.input} />
          <div className={s.withHint}>
            <Input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              icon={
                <Button
                  onClick={() => changePasswordType(passwordRef)}
                  variant="clear"
                >
                  <EyeIcon />
                </Button>
              }
              className={s.input}
            />
            <p className={s.hint}>
              8 or more characters, including numbers and special characters
            </p>
          </div>
          <Input
            placeholder="Repeat password"
            type="password"
            ref={repeatPasswordRef}
            icon={
              <Button
                onClick={() => changePasswordType(repeatPasswordRef)}
                variant="clear"
              >
                <EyeIcon />
              </Button>
            }
            className={s.input}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input placeholder="NickName" className={s.input} />
            <p className={s.hint}>Excluding special characters</p>
          </div>
          <Selector
            options={countryList}
            placeholder="Country"
            className={s.selector}
            name="country"
          />
          <div className={s.withHint}>
            <Input placeholder="Phone" className={s.input} />
            <p className={s.hint}>Enter numbers only</p>
          </div>
          <Selector
            options={genderList}
            placeholder="Gender"
            className={s.selector}
            name="gender"
          />
          <Input placeholder="Age" className={s.input} />
        </div>
        <Button onClick={onComplite} className={s.regBtn}>
          Pre-Registration
        </Button>
      </form>
    </div>
  );
};
