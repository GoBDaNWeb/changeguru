import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import s from "./styles.module.sass";

import { Button, FiltersIcon, Input, SearchIcon } from "shared/ui";
import { Filters } from "../Filters/Filters";
import { useDebounce } from "shared/lib";
import { coinsApi } from "shared/api";

export const TableFilters = () => {
  const [allCoins, setAllCoins] = useState<string[]>([]);
  const [searchedCoins, setSearchedCoins] = useState<string[] | null>(null);
  const [filtersIsOpen, setOpenFilter] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      search: "",
    },
  });

  const WatchSearch = watch("search");

  const debounced = useDebounce(WatchSearch);

  const handleGetTopCoins = async () => {
    const response = await coinsApi.getAllCoins();
    setAllCoins(response.data);
  };

  useEffect(() => {
    if (!debounced) {
      setSearchedCoins(null);
      return;
    }

    const search = allCoins.filter((coin) => {
      return coin.toLowerCase().includes(debounced.toLowerCase());
    });
    setSearchedCoins(search);
  }, [debounced]);

  useEffect(() => {
    handleGetTopCoins();
  }, []);

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
        <div className={s.searchWrapper}>
          <Input
            id="search"
            register={register}
            placeholder="search"
            className={s.search}
            icon={<SearchIcon />}
          />
          {searchedCoins ? (
            <div className={s.dropdownWrapper}>
              <div className={s.dropdown}>
                {searchedCoins.map((coin) => (
                  <span key={coin}>{coin}</span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={s.filtersContent}>
        <Filters handleOpen={setOpenFilter} isOpen={filtersIsOpen} />
      </div>
    </div>
  );
};
