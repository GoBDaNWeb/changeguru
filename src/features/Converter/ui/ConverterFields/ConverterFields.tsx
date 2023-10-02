import { useEffect, useState } from "react";

import { coinsApi } from "shared/api";
import { converterData } from "../../config";

import s from "./styles.module.sass";

import { Button, Input, Selector } from "shared/ui";
import { FieldValues, useForm } from "react-hook-form";

export const ConverterFields = () => {
  const [topCoins, setTopCoins] = useState([]);

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      quality: "",
    },
  });

  const handleGetTopCoins = async () => {
    const response = await coinsApi.getTopCoins();
    const options = response.data.map((option: any) => {
      return { value: option.toLowerCase(), label: option };
    });
    setTopCoins(options);
  };

  useEffect(() => {
    handleGetTopCoins();
  }, []);

  return (
    <div className={s.fields}>
      <Selector options={topCoins} placeholder="I Have" name="have" />
      <Selector options={topCoins} placeholder="I Want" name="want" />
      <Input id="quality" register={register} placeholder="Quality" />
      <Button onClick={() => {}} className={s.updateBtn}>
        Update
      </Button>
    </div>
  );
};
