import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";

export const CustomerService = () => {
  return (
    <div className={s.section}>
      <span className={s.title}>Customer service</span>
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
          <Checkbox id="center" />
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
    </div>
  );
};
