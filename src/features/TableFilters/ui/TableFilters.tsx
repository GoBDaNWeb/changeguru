import s from "./styles.module.sass";

import { FiltersIcon, Input, SearchIcon } from "shared/ui";

export const TableFilters = () => {
  return (
    <div className={s.filters}>
      <button>
        <FiltersIcon /> <span>Advanced Filters</span>
      </button>
      <Input placeholder="search" className={s.search} icon={<SearchIcon />} />
    </div>
  );
};
