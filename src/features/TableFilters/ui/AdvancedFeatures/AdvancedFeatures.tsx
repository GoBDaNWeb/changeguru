import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";

export const AdvancedFeatures = () => {
  return (
    <div className={s.section}>
      <span className={s.title}>Advanced features</span>
      <div className={s.checkboxList}>
        <label className={s.label}>
          <Checkbox id="2fa" />
          <span>2FA</span>
        </label>
        <label className={s.label}>
          <Checkbox id="aml" />
          <span>AML</span>
        </label>
        <label className={s.label}>
          <Checkbox id="whitelisting" />
          <span>Whitelisting</span>
        </label>
        <label className={s.label}>
          <Checkbox id="mobileApp" />
          <span>Mobile App</span>
        </label>
        <label className={s.label}>
          <Checkbox id="apiAcces" />
          <span>API Acces</span>
        </label>
        <label className={s.label}>
          <Checkbox id="insuranceCoverage" />
          <span>Insurance Coverage</span>
        </label>
      </div>
    </div>
  );
};
