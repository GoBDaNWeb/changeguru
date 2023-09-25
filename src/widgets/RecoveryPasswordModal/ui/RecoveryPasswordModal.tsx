import { Backdrop, Button, Input, ModalWrapper } from "shared/ui";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import s from "./styles.module.sass";
import { useModalStore } from "entities/Modal";

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
