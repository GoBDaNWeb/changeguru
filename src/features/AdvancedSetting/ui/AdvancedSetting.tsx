import { FC } from "react";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { Button, Checkbox, CheckboxGroup, Selector } from "shared/ui";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRegisterExchangeStore } from "features/RegisterExchange";
import { exchangeApi } from "shared/api";

interface IAdvancedSettingProps {
  onComplite: () => void;
}

export const AdvancedSetting: FC<IAdvancedSettingProps> = ({ onComplite }) => {
  const store = useRegisterExchangeStore();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      real_rates: false,
      evaluate_reg: false,
      evaluate_tc: false,
      support_247: false,
      support_email: false,
      support_call: false,
      support_livechat: false,
      support_whatsapp: false,
      support_resptime: "2h",
      kyc_level: "medium",
      liquidity_volume: "100000000",
      tf_advancedtt: false,
      tf_stoploss: false,
      tf_limitorders: false,
      tf_margin: false,
      tf_marketorders: false,
      tf_charting: false,
      af_2fa: false,
      af_aml: false,
      af_coldstorage: false,
      af_whitelisting: false,
      af_mobileapp: false,
      af_api: false,
      af_insurance: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const {
        e_name,
        e_website,
        e_email,
        password,
        password_repeat,
        e_contact_mail,
        country,
        a_code,
        a_city,
        a_province,
        a_street,
        UID,
      } = store.exchangeData;
      const exchangeData = {
        e_name,
        e_website,
        e_email,
        password,
        password_repeat,
        e_contact_mail,
        //@ts-ignore
        country: country.value,
        a_code,
        a_city,
        a_province,
        a_street,
        UID,
        e_data: data,
      };

      const resData = await exchangeApi.registerNewExchange(exchangeData);
      if (resData.code === 200 && resData.status) {
        onComplite();
      }
    } catch (e) {
      console.error("register error", e);
    }
  };

  return (
    <div className={s.advancedSetting}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.sectionCheckboxGroup}>
          <Controller
            control={control}
            name="real_rates"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="real_rates"
                title="We will share real time rates via ChangeGuru API"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="evaluate_reg"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="evaluate_reg"
                title="ChangeGuru can evaluate our registration process"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="evaluate_tc"
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                id="evaluate_tc"
                title="ChangeGuru is allowed to evaluate our trading cycle"
                description="including registration, deposit funds, initiate and complete a trade, withdraw funds, close account"
                className={s.checkboxGroup}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>
            Please Check Below Applicable Functions
          </span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="support_247"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_247"
                    onChange={onChange}
                    value={value}
                  />
                  <span>24/7 Support</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_email"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_email"
                    onChange={onChange}
                    value={value}
                  />
                  <span>E-Mail</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_call"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_call"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Call Center</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_livechat"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_livechat"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Live Chat</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="support_whatsapp"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="support_whatsapp"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Whatsapp</span>
                </label>
              )}
            />
          </div>

          <div className={s.inputs}>
            <Selector
              name="name"
              placeholder="Response Time"
              options={countryList}
              className={s.selector}
            />
            <div className={s.withHint}>
              <Selector
                name="name"
                placeholder="KYC Level"
                options={countryList}
                className={s.selector}
              />
              <p className={s.hint}>
                NO KYC Low KYC | Submit ID / Passport Medium KYC | Submit
                scanned ID + scanned Address Proof High KYC | Submit the above +
                Video Ident
              </p>
            </div>

            <Selector
              name="name"
              placeholder="Liquidity Volume"
              options={countryList}
              className={s.selector}
            />
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Trading Features</span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="tf_advancedtt"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_advancedtt"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Advanced Trading Tools</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_stoploss"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_stoploss"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Stop-Loss Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_limitorders"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_limitorders"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Limit Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_margin"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="tf_margin" onChange={onChange} value={value} />
                  <span>Margin Trading</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_marketorders"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_marketorders"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Market Orders</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="tf_charting"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="tf_charting"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Charting Tools</span>
                </label>
              )}
            />
          </div>
        </div>
        <div className={s.section}>
          <span className={s.sectionTitle}>Advanced Features </span>
          <div className={s.checkboxList}>
            <Controller
              control={control}
              name="af_2fa"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_2fa" onChange={onChange} value={value} />
                  <span>2FA</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_aml"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_aml" onChange={onChange} value={value} />
                  <span>AML</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_coldstorage"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_coldstorage"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Cold Storage </span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_whitelisting"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_whitelisting"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Whitelisting</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_mobileapp"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_mobileapp"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Mobile App</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_api"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox id="af_api" onChange={onChange} value={value} />
                  <span>API Acces</span>
                </label>
              )}
            />
            <Controller
              control={control}
              name="af_insurance"
              render={({ field: { onChange, value } }) => (
                <label className={s.label}>
                  <Checkbox
                    id="af_insurance"
                    onChange={onChange}
                    value={value}
                  />
                  <span>Insurance Coverage</span>
                </label>
              )}
            />
          </div>
        </div>

        <Button onClick={() => {}} type="submit" className={s.submitBtn}>
          Submit Form
        </Button>
      </form>
    </div>
  );
};
