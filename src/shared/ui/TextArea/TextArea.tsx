import { FC } from "react";
import s from "./styles.module.sass";

interface ITextAreaProps {
  placeholder: string;
}

export const TextArea: FC<ITextAreaProps> = ({ placeholder }) => {
  return <textarea className={s.textarea} placeholder={placeholder}></textarea>;
};
