import { Button, CalendarIcon, Input, Selector, TextArea } from "shared/ui";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { UploadPhoto } from "features/UploadPhoto";
import { AddManager } from "features/AddManager";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useExchangeStore } from "entities/Exchange";
import { useEffect } from "react";

export const BasicInfo = () => {
  const { exchangeData } = useExchangeStore();

  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      e_name: "",
      e_website: "",
      e_short_description: "",
      e_long_description: "",
      country: "",
      a_code: "",
      e_email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const { first_name, last_name, country, email, phone, gender, age } = data;
    console.log("data", data);

    // if (phone.replace(/\D/g, "").length < 11) {
    //   setError("phone", {
    //     type: "manual",
    //     message: "erroe message",
    //   });
    //   return;
    // }

    // const updateUserData = {
    //   first_name,
    //   last_name,
    //   country: country.value,
    //   email,
    //   phone: phone.replace(/\D/g, ""),
    //   gender: gender.value,
    //   age,
    // };

    if (localStorage.getItem("token")) {
      // await userApi.updateUser(updateUserData, localStorage.getItem("token"));
      // handleUpdateUser(updateUserData);
      // notify();
    }
  };

  useEffect(() => {
    if (exchangeData) {
      setValue("e_name", exchangeData.e_name);
      setValue("e_website", exchangeData.e_website);
      setValue("country", exchangeData.country);
      setValue("e_short_description", exchangeData.e_short_description);
      setValue("e_long_description", exchangeData.e_long_description);
      setValue("a_code", exchangeData.a_code);
      setValue("e_email", exchangeData.e_email);
    }
  }, [exchangeData, setValue]);

  return (
    <div className={s.info}>
      <span className={s.title}>Basic Information</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.infoForm}>
        <div className={s.mainName}>
          <Input
            required
            id="e_name"
            register={register}
            placeholder="Name of Exchange"
            errors={errors}
          />
          <Input
            required
            id="e_website"
            register={register}
            placeholder="Website"
            errors={errors}
          />
        </div>
        <TextArea
          id="e_short_description"
          register={register}
          placeholder="Short Description"
        />
        <TextArea
          id="e_long_description"
          register={register}
          placeholder="Long Description"
        />
        <div className={s.doubleInputs}>
          <Controller
            control={control}
            name="country"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => {
              return (
                <Selector
                  options={countryList}
                  onChange={onChange}
                  placeholder="Country"
                  className={s.selector}
                  name="country"
                  errors={errors}
                  defaultValue={value}
                  value={value}
                />
              );
            }}
          />

          <Input
            id="date"
            register={register}
            placeholder="Launch Date"
            icon={<CalendarIcon />}
          />
        </div>
        {/* <UploadPhoto label="Upload Logo" /> */}
        <div className={s.managerWrapper}>
          <AddManager className={s.manager} />
        </div>
        <Button type="submit" onClick={() => {}} className={s.btn}>
          Save changes
        </Button>
      </form>
    </div>
  );
};
