import { countryList, genderList } from "shared/config";

import s from "./styles.module.sass";

import { Button, CalendarIcon, Input, Selector } from "shared/ui";
import { FieldValues, useForm } from "react-hook-form";

export const UserInformations = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
    },
  });

  return (
    <div className={s.info}>
      <span className={s.title}>Information</span>
      <form className={s.infoForm}>
        <Input id="firstName" register={register} placeholder="First name" />
        <Input id="lastName" register={register} placeholder="Last name" />
        <Input
          id="email"
          register={register}
          placeholder="E-mail"
          type="email"
        />
        <Input id="phone" register={register} placeholder="Phone" />
        <Selector options={countryList} placeholder="Country" name="country" />
        <div className={s.doubleInputs}>
          <Selector options={genderList} placeholder="Male" name="male" />
          <Input
            id="date"
            register={register}
            placeholder="DD/MM/YY"
            icon={<CalendarIcon />}
          />
        </div>
        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
