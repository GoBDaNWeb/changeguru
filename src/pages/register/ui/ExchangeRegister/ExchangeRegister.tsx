import { Button, Input, Selector } from "shared/ui";
import s from "./styles.module.sass";
import { countryList } from "../../config";
import { UploadPhoto } from "features/UploadPhoto";
import { FC } from "react";

interface IExchangeRegisterProps {
  onChangeStep: () => void;
}

export const ExchangeRegister: FC<IExchangeRegisterProps> = ({
  onChangeStep,
}) => {
  return (
    <div className={s.exchangeRegister}>
      <form className={s.form}>
        <div className={s.section}>
          <span className={s.sectionTitle}>Basic Information</span>
          <Input placeholder="Name of Exchange" />
          <Input placeholder="Web Site" />
          <UploadPhoto label="Upload Logo" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Personal data</span>
          <div className={s.withHint}>
            <Input placeholder="Password" />
            <p className={s.hint}>
              8 or more characters, including numbers and special characters
            </p>
          </div>
          <Input placeholder="Repeat password" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Contact Person</span>
          <div className={s.withHint}>
            <Input placeholder="Email" />
            <p className={s.hint}>Excluding special characters</p>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Business E-Mail</span>
          <div className={s.withHint}>
            <Input placeholder="Enter Email" />
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
          <Input placeholder="Province / State" />
          <Input placeholder="Street / Address Details" />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>UID Code</span>
          <Input placeholder="Please enter your invitation code" />
        </div>
        <Button onClick={onChangeStep} className={s.nextBtn}>
          next
        </Button>
      </form>
    </div>
  );
};
