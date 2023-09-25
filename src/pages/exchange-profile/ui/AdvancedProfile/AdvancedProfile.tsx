import { AdvancedSetting } from "features/AdvancedSetting";
import s from "./styles.module.sass";

export const AdvancedProfile = () => {
  return (
    <div className={s.advancedProfile}>
      <span className={s.title}>Advanced Profile</span>
      <AdvancedSetting onSubmit={() => {}} />
    </div>
  );
};
