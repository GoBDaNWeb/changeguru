import { exchangeList } from "../../config";

import s from "./styles.module.sass";

import { OutlineHeartIcon, SortingIcon, Title } from "shared/ui";
import { TableFilters } from "features/TableFilters";

export const ExchangeTable = () => {
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
              <th>
                <SortingIcon /> I will Recieve
              </th>
              <th>
                <SortingIcon /> 24H Volume
              </th>
              <th>
                <SortingIcon /> Total Liqudity
              </th>
              <th>KYC Level</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {exchangeList.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.img} alt="" />
                  {item.title}
                </td>
                <td>{item.have} BTC</td>
                <td>{item.recieve} LTC</td>
                <td>{item.volume} LTC</td>
                <td>{item.totalLiqudity} M $</td>
                <td>{item.kyc}</td>
                <td>{item.ratings}M</td>
                <td>{item.popularity}</td>
                <td>
                  <OutlineHeartIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExchangeTable;
