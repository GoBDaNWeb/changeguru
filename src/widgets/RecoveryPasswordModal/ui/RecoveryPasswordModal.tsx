import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import { useModalStore } from "entities/Modal";

import s from "./styles.module.sass";

import { Backdrop, Button, Input, ModalWrapper } from "shared/ui";

export const RecoveryPasswordModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const { recoveryModalIsOpen, handleOpenRecoveryModal } = useModalStore();

  useEffect(() => {
    setShowModal(recoveryModalIsOpen);
  }, [recoveryModalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenRecoveryModal();
    }, 300);
  };

  if (!recoveryModalIsOpen) {
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
