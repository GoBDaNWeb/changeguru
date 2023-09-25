import { Button, Input } from "shared/ui";
import s from "./styles.module.sass";

export const ChangePassword = () => {
  return (
    <div className={s.changePassword}>
      <span className={s.title}>Change Password</span>
      <form className={s.form}>
        <Input placeholder="Old Passworld" />
        <Input placeholder="New Passworld" />
        <Input placeholder="Confirm Passworld" />
        <Button onClick={() => {}} className={s.btn}>
          Change Passworld
        </Button>
      </form>
    </div>
  );
};
