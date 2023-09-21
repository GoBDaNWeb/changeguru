import { FC, ReactElement } from "react";
import { Button, Title } from "..";
import s from "./styles.module.sass";
import { CloseIcon } from "../CloseIcon";

interface IModalWrapperProps {
  title: string;
  body: ReactElement;
  footer?: ReactElement;
  onClose: () => void;
}

export const ModalWrapper: FC<IModalWrapperProps> = ({
  title,
  body,
  footer,
  onClose,
}) => {
  return (
    <div className={s.modalWrapper} onClick={(e) => e.stopPropagation()}>
      <Button onClick={onClose} variant="clear" className={s.closeBtn}>
        <CloseIcon />
      </Button>
      <div className={s.modaContent}>
        <Title variant="h3">{title}</Title>
        {body}
        {footer}
      </div>
    </div>
  );
};
