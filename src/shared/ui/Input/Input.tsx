import { FC } from "react";
import s from "./styles.module.sass";

interface IInutProps {
  placeholder: string;
  className?: string;
}

export const Input: FC<IInutProps> = ({ placeholder, className }) => {
  const inputClass = `${s.input} ${className ? className : ""}`;

  return <input type="text" className={inputClass} placeholder={placeholder} />;
};
