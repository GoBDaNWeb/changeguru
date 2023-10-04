import { FC, useMemo } from "react";

import Select from "react-select";
import { WindowedMenuList } from "react-windowed-select";
import { FixedSizeList as List } from "react-window";
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

const MenuList = (props: any) => {
  const { options, children, maxHeight, getValue } = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * 40;

  return (
    //@ts-ignore
    <List
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
  isClearable = true,
}) => {
  const selectClass = `select ${className ? className : ""}`;

  return (
    <Select
      components={{ MenuList }}
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
