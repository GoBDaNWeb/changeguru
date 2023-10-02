import { FC, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import { useModalStore } from "entities/Modal/model";

import s from "./styles.module.sass";

import { changePasswordType } from "shared/lib/changePasswordType";
import { Backdrop, Button, EyeIcon, Input, ModalWrapper } from "shared/ui";
import { FieldValues, useForm } from "react-hook-form";

interface IFooterProps {
  onClick: () => void;
}

export const LoginModal = observer(() => {
  const [showModal, setShowModal] = useState(false);

  const {
    loginModalIsOpen,
    handleOpenLoginModal,
    handleOpenRecoveryModal: openRecover,
  } = useModalStore();

  useEffect(() => {
    setShowModal(loginModalIsOpen);
  }, [loginModalIsOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      handleOpenLoginModal();
    }, 300);
  };

  const handleOpenRecoverModal = () => {
    handleClose();
    openRecover();
  };

  if (!loginModalIsOpen) {
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
  const passwordRef = useRef<HTMLInputElement>(null);

  const {
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className={s.body}>
      <Input id="email" register={register} placeholder="Email/ID" />
      <Input
        id="password"
        register={register}
        placeholder="Password"
        type="password"
        ref={passwordRef}
        icon={
          <Button
            onClick={() => changePasswordType(passwordRef)}
            variant="clear"
          >
            <EyeIcon />
          </Button>
        }
      />
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
