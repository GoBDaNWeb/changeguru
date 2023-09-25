import { useRef } from "react";

import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input } from "shared/ui";

export const ChangePassword = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.changePassword}>
      <span className={s.title}>Change Password</span>
      <form className={s.form}>
        <Input
          placeholder="Old Passworld"
          type="password"
          ref={passwordRef}
          icon={
            <Button
              onClick={() => changePasswordType(passwordRef)}
              variant="clear"
            >
              <EyeIcon />
            </Button>
          }
        />
        <Input
          placeholder="New Passworld"
          type="password"
          ref={newPasswordRef}
          icon={
            <Button
              onClick={() => changePasswordType(newPasswordRef)}
              variant="clear"
            >
              <EyeIcon />
            </Button>
          }
        />
        <Input
          placeholder="Confirm Passworld"
          type="password"
          ref={confirmPasswordRef}
          icon={
            <Button
              onClick={() => changePasswordType(confirmPasswordRef)}
              variant="clear"
            >
              <EyeIcon />
            </Button>
          }
        />
        <Button onClick={() => {}} className={s.btn}>
          Change Passworld
        </Button>
      </form>
    </div>
  );
};
