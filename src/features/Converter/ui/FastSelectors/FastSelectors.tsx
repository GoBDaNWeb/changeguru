import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { coinsApi } from "shared/api";
import { fastSelectors } from "../../config";

import s from "./styles.module.sass";

import { FastSelectorItem } from "../FastSelectorItem/FastSelectorItem";
import { Button } from "shared/ui";
import { useConverterStore } from "features/Converter";

export const FastSelectors = observer(() => {
  const [topCoins, setTopCoins] = useState([]);

  const store = useConverterStore();

  const handleGetTopCoins = async () => {
    const { data } = await coinsApi.getTopCoins();
    setTopCoins(data);
  };

  const handleSetHave = (coin: string) => {
    store.handleSetHave(coin);
  };
  const handleSetWant = (coin: string) => {
    store.handleSetWant(coin);
  };

  useEffect(() => {
    handleGetTopCoins();
  }, []);

  return (
    <div className={s.selectors}>
      <div className={s.top}>
        <span className={s.title}>I Have</span>
        <div className={s.selectorsList}>
          {topCoins.map((coin) => {
            const coinClass = `${s.coinItem} ${
              coin === store.have ? s.active : ""
            }`;

            return (
              <Button
                key={coin}
                className={coinClass}
                onClick={() => handleSetHave(coin)}
                variant="clear"
              >
                {coin}
              </Button>
            );
          })}
          {/* {topCoins.map((coin) => (
            <FastSelectorItem
              key={item.id}
              img={item.img}
              title={item.title}
              reduction={item.reduction}
            />
          ))} */}
        </div>
      </div>
      <div className={s.bottom}>
        <span className={s.title}>I Want</span>
        <div className={s.selectorsList}>
          {topCoins.map((coin) => {
            const coinClass = `${s.coinItem} ${
              coin === store.want ? s.active : ""
            }`;

            return (
              <Button
                key={coin}
                className={coinClass}
                onClick={() => handleSetWant(coin)}
                variant="clear"
              >
                {coin}
              </Button>
            );
          })}
          {/* {topCoins.map((coin) =>  (
            <FastSelectorItem
              key={item.id}
              img={item.img}
              title={item.title}
              reduction={item.reduction}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
});
