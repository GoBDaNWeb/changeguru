import { ExchangeTable } from "@/widgets/ExchangeTable";
import { Hero } from "../Hero/Hero";

import s from "./styles.module.sass";
import { HowItWork } from "@/widgets/HowItWork";
import { AboutChangeguru } from "@/widgets/AboutChangeguru";

export const MainPage = () => {
  return (
    <div className={s.main}>
      <div className={s.bg} />
      <Hero />
      <ExchangeTable />
      <HowItWork />
      <AboutChangeguru />
    </div>
  );
};
