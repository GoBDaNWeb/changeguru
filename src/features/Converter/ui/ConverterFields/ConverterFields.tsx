import { Button, Input, Selector } from "@/shared/ui";
import { converterData } from "../../config";
import s from "./styles.module.sass";

export const ConverterFields = () => {
  return (
    <div className={s.fields}>
      <Selector options={converterData} placeholder="I Have" />
      <Selector options={converterData} placeholder="I Want" />
      <Input placeholder="Quality" />
      <Button onClick={() => {}} className={s.updateBtn}>
        Update
      </Button>
    </div>
  );
};
