import { Button, Input } from "shared/ui";
import s from "./styles.module.sass";

export const ContactDetials = () => {
  return (
    <div className={s.details}>
      <span className={s.title}>Contact Detials</span>
      <form className={s.detailsForm}>
        <Input placeholder="Phone number" className={s.phoneInput} />
        <div className={s.detailsList}>
          <Input placeholder="Whatsapp" />
          <Input placeholder="Telegram" />
          <Input placeholder="Twitter" />
          <Input placeholder="Discord" />
          <Input placeholder="Instagram" />
          <Input placeholder="Facebook" />
          <Input placeholder="Reddit" />
        </div>

        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
