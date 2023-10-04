import { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { useConverterStore, useGetAllCoins } from "features/Converter";

import s from "./styles.module.sass";

import { Button, Input, Selector } from "shared/ui";

export const ConverterFields = observer(() => {
  const store = useConverterStore();

  const {
    handleSubmit,
    register,
    control,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm<FieldValues>({
    defaultValues: {
      want: "",
      have: "",
      quality: "",
    },
  });

  const WatchHave = watch("have");
  const WatchWant = watch("want");
  const WatchQuality = watch("quality");

  const { allCoins } = useGetAllCoins();

  const options = useMemo(() => {
    return allCoins.map((option) => ({
      value: option.toLowerCase(),
      label: option,
    }));
  }, [allCoins]);

  const onSubmit = (data: any) => {
    const info = {
      have: data.have.label,
      want: data.want.label,
      haveCount: data.quality,
    };
    store.handleSetConverterInfo(info);
  };

  useEffect(() => {
    if (store.have) {
      setValue("have", {
        value: store.have.toLowerCase(),
        label: store.have,
      });
    }
  }, [store.have]);

  useEffect(() => {
    if (store.want) {
      setValue("want", {
        value: store.want.toLowerCase(),
        label: store.want,
      });
    }
  }, [store.want]);

  useEffect(() => {
    if (WatchHave) {
      store.handleSetHave(WatchHave.label);
    }
    clearErrors("have");
  }, [WatchHave]);

  useEffect(() => {
    if (WatchWant) {
      store.handleSetWant(WatchWant.label);
    }
    clearErrors("want");
  }, [WatchWant]);

  useEffect(() => {
    clearErrors("quality");
  }, [WatchQuality]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.fields}>
      <Controller
        control={control}
        name="have"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          const handleChange = (e: any) => {
            if (e) {
              if (e.label === store.want) return;
              onChange(e);
            }
          };
          return (
            <Selector
              options={options}
              onChange={handleChange}
              value={WatchHave}
              placeholder="I Have"
              name="have"
              errors={errors}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="want"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          const handleChange = (e: any) => {
            if (e) {
              if (e.label === store.have) return;
              onChange(e);
            }
          };
          return (
            <Selector
              options={options}
              onChange={handleChange}
              value={WatchWant}
              placeholder="I Want"
              name="want"
              errors={errors}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="quality"
        rules={{ required: true, pattern: /^[0-9.]+$/ }}
        render={({ field: { onChange, value } }) => {
          return (
            <Input
              id="quality"
              errors={errors}
              register={register}
              required
              placeholder="Quality"
              value={value.replace(/[^0-9.]/g, "")}
            />
          );
        }}
      />

      <Button onClick={() => {}} type="submit" className={s.updateBtn}>
        Update
      </Button>
    </form>
  );
});
