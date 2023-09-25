import { Button, CalendarIcon, Input, Selector, TextArea } from "shared/ui";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { AddManager } from "features/AddManager";

export const BasicInfo = () => {
  return (
    <div className={s.info}>
      <span className={s.title}>Basic Information</span>
      <form className={s.infoForm}>
        <div className={s.mainName}>
          <Input placeholder="Name of Exchange" />
          <Input placeholder="Website" />
        </div>
        <TextArea placeholder="Short Description" />
        <TextArea placeholder="Long Description" />
        <div className={s.doubleInputs}>
          <Selector
            options={countryList}
            placeholder="Country"
            name="country"
          />
          <Input placeholder="Launch Date" icon={<CalendarIcon />} />
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
