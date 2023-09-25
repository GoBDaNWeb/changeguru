import { Button, Input, Selector } from "shared/ui";
import s from "./styles.module.sass";
import { countryList, genderList } from "../config";
export const UserInformations = () => {
  return (
    <div className={s.info}>
      <span className={s.title}>Information</span>
      <form className={s.infoForm}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="E-mail" />
        <Input placeholder="Phone" />
        <Selector options={countryList} placeholder="Country" name="country" />
        <div className={s.doubleInputs}>
          <Selector options={genderList} placeholder="Male" name="male" />
          <Input placeholder="DD/MM/YY" />
        </div>
        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
