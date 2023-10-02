import { FC, ForwardedRef, ReactNode, forwardRef } from "react";

import s from "./styles.module.sass";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IInutProps {
  id: string;
  required?: boolean;
  placeholder: string;
  className?: string;
  type?: string;
  icon?: ReactNode;
  ref?: ForwardedRef<HTMLInputElement>;
  register: UseFormRegister<FieldValues>;
  dropdown?: string[];
}

export const Input: FC<IInutProps> = forwardRef((props, ref) => {
  const {
    className,
    type,
    placeholder,
    icon,
    dropdown,
    register,
    id,
    required,
  } = props;
  const inputClassWrapper = `${s.inputLabelWrapper} ${
    className ? className : ""
  }`;

  return (
    <label className={inputClassWrapper}>
      <input
        // ref={ref}
        type={type}
        {...register(id, { required })}
        className={s.input}
        placeholder={placeholder}
      />
      <div className={s.icon}>{icon ? icon : null}</div>
    </label>
    // <div className={s.inputWrapper}>

    //   {dropdown ? (
    //     <div className={s.dropdown}>
    //       {dropdown.map((dropdownItem) => (
    //         <span key={dropdownItem}>{dropdownItem}</span>
    //       ))}
    //     </div>
    //   ) : null}
    // </div>
  );
});
