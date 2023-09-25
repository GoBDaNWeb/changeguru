import { countryList, genderList } from "shared/config";

import s from "./styles.module.sass";

import { Button, CalendarIcon, Input, Selector } from "shared/ui";

export const UserInformations = () => {
  return (
    <div className={s.info}>
      <span className={s.title}>Information</span>
      <form className={s.infoForm}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Phone" />
        <Selector options={countryList} placeholder="Country" name="country" />
        <div className={s.doubleInputs}>
          <Selector options={genderList} placeholder="Male" name="male" />
          <Input placeholder="DD/MM/YY" icon={<CalendarIcon />} />
        </div>
        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
