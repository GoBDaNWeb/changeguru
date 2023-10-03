import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";

import { ratesApi } from "shared/api";

import s from "./styles.module.sass";

import { OutlineHeartIcon, SortingIcon, Title } from "shared/ui";
import { TableFilters, useTableFiltersStore } from "features/TableFilters";
import { useConverterStore } from "features/Converter";
import { useGetRates } from "../model";

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
  // const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [sortBy, setSort] = useState<
    "default" | "recieve" | "volume" | "liqudity"
  >("default");

  const converterStore = useConverterStore();
  const filtersStore = useTableFiltersStore();

  const { exchanges } = useGetRates({
    from: converterStore.converterInfo.have,
    to: converterStore.converterInfo.want,
  });

  // const handleGetRates = async () => {
  //   const { data } = await ratesApi.getRates({
  //     from: converterStore.converterInfo.have,
  //     to: converterStore.converterInfo.want,
  //   });
  //   setExchanges(data);
  // };

  const filteredExchanges = useMemo(() => {
    return exchanges?.filter((exchange) => {
      // Проверяем, есть ли хотя бы один фильтр, который установлен в true и также есть в features монеты
      return Object.keys(filtersStore.filters).some((filterKey) => {
        return (
          //@ts-ignore
          filtersStore.filters[filterKey] &&
          //@ts-ignore
          exchange.features.includes(filterKey)
        );
      });
    });
  }, [exchanges, filtersStore.filters]);

  const finalExchange =
    filteredExchanges?.length > 0 ? filteredExchanges : exchanges;

  const sortedExchanges = useMemo(() => {
    if (!finalExchange) return [];
    if (sortBy === "default") {
      return finalExchange;
    } else if (sortBy === "recieve") {
      return finalExchange.sort((a, b) => b.info.price - a.info.price);
    } else if (sortBy === "volume") {
      return finalExchange.sort((a, b) => b.info.volume - a.info.volume);
    } else if (sortBy === "liqudity") {
      return finalExchange.sort(
        (a: any, b: any) => b.total_liquidity - a.total_liquidity
      );
    }
  }, [finalExchange, sortBy]);

  // useEffect(() => {
  //   handleGetRates();
  // }, [converterStore.converterInfo.have, converterStore.converterInfo.want]);

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
                onClick={() => setSort("recieve")}
              >
                <SortingIcon /> I will Recieve
              </th>
              <th
                className={`${s.sort} ${sortBy === "volume" ? s.active : ""}`}
                onClick={() => setSort("volume")}
              >
                <SortingIcon /> 24H Volume
              </th>
              <th
                className={`${s.sort} ${sortBy === "liqudity" ? s.active : ""}`}
                onClick={() => setSort("liqudity")}
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
                      {converterStore.converterInfo.haveCount} {item.info.from}
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
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ExchangeTable;
