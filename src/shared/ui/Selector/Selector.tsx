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
  defaultValue?: Option;
  value?: any;
  onChange?: any;
  isClearable?: boolean;
}

export const Selector: FC<ISelectProps> = ({
  options,
  placeholder,
  className,
  name,
  defaultValue,
  value,
  onChange,
  isClearable = true,
}) => {
  const selectClass = `select ${className ? className : ""}`;

  return (
    <Select
      isClearable={isClearable}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      options={options}
      className={selectClass}
      classNamePrefix="select"
      value={value}
    />
  );
};
