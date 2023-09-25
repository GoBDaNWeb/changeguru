import { FC, ForwardedRef, ReactNode, forwardRef } from "react";
import s from "./styles.module.sass";

interface IInutProps {
  placeholder: string;
  className?: string;
  type?: string;
  icon?: ReactNode;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const Input: FC<IInutProps> = forwardRef(
  // ({ placeholder, className, type = "text", icon, ref }) => {
  (props, ref) => {
    const { className, type, placeholder, icon } = props;
    const inputClassWrapper = `${s.inputWrapper} ${className ? className : ""}`;

    return (
      <label className={inputClassWrapper}>
        <input
          ref={ref}
          type={type}
          className={s.input}
          placeholder={placeholder}
        />
        <div className={s.icon}>{icon ? icon : null}</div>
      </label>
    );
  }
);
