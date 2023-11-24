import { FC } from "react";

import s from "./styles.module.sass";

import { UploadIcon } from "shared/ui/UploadIcon";

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
      <input type="file" />
    </div>
  );
};
