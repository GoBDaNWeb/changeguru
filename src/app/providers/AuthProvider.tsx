import { useExchangeStore } from "entities/Exchange";
import { useUserStore } from "entities/User";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { exchangeApi, userApi } from "shared/api";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { handleSetUserData } = useUserStore();
  const { handleSetExchangeData } = useExchangeStore();

  const getUser = async () => {
    const { data } = await userApi.getUser(localStorage.getItem("token"));
    const userData = {
      email: data.result.user.email,
      first_name: data.result.user.first_name,
      last_name: data.result.user.last_name,
      country: data.result.user.country,
      phone: data.result.user.phone,
      gender: data.result.user.gender,
      age: data.result.user.age,
    };
    handleSetUserData(userData);
  };
  const getExchange = async () => {
    const { data } = await exchangeApi.getExchange(
      localStorage.getItem("token")
    );
    console.log("data2w", data);

    const exchangeData = {
      e_name: data.result.user.e_name,
      e_website: data.result.user.e_website,
      e_email: data.result.user.e_email,
      e_contact_mail: data.result.user.e_contact_mail,
      country: data.result.user.country,
      a_code: data.result.user.a_code,
      a_city: data.result.user.a_city,
      a_province: data.result.user.a_province,
      a_street: data.result.user.a_street,
      UID: data.result.user.UID,
      e_data: {
        real_rates: data.result.user.e_data.real_rates,
        evaluate_reg: data.result.user.e_data.evaluate_reg,
        evaluate_tc: data.result.user.e_data.evaluate_tc,
        support_247: data.result.user.e_data.support_247,
        support_email: data.result.user.e_data.support_email,
        support_call: data.result.user.e_data.support_call,
        support_livechat: data.result.user.e_data.support_livechat,
        support_whatsapp: data.result.user.e_data.support_whatsapp,
        support_resptime: data.result.user.e_data.support_resptime,
        kyc_level: data.result.user.e_data.kyc_level,
        liquidity_volume: data.result.user.e_data.liquidity_volume,
        tf_advancedtt: data.result.user.e_data.tf_advancedtt,
        tf_stoploss: data.result.user.e_data.tf_stoploss,
        tf_limitorders: data.result.user.e_data.tf_limitorders,
        tf_margin: data.result.user.e_data.tf_margin,
        tf_marketorders: data.result.user.e_data.tf_marketorders,
        tf_charting: data.result.user.e_data.tf_charting,
        af_2fa: data.result.user.e_data.af_2fa,
        af_aml: data.result.user.e_data.af_aml,
        af_coldstorage: data.result.user.e_data.af_coldstorage,
        af_whitelisting: data.result.user.e_data.af_whitelisting,
        af_mobileapp: data.result.user.e_data.af_mobileapp,
        af_api: data.result.user.e_data.af_api,
        af_insurance: data.result.user.e_data.af_insurance,
      },
    };
    handleSetExchangeData(exchangeData);
  };

  useEffect(() => {
    if (localStorage.getItem("token") && location.pathname === "/register") {
      navigate("/");
    }

    if (
      !localStorage.getItem("token") &&
      location.pathname === "/user-profile"
    ) {
      navigate("/");
    }
    if (
      !localStorage.getItem("token") &&
      location.pathname === "/exchange-profile"
    ) {
      navigate("/");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("authType") === "user") {
        getUser();
      } else {
        getExchange();
      }
    }
  }, []);
  return <>{children}</>;
};

export default AuthProvider;
