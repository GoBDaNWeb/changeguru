import { Button, Input, Selector } from "shared/ui";
import { converterData } from "../../config";
import s from "./styles.module.sass";

export const ConverterFields = () => {
  return (
    <div className={s.fields}>
      <Selector options={converterData} placeholder="I Have" name="have" />
      <Selector options={converterData} placeholder="I Want" name="want" />
      <Input placeholder="Quality" className={s.quality} />
      <Button onClick={() => {}} className={s.updateBtn}>
        Update
      </Button>
    </div>
  );
};
