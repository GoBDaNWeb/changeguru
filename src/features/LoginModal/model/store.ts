import { makeAutoObservable } from "mobx";

class LoginModalStore {
  modalIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenModal = () => {
    this.modalIsOpen = !this.modalIsOpen;
  };
}

export default LoginModalStore;
