import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import s from "./styles.module.sass";

import { OutlineHeartIcon, SortingIcon, Title } from "shared/ui";
import { TableFilters, useTableFiltersStore } from "features/TableFilters";
import { useConverterStore } from "features/Converter";
import { useGetRates } from "../model";
import { PulseLoader } from "react-spinners";

export interface Exchange {
  name: string;
  url: string;
  logo: string;
  total_liquidity: string;
  kyc: "High" | "Medium" | "Low";
  ratings: "AAA" | "B" | "C" | "-";
  popularity: string;
  features: ExchangeFeatures[];
  info: Info;
}

export type ExchangeFeatures = {
  [x: string]: boolean;
};

type Info = {
  from: string;
  to: string;
  price: number;
  volume: number;
};

export const ExchangeTable = observer(() => {
  const [sortBy, setSortBy] = useState<
    "default" | "recieve" | "volume" | "liqudity"
  >("default");
  const [sortType, setSortType] = useState<"asc" | "desc">("desc");
  const [prevSort, setPrevSort] = useState<
    "default" | "recieve" | "volume" | "liqudity"
  >("default");

  const converterStore = useConverterStore();
  const filtersStore = useTableFiltersStore();

  const { exchanges, isLoading } = useGetRates({
    from: converterStore.converterInfo.have,
    to: converterStore.converterInfo.want,
  });

  const filteredExchanges = useMemo(() => {
    return exchanges?.filter((exchange) => {
      return Object.keys(filtersStore.filters).some((filterKey) => {
        return (
          filtersStore.filters[filterKey] &&
          //@ts-ignore
          exchange.features.includes(filterKey)
        );
      });
    });
  }, [exchanges, filtersStore.filters]);

  // useEffect(() => {
  //   setSortType("desc");
  // }, [sortBy]);

  const finalExchange =
    filteredExchanges?.length > 0 ? filteredExchanges : exchanges;

  const getSortedExchanges = (
    exchanges: Exchange[],
    sortBy: string,
    sortType: string
  ): Exchange[] => {
    if (!exchanges) return [];

    const sortFunctions: Record<string, () => Exchange[]> = {
      default: () => exchanges,
      recieve: () =>
        sortType === "desc"
          ? exchanges.sort((a, b) => b.info.price - a.info.price)
          : exchanges.sort((a, b) => a.info.price - b.info.price),
      volume: () =>
        sortType === "desc"
          ? exchanges.sort((a, b) => b.info.volume - a.info.volume)
          : exchanges.sort((a, b) => a.info.volume - b.info.volume),
      liqudity: () =>
        exchanges.sort(
          (a: any, b: any) => b.total_liquidity - a.total_liquidity
        ),
    };

    return sortFunctions[sortBy] ? sortFunctions[sortBy]() : [];
  };

  const sortedExchanges = useMemo(() => {
    if (!finalExchange) return [];
    const { search } = filtersStore;
    const filteredExchanges =
      search.length > 0
        ? finalExchange.filter((exchange) =>
            exchange.name.toLowerCase().includes(search.toLowerCase())
          )
        : finalExchange;

    return getSortedExchanges(filteredExchanges, sortBy, sortType);
  }, [filtersStore.search, finalExchange, sortBy, sortType]);

  const handleSort = (sort: "default" | "recieve" | "volume" | "liqudity") => {
    setSortBy(sort);
    if (sort === prevSort) {
      setSortType(sortType === "desc" ? "asc" : "desc");
    } else {
      setSortType("desc");
    }
    setPrevSort(sort);
  };

  return (
    <div className={`${s.exchangeTable} container`}>
      <Title variant="h2">Exchange rates</Title>
      <div className={s.filtersWrapper}>
        <TableFilters />
      </div>
      <div className={s.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>
                <span>#</span> Exchange
              </th>
              <th>I Have</th>
              <th
                className={`${s.sort} ${sortBy === "recieve" ? s.active : ""}`}
                onClick={() => handleSort("recieve")}
              >
                <SortingIcon /> I will Recieve
              </th>
              <th
                className={`${s.sort} ${sortBy === "volume" ? s.active : ""}`}
                onClick={() => handleSort("volume")}
              >
                <SortingIcon /> 24H Volume
              </th>
              <th
                className={`${s.sort} ${sortBy === "liqudity" ? s.active : ""}`}
                onClick={() => handleSort("liqudity")}
              >
                <SortingIcon /> Total Liqudity
              </th>
              <th>KYC Level</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className={s.loader}>
                <PulseLoader
                  color="#21B1AB"
                  loading={isLoading}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </tr>
            ) : (
              <>
                {!sortedExchanges || sortedExchanges.length === 0 ? (
                  <tr className={s.empty}>
                    <td>Exchanges list is empty</td>
                  </tr>
                ) : (
                  <>
                    {sortedExchanges.slice(0, 12).map((item) => (
                      <tr onClick={() => window.open(item.url)} key={item.name}>
                        <td>
                          <img src={item.logo} alt="exchange" />
                          {item.name}
                        </td>
                        <td>
                          {converterStore.converterInfo.haveCount}{" "}
                          {item.info.from}
                        </td>
                        <td>
                          {item.info.price} {item.info.to}
                        </td>
                        <td>
                          {item.info.volume} {item.info.to}
                        </td>
                        <td>{item.total_liquidity} $</td>
                        <td>{item.kyc}</td>
                        <td>{item.ratings}</td>
                        <td>{item.popularity}</td>
                        <td>
                          <OutlineHeartIcon />
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ExchangeTable;
