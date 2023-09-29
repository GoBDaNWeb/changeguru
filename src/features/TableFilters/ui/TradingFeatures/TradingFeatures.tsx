import { Checkbox } from "shared/ui";
import s from "./styles.module.sass";

export const TradingFeatures = () => {
  return (
    <div className={s.section}>
      <span className={s.title}>Trading features</span>
      <div className={s.checkboxList}>
        <label className={s.label}>
          <Checkbox id="support" />
          <span>Advanced Trading Tools</span>
        </label>
        <label className={s.label}>
          <Checkbox id="stopLossOrders" />
          <span>Stop-Loss Orders</span>
        </label>
        <label className={s.label}>
          <Checkbox id="limitOrders" />
          <span>Limit Orders</span>
        </label>
        <label className={s.label}>
          <Checkbox id="marginTrading" />
          <span>Margin Trading</span>
        </label>
        <label className={s.label}>
          <Checkbox id="marketOrders" />
          <span>Market Orders</span>
        </label>
        <label className={s.label}>
          <Checkbox id="chartingTools" />
          <span>Charting Tools</span>
        </label>
      </div>
    </div>
  );
};
