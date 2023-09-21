import { FC } from "react";
import s from "./styles.module.sass";

interface IChecboxProps {
  id: string;
}

export const Checkbox: FC<IChecboxProps> = ({ id }) => {
  return <input id={id} name={id} type="checkbox" className={s.input} />;
};
