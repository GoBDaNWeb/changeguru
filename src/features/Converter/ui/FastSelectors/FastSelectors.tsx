import { fastSelectors } from "../../config";

import s from "./styles.module.sass";

import { FastSelectorItem } from "../FastSelectorItem/FastSelectorItem";

export const FastSelectors = () => {
  return (
    <div className={s.selectors}>
      <div className={s.top}>
        <span className={s.title}>I Have</span>
        <div className={s.selectorsList}>
          {fastSelectors.map((item) => (
            <FastSelectorItem
              key={item.id}
              img={item.img}
              title={item.title}
              reduction={item.reduction}
            />
          ))}
        </div>
      </div>
      <div className={s.bottom}>
        <span className={s.title}>I Want</span>
        <div className={s.selectorsList}>
          {fastSelectors.map((item) => (
            <FastSelectorItem
              key={item.id}
              img={item.img}
              title={item.title}
              reduction={item.reduction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
