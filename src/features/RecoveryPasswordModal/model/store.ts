import { makeAutoObservable } from "mobx";

class RecoveryPasswordModalStore {
  modalIsOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleOpenModal = () => {
    this.modalIsOpen = !this.modalIsOpen;
  };
}

export default RecoveryPasswordModalStore;
