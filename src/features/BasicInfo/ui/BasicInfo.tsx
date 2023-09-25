import { Button, Input, Selector, TextArea } from "shared/ui";
import s from "./styles.module.sass";
import { countryList, genderList } from "shared/config";
import { UploadPhoto } from "features/UploadPhoto";

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
          <Input placeholder="Launch Date" />
        </div>
        <UploadPhoto label="Upload Logo" />
        <Button onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
