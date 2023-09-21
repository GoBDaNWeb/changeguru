import { UploadIcon } from "@/shared/ui/UploadIcon";
import s from "./styles.module.sass";

export const UploadPhoto = () => {
  return (
    <div className={s.uploadPhoto}>
      <UploadIcon />
      <span>Upload Logo</span>
    </div>
  );
};
