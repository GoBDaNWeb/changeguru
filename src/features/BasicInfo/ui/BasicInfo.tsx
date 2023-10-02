import { Button, CalendarIcon, Input, Selector, TextArea } from "shared/ui";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { AddManager } from "features/AddManager";
import { FieldValues, useForm } from "react-hook-form";

export const BasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      website: "",
      date: "",
    },
  });

  return (
    <div className={s.info}>
      <span className={s.title}>Basic Information</span>
      <form className={s.infoForm}>
        <div className={s.mainName}>
          <Input id="name" register={register} placeholder="Name of Exchange" />
          <Input id="website" register={register} placeholder="Website" />
        </div>
        <TextArea placeholder="Short Description" />
        <TextArea placeholder="Long Description" />
        <div className={s.doubleInputs}>
          <Selector
            options={countryList}
            placeholder="Country"
            name="country"
          />
          <Input
            id="date"
            register={register}
            placeholder="Launch Date"
            icon={<CalendarIcon />}
          />
        </div>
        <UploadPhoto label="Upload Logo" />
        <div className={s.managerWrapper}>
          <AddManager className={s.manager} />
        </div>
        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
