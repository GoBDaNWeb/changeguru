import { makeAutoObservable } from "mobx";

type ConverterInfo = {
  have: string;
  want: string;
  haveCount: string;
};

class ConverterStore {
  have = "BTC";
  haveCount: any = 0;
  want = "ETH";
  converterInfo: ConverterInfo = { have: "BTC", haveCount: "0", want: "ETH" };

  constructor() {
    makeAutoObservable(this);
  }

  handleSetHave(have: string) {
    if (have === this.want) return;
    this.have = have;
  }
  handleSetHaveCount(count: string) {
    this.haveCount = count;
  }
  handleSetWant(want: string) {
    if (want === this.have) return;
    this.want = want;
  }
  handleSetConverterInfo(info: ConverterInfo) {
    this.converterInfo = info;
  }
}

export default ConverterStore;
