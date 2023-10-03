import {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import s from "./styles.module.sass";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IInutProps {
  id: string;
  required?: boolean;
  placeholder: string;
  className?: string;
  type?: string;
  icon?: ReactNode;
  ref?: ForwardedRef<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  onChange?: () => void;
  value?: string;
}

export const Input: FC<IInutProps> = forwardRef((props, ref) => {
  const {
    className,
    type,
    placeholder,
    icon,
    register,
    id,
    required,
    errors,
    value,
  } = props;

  const inputClassWrapper = `${s.inputLabelWrapper} ${
    className ? className : ""
  } ${errors && errors[id] ? s.error : ""}`;

  return (
    <label className={inputClassWrapper}>
      <input
        type={type}
        {...register(id, { required })}
        className={s.input}
        placeholder={placeholder}
        value={value}
      />
      <div className={s.icon}>{icon ? icon : null}</div>
    </label>
  );
});
