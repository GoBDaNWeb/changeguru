import axios from "axios";
import { apiInstance } from "../base";

const BASE_URL = "/new/user";

type Auth = {
  auth_id: string;
  auth_hash: string;
};
type Result = {
  user_id: string;
  auth: Auth;
};
export type NewUser = {
  cgapi: string;
  code: number;
  status: boolean;
  result: Result;
};
export type UpdateUser = {
  cgapi: string;
  code: number;
  status: boolean;
  result: {};
};

export const registerNewUser = (data: any): Promise<NewUser> => {
  return apiInstance.post(`/new/user`, data);
};
export const updateUser = (data: any, auth: any): Promise<UpdateUser> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/update",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
export const updateUserPassword = (
  data: any,
  auth: any
): Promise<UpdateUser> => {
  return axios({
    method: "post",
    url: "https://api.changeguru.io/user/update/password",
    data,
    headers: {
      "x-auth-token": auth,
    },
  });
};
