import { FC } from "react";

import s from "./styles.module.sass";

import { Checkbox } from "..";

interface ICheckboxGroupProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
}

export const CheckboxGroup: FC<ICheckboxGroupProps> = ({
  id,
  title,
  description,
  className,
}) => {
  return (
    <div className={`${s.checkboxGroup} ${className}`}>
      <Checkbox id={id} />
      <label htmlFor={id}>
        <span>{title}</span>
        {description ? <p>{description}</p> : null}
      </label>
    </div>
  );
};
