import { makeAutoObservable } from "mobx";

interface IUserData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_repeat: string;
  country: string;
  phone: string;
  gender: string;
  age: number;
}

class UserStore {
  userData: IUserData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleSetUserData = (user: IUserData | null) => {
    this.userData = user;
  };
}

export default UserStore;
