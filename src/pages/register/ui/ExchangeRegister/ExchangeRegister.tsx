import { FC, useRef } from "react";

import { countryList } from "shared/config";
import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input, Selector } from "shared/ui";
import { UploadPhoto } from "features/UploadPhoto";
import { FieldValues, useForm } from "react-hook-form";

interface IExchangeRegisterProps {
  onChangeStep: () => void;
}

export const ExchangeRegister: FC<IExchangeRegisterProps> = ({
  onChangeStep,
}) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      website: "",
      password: "",
      repeatPassword: "",
      email: "",
      enterEmail: "",
      code: "",
      city: "",
      state: "",
      address: "",
      inviteCode: "",
    },
  });

  return (
    <div className={s.exchangeRegister}>
      <form className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input
            id="name"
            register={register}
            placeholder="Name of Exchange"
            className={s.input}
          />
          <Input
            id="website"
            register={register}
            placeholder="Web Site"
            className={s.input}
          />
          <UploadPhoto label="Upload Logo" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input
              id="password"
              register={register}
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
            id="repeatPassword"
            register={register}
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
            <Input
              id="email"
              register={register}
              placeholder="Email"
              type="email"
              className={s.input}
            />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Business E-Mail</span>
          <div className={s.withHint}>
            <Input
              id="enterEmail"
              register={register}
              placeholder="Enter Email"
              type="email"
              className={s.input}
            />
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
            <Input id="code" register={register} placeholder="Area Code" />
            <Input id="city" register={register} placeholder="City" />
          </div>
          <Input
            id="state"
            register={register}
            placeholder="Province / State"
            className={s.input}
          />
          <Input
            id="address"
            register={register}
            placeholder="Street / Address Details"
            className={s.input}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>UID Code</span>
          <Input
            id="inviteCode"
            register={register}
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
