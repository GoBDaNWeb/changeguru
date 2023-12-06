import { FC } from "react";

import s from "./styles.module.sass";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ITextAreaProps {
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  id: string;
}

export const TextArea: FC<ITextAreaProps> = ({ placeholder, register, id }) => {
  return (
    <textarea
      {...register(id)}
      className={s.textarea}
      placeholder={placeholder}
    ></textarea>
  );
};
