import { apiInstance } from "../base";

const BASE_URL = "/coins";

export type TopCoins = {
  [x: string]: any;
};

export const getTopCoins = (): Promise<TopCoins> => {
  return apiInstance.get(`${BASE_URL}/top`);
};

export const getAllCoins = (): Promise<TopCoins> => {
  return apiInstance.get(`${BASE_URL}/all`);
};
