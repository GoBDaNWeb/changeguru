import axios from "axios";
import { apiInstance } from "../base";

type Auth = {
  auth_id: string;
  auth_hash: string;
};
type Result = {
  user_id: string;
  auth: Auth;
};
export type NewExchange = {
  cgapi: string;
  code: number;
  status: boolean;
  result: Result;
};
export type UpdateExchange = {
  cgapi: string;
  code: number;
  status: boolean;
  result: {};
};

export const registerNewExchange = (data: any): Promise<NewExchange> => {
  return apiInstance.post(`/new/exchange`, data);
};
export const updateExchange = (
  data: any,
  auth: any
): Promise<UpdateExchange> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
