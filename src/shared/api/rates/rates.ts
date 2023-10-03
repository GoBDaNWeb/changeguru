import { apiInstance } from "../base";

const BASE_URL = "/rates";

export const getRates = (params: any): any => {
  return apiInstance.get(`${BASE_URL}/${params.from}/${params.to}`);
};
