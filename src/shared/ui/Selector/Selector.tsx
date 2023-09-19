import { FC } from "react";
import Select from "react-select";

type Option = {
  label: string;
  value: string;
};

interface ISelectProps {
  options: Option[];
  placeholder: string;
}

export const Selector: FC<ISelectProps> = ({ options, placeholder }) => {
  return (
    <Select
      isClearable
      placeholder={placeholder}
      name="colors"
      options={options}
      className="select"
      classNamePrefix="select"
    />
  );
};
