import { useLoginModalStore } from "@/features/LoginModal";
import { Backdrop, Button, Input, ModalWrapper } from "@/shared/ui";
import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react";
import s from "./styles.module.sass";
import { useRecoveryPasswordModalStore } from "@/features/RecoveryPasswordModal";
interface IFooterProps {
  onClick: () => void;
}

export const LoginModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const { modalIsOpen: loginOpen, handleOpenModal: handleOpenLogin } =
    useLoginModalStore();
  const { handleOpenModal: handleOpenRecover } =
    useRecoveryPasswordModalStore();

  useEffect(() => {
    setShowModal(loginOpen);
  }, [loginOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenLogin();
    }, 300);
  };

  const handleOpenRecoverModal = () => {
    handleClose();
    handleOpenRecover();
  };

  if (!loginOpen) {
    return null;
  }

  return (
    <Backdrop handleClose={handleClose} show={showModal}>
      <ModalWrapper
        title="login"
        body={<BodyModal />}
        footer={<FooterModal onClick={handleOpenRecoverModal} />}
        onClose={handleClose}
      />
    </Backdrop>
  );
});

const BodyModal = () => {
  return (
    <div className={s.body}>
      <Input placeholder="Email/ID" />
      <Input placeholder="Password" />
      <Button onClick={() => {}} className={s.loginBtn}>
        Login
      </Button>
    </div>
  );
};

const FooterModal: FC<IFooterProps> = ({ onClick }) => {
  return (
    <div className={s.footer}>
      <Button onClick={onClick} variant="clear" className={s.recoveryBtn}>
        Forgot password ?
      </Button>
    </div>
  );
};
