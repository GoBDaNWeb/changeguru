import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { CustomerService } from "../CustomerService/CustomerService";
import { TradingFeatures } from "../TradingFeatures/TradingFeatures";
import { AdvancedFeatures } from "../AdvancedFeatures/AdvancedFeatures";
import { Settings } from "../Settings/Settings";
import { useTableFiltersStore } from "features/TableFilters";
import { useExchangeStore } from "entities/Exchange";

interface IFiltersProps {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

export const Filters: FC<IFiltersProps> = observer(({ isOpen, handleOpen }) => {
  const store = useTableFiltersStore();
  const { exchangeData } = useExchangeStore();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
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
      support_resptime: "",
      kyc_level: "",
      liquidity_volume: "",
    },
  });

  useEffect(() => {
    if (exchangeData) {
      setValue("support_resptime", {
        value: exchangeData.e_data.support_resptime,
        label: exchangeData.e_data.support_resptime,
      });
      setValue("kyc_level", {
        value: exchangeData.e_data.kyc_level,
        label: exchangeData.e_data.kyc_level,
      });
      setValue("liquidity_volume", {
        value: exchangeData.e_data.liquidity_volume,
        label: exchangeData.e_data.liquidity_volume,
      });
    }
  }, [exchangeData, setValue]);

  const onSubmit = (data: any) => {
    console.log("data", data);

    // store.handleChangeFilters(data);
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
        <Settings
          handleOpen={handleOpen}
          reset={handleReset}
          control={control}
        />
      </div>
    </form>
  );
});
