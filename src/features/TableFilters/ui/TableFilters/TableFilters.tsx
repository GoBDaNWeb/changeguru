import { useState } from "react";

import s from "./styles.module.sass";

import { Button, FiltersIcon, Input, SearchIcon } from "shared/ui";
import { Filters } from "../Filters/Filters";

export const TableFilters = () => {
  const [filtersIsOpen, setOpenFilter] = useState(false);

  const filterBtnClass = `${s.fiterBtn} ${filtersIsOpen ? s.active : ""}`;

  return (
    <div className={s.tableFilters}>
      <div className={s.top}>
        <Button
          onClick={() => setOpenFilter((prev) => !prev)}
          variant="clear"
          className={filterBtnClass}
        >
          <FiltersIcon />
          <span>Advanced Filters</span>
        </Button>
        <Input
          placeholder="search"
          className={s.search}
          icon={<SearchIcon />}
        />
      </div>
      <div className={s.filtersContent}>
        <Filters isOpen={filtersIsOpen} />
      </div>
    </div>
  );
};
