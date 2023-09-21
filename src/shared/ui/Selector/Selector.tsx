import { FC } from "react";
import Select from "react-select";

type Option = {
  label: string;
  value: string;
};

interface ISelectProps {
  options: Option[];
  placeholder: string;
  className?: string;
  name: string;
}

export const Selector: FC<ISelectProps> = ({
  options,
  placeholder,
  className,
  name,
}) => {
  const selectClass = `select ${className ? className : ""}`;

  return (
    <Select
      isClearable
      placeholder={placeholder}
      name={name}
      options={options}
      className={selectClass}
      classNamePrefix="select"
    />
  );
};
