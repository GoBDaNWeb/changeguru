import { UploadIcon } from "shared/ui/UploadIcon";
import s from "./styles.module.sass";
import { FC } from "react";

interface IUploadPhotoProps {
  className?: string;
  label: string;
}

export const UploadPhoto: FC<IUploadPhotoProps> = ({ className, label }) => {
  const uploadPhotoClass = `${s.uploadPhoto} ${className ? className : ""}`;

  return (
    <div className={uploadPhotoClass}>
      <UploadIcon />
      <span>{label}</span>
    </div>
  );
};
