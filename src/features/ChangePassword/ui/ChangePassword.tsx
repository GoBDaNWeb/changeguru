import { useRef } from "react";

import { changePasswordType } from "shared/lib";

import s from "./styles.module.sass";

import { Button, EyeIcon, Input } from "shared/ui";
import { FieldValues, useForm } from "react-hook-form";

export const ChangePassword = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <div className={s.changePassword}>
      <span className={s.title}>Change Password</span>
      <form className={s.form}>
        <Input
          id="old-password"
          register={register}
          placeholder="Old Passworld"
          type="password"
          // ref={passwordRef}
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
          id="new-password"
          register={register}
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
          id="confirm-password"
          register={register}
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
