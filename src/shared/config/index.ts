import { PATH_PAGE } from "shared/config";

export const API_URL = "https://api.changeguru.io";
export const countryList = [
  {
    label: "Russia",
    value: "russia",
  },
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "England",
    value: "england",
  },
];
export const genderList = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const navigationList = [
  {
    title: "Home",
    link: PATH_PAGE.root,
  },
  {
    title: "About us",
    link: PATH_PAGE.about,
  },
  {
    title: "FAQ",
    link: PATH_PAGE.faq,
  },
];

export const kycList = [
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
];
export const resptimeList = [
  {
    value: "1h",
    label: "1h",
  },
  {
    value: "2h",
    label: "2h",
  },
  {
    value: "3h",
    label: "3h",
  },
  {
    value: "4h",
    label: "4h",
  },
];
export const liquidityList = [
  {
    value: "10000",
    label: "10000",
  },
  {
    value: "20000",
    label: "20000",
  },
  {
    value: "30000",
    label: "30000",
  },
  {
    value: "40000",
    label: "40000",
  },
];

export * from "./routes";
export * from "./constants";
