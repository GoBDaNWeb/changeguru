import { FC } from "react";

import s from "./styles.module.sass";

interface IFastSelectorItemProps {
  img: string;
  title: string;
  reduction: string;
}

export const FastSelectorItem: FC<IFastSelectorItemProps> = ({
  img,
  title,
  reduction,
}) => {
  return (
    <div className={s.fastSelectorItem}>
      <img src={img} alt={reduction} />
      <p>{title}</p>
      <div className={s.separator} />
      <span>{reduction}</span>
    </div>
  );
};
