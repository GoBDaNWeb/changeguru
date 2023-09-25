import { FC, useRef } from "react";

import { countryList } from "shared/config";
import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input, Selector } from "shared/ui";
import { UploadPhoto } from "features/UploadPhoto";

interface IExchangeRegisterProps {
  onChangeStep: () => void;
}

export const ExchangeRegister: FC<IExchangeRegisterProps> = ({
  onChangeStep,
}) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.exchangeRegister}>
      <form className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input placeholder="Name of Exchange" className={s.input} />
          <Input placeholder="Web Site" className={s.input} />
          <UploadPhoto label="Upload Logo" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input
              placeholder="Password"
              type="password"
              className={s.input}
              ref={passwordRef}
              icon={
                <Button
                  onClick={() => changePasswordType(passwordRef)}
                  variant="clear"
                >
                  <EyeIcon />
                </Button>
              }
            />
            <p className={s.hint}>
              8 or more characters, including numbers and special characters
            </p>
          </div>
          <Input
            placeholder="Repeat password"
            type="password"
            className={s.input}
            ref={repeatPasswordRef}
            icon={
              <Button
                onClick={() => changePasswordType(repeatPasswordRef)}
                variant="clear"
              >
                <EyeIcon />
              </Button>
            }
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Contact Person</span>
          <div className={s.withHint}>
            <Input placeholder="Email" type="email" className={s.input} />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Business E-Mail</span>
          <div className={s.withHint}>
            <Input placeholder="Enter Email" type="email" className={s.input} />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Country</span>
          <Selector
            options={countryList}
            placeholder="Country"
            className={s.selector}
            name="country"
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Address</span>
          <div className={s.address}>
            <Input placeholder="Area Code" />
            <Input placeholder="City" />
          </div>
          <Input placeholder="Province / State" className={s.input} />
          <Input placeholder="Street / Address Details" className={s.input} />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>UID Code</span>
          <Input
            placeholder="Please enter your invitation code"
            className={s.input}
          />
        </div>
        <Button onClick={onChangeStep} className={s.nextBtn}>
          next
        </Button>
      </form>
    </div>
  );
};
