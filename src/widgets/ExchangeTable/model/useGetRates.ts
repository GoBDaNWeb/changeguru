import { useConverterStore } from "features/Converter";
import { useEffect, useState } from "react";
import { ratesApi } from "shared/api";
import { Exchange } from "../ui/ExchangeTable";

interface IUseGetRatesProps {
  from: string;
  to: string;
}

export function useGetRates(props: IUseGetRatesProps) {
  const { from, to } = props;

  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [isLoading, setLoding] = useState<boolean>(true);

  const converterStore = useConverterStore();

  const handleGetRates = async () => {
    setLoding(true);
    try {
      const { data } = await ratesApi.getRates({
        from,
        to,
      });
      setExchanges(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    handleGetRates();
  }, [converterStore.converterInfo.have, converterStore.converterInfo.want]);

  return {
    exchanges,
    isLoading,
  };
}
