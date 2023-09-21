import { Backdrop, Button, Input, ModalWrapper } from "@/shared/ui";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import s from "./styles.module.sass";
import { useRecoveryPasswordModalStore } from "@/features/RecoveryPasswordModal";

export const RecoveryPasswordModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const { modalIsOpen, handleOpenModal } = useRecoveryPasswordModalStore();

  useEffect(() => {
    setShowModal(modalIsOpen);
  }, [modalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenModal();
    }, 300);
  };

  if (!modalIsOpen) {
    return null;
  }
  return (
    <Backdrop handleClose={handleClose} show={showModal}>
      <ModalWrapper
        title="Password recovery"
        body={<BodyModal />}
        onClose={handleClose}
      />
    </Backdrop>
  );
});

const BodyModal = () => {
  return (
    <div className={s.body}>
      <Input placeholder="Email/ID" />
      <Button onClick={() => {}} className={s.recoveryBtn}>
        Send recowery email
      </Button>
    </div>
  );
};
