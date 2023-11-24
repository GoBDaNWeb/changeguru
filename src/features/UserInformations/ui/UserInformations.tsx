import { countryList, genderList } from "shared/config";

import s from "./styles.module.sass";

import { Button, CalendarIcon, Input, Selector } from "shared/ui";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { userApi } from "shared/api";
import { useUserStore } from "entities/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserInformations = () => {
  const { userData } = useUserStore();
  const notify = () =>
    toast.success("the information has been changed", {
      position: "bottom-right",
    });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      first_name: userData ? userData.first_name : "",
      last_name: userData ? userData.last_name : "",
      country: userData ? userData.country : "",
      email: userData ? userData.email : "",
      phone: userData ? userData.phone : "",
      gender: userData ? userData.gender : "",
      age: userData ? userData.age : "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { first_name, last_name, country, email, phone, gender, age } = data;

    const updateUserData = {
      first_name,
      last_name,
      country: country.value,
      email,
      phone,
      gender: gender.value,
      age,
    };

    if (localStorage.getItem("token")) {
      await userApi.updateUser(updateUserData, localStorage.getItem("token"));
      notify();
    }
  };

  return (
    <div className={s.info}>
      <span className={s.title}>Information</span>
      <form onSubmit={handleSubmit(onSubmit)} className={s.infoForm}>
        <Input
          id="first_name"
          register={register}
          required
          errors={errors}
          placeholder="First name"
        />
        <Input
          id="last_name"
          register={register}
          required
          errors={errors}
          placeholder="Last name"
        />
        <Input
          id="email"
          register={register}
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ru|ua)$/}
          required
          placeholder="E-mail"
          className={s.input}
          errors={errors}
          type="email"
        />

        <Input
          id="phone"
          isPhone
          register={register}
          required
          placeholder="Phone"
          className={s.input}
          errors={errors}
        />
        <Controller
          control={control}
          name="country"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Selector
                options={countryList}
                onChange={onChange}
                placeholder="Country"
                className={s.selector}
                name="country"
                errors={errors}
              />
            );
          }}
        />
        <div className={s.doubleInputs}>
          <Controller
            control={control}
            name="gender"
            rules={{ required: true }}
            render={({ field: { onChange } }) => {
              return (
                <Selector
                  options={genderList}
                  placeholder="Gender"
                  className={s.selector}
                  name="gender"
                  errors={errors}
                  onChange={onChange}
                />
              );
            }}
          />
          <Input
            id="age"
            register={register}
            required
            errors={errors}
            placeholder="DD/MM/YY"
            icon={<CalendarIcon />}
          />
        </div>
        <Button onClick={() => {}} type="submit" className={s.btn}>
          Save changes
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};
