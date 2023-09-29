import { FC } from "react";

import s from "./styles.module.sass";

import { CustomerService } from "../CustomerService/CustomerService";
import { TradingFeatures } from "../TradingFeatures/TradingFeatures";
import { AdvancedFeatures } from "../AdvancedFeatures/AdvancedFeatures";
import { Settings } from "../Settings/Settings";

interface IFiltersProps {
  isOpen: boolean;
}

export const Filters: FC<IFiltersProps> = ({ isOpen }) => {
  const filtersClass = `${s.filters} ${isOpen ? s.active : ""}`;

  return (
    <div className={filtersClass}>
      <div className={s.leftPart}>
        <CustomerService />
        <TradingFeatures />
        <AdvancedFeatures />
      </div>
      <div className={s.separator} />
      <div className={s.rightPart}>
        <Settings />
      </div>
    </div>
  );
};
