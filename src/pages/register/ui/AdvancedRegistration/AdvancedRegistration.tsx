import { Button, Checkbox, Selector } from "shared/ui";
import s from "./styles.module.sass";
import { CheckboxGroup } from "shared/ui/CheckboxGroup";
import { countryList } from "../../config";
import { FC } from "react";

interface IAdvancedRegistrationProps {
  onComplite: () => void;
}

export const AdvancedRegistration: FC<IAdvancedRegistrationProps> = ({
  onComplite,
}) => {
  return (
    <div className={s.advancedRegistration}>
      <form className={s.form}>
        <div className={s.sectionCheckboxGroup}>
          <CheckboxGroup
            id="option1"
            title="We will share real time rates via ChangeGuru API"
            className={s.checkboxGroup}
          />
          <CheckboxGroup
            id="option2"
            title="ChangeGuru can evaluate our registration process"
            className={s.checkboxGroup}
          />
          <CheckboxGroup
            id="option3"
            title="ChangeGuru is allowed to evaluate our trading cycle"
            description="including registration, deposit funds, initiate and complete a trade, withdraw funds, close account"
            className={s.checkboxGroup}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>
            Please Check Below Applicable Functions
          </span>
          <div className={s.checkboxList}>
            <label className={s.label}>
              <Checkbox id="support" />
              <span>24/7 Support</span>
            </label>
            <label className={s.label}>
              <Checkbox id="email" />
              <span>E-Mail</span>
            </label>
            <label className={s.label}>
              <Checkbox id="Center" />
              <span>Call Center</span>
            </label>
            <label className={s.label}>
              <Checkbox id="chat" />
              <span>Live Chat</span>
            </label>
            <label className={s.label}>
              <Checkbox id="whatsapp" />
              <span>Whatsapp</span>
            </label>
          </div>

          <div className={s.inputs}>
            <Selector
              name="name"
              placeholder="Response Time"
              options={countryList}
              className={s.selector}
            />
            <div className={s.withHint}>
              <Selector
                name="name"
                placeholder="KYC Level"
                options={countryList}
                className={s.selector}
              />
              <p className={s.hint}>
                NO KYC Low KYC | Submit ID / Passport Medium KYC | Submit
                scanned ID + scanned Address Proof High KYC | Submit the above +
                Video Ident
              </p>
            </div>

            <Selector
              name="name"
              placeholder="Liquidity Volume"
              options={countryList}
              className={s.selector}
            />
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Trading Features</span>
          <div className={s.checkboxList}>
            <label className={s.label}>
              <Checkbox id="tradingTools" />
              <span>Advanced Trading Tools</span>
            </label>
            <label className={s.label}>
              <Checkbox id="stopLossOrders" />
              <span>Stop-Loss Orders</span>
            </label>
            <label className={s.label}>
              <Checkbox id="limitOrders" />
              <span>Limit Orders</span>
            </label>
            <label className={s.label}>
              <Checkbox id="marginTrading" />
              <span>Margin Trading</span>
            </label>
            <label className={s.label}>
              <Checkbox id="marketOrders" />
              <span>Market Orders</span>
            </label>
            <label className={s.label}>
              <Checkbox id="chartingTools" />
              <span>Charting Tools</span>
            </label>
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Advanced Features </span>
          <div className={s.checkboxList}>
            <label className={s.label}>
              <Checkbox id="support" />
              <span>2FA</span>
            </label>
            <label className={s.label}>
              <Checkbox id="email" />
              <span>AML</span>
            </label>
            <label className={s.label}>
              <Checkbox id="Center" />
              <span>Cold Storage </span>
            </label>
            <label className={s.label}>
              <Checkbox id="chat" />
              <span>Whitelisting</span>
            </label>
            <label className={s.label}>
              <Checkbox id="whatsapp" />
              <span>Mobile App</span>
            </label>
            <label className={s.label}>
              <Checkbox id="whatsapp" />
              <span>API Acces</span>
            </label>
            <label className={s.label}>
              <Checkbox id="whatsapp" />
              <span>Insurance Coverage</span>
            </label>
          </div>
        </div>

        <Button onClick={onComplite} className={s.submitBtn}>
          Submit Form
        </Button>
      </form>
    </div>
  );
};
