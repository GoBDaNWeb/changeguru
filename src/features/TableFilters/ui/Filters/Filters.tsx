import { Dispatch, FC, SetStateAction } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { CustomerService } from "../CustomerService/CustomerService";
import { TradingFeatures } from "../TradingFeatures/TradingFeatures";
import { AdvancedFeatures } from "../AdvancedFeatures/AdvancedFeatures";
import { Settings } from "../Settings/Settings";
import { useTableFiltersStore } from "features/TableFilters";

interface IFiltersProps {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Filters: FC<IFiltersProps> = observer(({ isOpen, handleOpen }) => {
  const store = useTableFiltersStore();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      af_2fa: false,
      af_aml: false,
      af_whitelisting: false,
      af_mobileapp: false,
      af_apiaccess: false,
      af_insurancecoverage: false,
      cs_24support: false,
      cs_email: false,
      cs_callcenter: false,
      cs_livechat: false,
      cs_whatsapp: false,
      tf_advancedtradingtool: false,
      tf_stoplossorders: false,
      tf_limitorders: false,
      tf_margintrading: false,
      tf_marketorders: false,
      tf_chartingtools: false,
    },
  });

  const onSubmit = (data: any) => {
    store.handleChangeFilters(data);
  };

  const handleReset = () => {
    reset();
  };

  const filtersClass = `${s.filters} ${isOpen ? s.active : ""}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={filtersClass}>
      <div className={s.leftPart}>
        <CustomerService control={control} />
        <TradingFeatures control={control} />
        <AdvancedFeatures control={control} />
      </div>
      <div className={s.separator} />
      <div className={s.rightPart}>
        <Settings handleOpen={handleOpen} reset={handleReset} />
      </div>
    </form>
  );
});
