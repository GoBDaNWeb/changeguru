import { FieldValues, useForm } from "react-hook-form";
import s from "./styles.module.sass";

import { Button, Input } from "shared/ui";

export const ContactDetials = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
      whatsapp: "",
      telegram: "",
      twitter: "",
      discord: "",
      instagram: "",
      facebook: "",
      reddit: "",
    },
  });

  return (
    <div className={s.details}>
      <span className={s.title}>Contact Detials</span>
      <form className={s.detailsForm}>
        <Input
          id="phone"
          register={register}
          placeholder="Phone number"
          className={s.phoneInput}
        />
        <div className={s.detailsList}>
          <Input id="whatsapp" register={register} placeholder="Whatsapp" />
          <Input id="telegram" register={register} placeholder="Telegram" />
          <Input id="twitter" register={register} placeholder="Twitter" />
          <Input id="discord" register={register} placeholder="Discord" />
          <Input id="instagram" register={register} placeholder="Instagram" />
          <Input id="facebook" register={register} placeholder="Facebook" />
          <Input id="reddit" register={register} placeholder="Reddit" />
        </div>

        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
