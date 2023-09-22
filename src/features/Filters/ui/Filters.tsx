import { FiltersIcon, Input } from "shared/ui";
import s from "./styles.module.sass";
export const Filters = () => {
  return (
    <div className={s.filters}>
      <button>
        <FiltersIcon /> <span>Advanced Filters</span>
      </button>
      <Input placeholder="search" className={s.search} />
    </div>
  );
};
