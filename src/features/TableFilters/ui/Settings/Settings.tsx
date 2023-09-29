import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { Selector } from "shared/ui";
import { Button } from "shared/ui";
import { CancelIcon } from "shared/ui";

export const Settings = () => {
  return (
    <div className={s.settingsSection}>
      <div className={s.top}>
        <span className={s.title}>Settings</span>
        <div className={s.selectors}>
          <Selector
            name="responseTime"
            placeholder="Response Time"
            options={countryList}
          />
          <Selector
            name="responseTime"
            placeholder="Response Time"
            options={countryList}
          />
          <Selector
            name="liquidityVolume"
            placeholder="Liquidity Volume"
            options={countryList}
          />
        </div>
      </div>

      <div className={s.bottom}>
        <div className={s.mainBtns}>
          <Button onClick={() => {}}>apply</Button>
          <Button onClick={() => {}} variant="additional">
            reset
          </Button>
        </div>
        <Button onClick={() => {}} variant="clear" className={s.cancelBtn}>
          <CancelIcon />
          Cancel
        </Button>
      </div>
    </div>
  );
};
