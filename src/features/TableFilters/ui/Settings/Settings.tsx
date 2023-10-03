import { Dispatch, FC, SetStateAction } from "react";

import { countryList } from "shared/config";

import s from "./styles.module.sass";

import { Selector, Button, CancelIcon } from "shared/ui";

interface ISettingsProps {
  handleOpen: Dispatch<SetStateAction<boolean>>;
  reset: () => void;
}

export const Settings: FC<ISettingsProps> = ({ handleOpen, reset }) => {
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
          <Button onClick={() => {}} type="submit">
            apply
          </Button>
          <Button onClick={reset} variant="additional">
            reset
          </Button>
        </div>
        <Button
          onClick={() => handleOpen(false)}
          variant="clear"
          className={s.cancelBtn}
        >
          <CancelIcon />
          Cancel
        </Button>
      </div>
    </div>
  );
};
