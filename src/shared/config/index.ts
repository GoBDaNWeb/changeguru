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

export * from "./routes";
export * from "./constants";
