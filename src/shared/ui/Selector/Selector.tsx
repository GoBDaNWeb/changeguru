import { FC, useMemo } from "react";

import Select from "react-select";
import { WindowedMenuList } from "react-windowed-select";
import { FixedSizeList as List } from "react-window";
import { FieldErrors } from "react-hook-form";
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
  errors?: FieldErrors;
}

const MenuList = (props: any) => {
  const { options, children, maxHeight, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 40;

  return (
    //@ts-ignore
    <List
      style={{ zIndex: "100" }}
      height={maxHeight}
      itemCount={children.length}
      itemSize={40}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

export const Selector: FC<ISelectProps> = ({
  options,
  placeholder,
  className,
  name,
  defaultValue,
  value,
  onChange,
  errors,
}) => {
  const selectClass = `select ${className ? className : ""} ${
    errors && errors[name] ? "error" : ""
  }`;
  return (
    <Select
      components={{ MenuList }}
      isClearable={false}
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
