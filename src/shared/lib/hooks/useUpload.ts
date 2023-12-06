import { useState } from "react";
import { exchangeApi, userApi } from "shared/api";

interface IRespose {
  upload: () => Promise<void>;
  reset: () => void;
  image: string;
  error: any;
}

export function useUpload(imageObj: File, type: "user" | "exchange"): IRespose {
  const [image, setImage] = useState("");
  const [error, setError] = useState<any>(null);

  const upload = async (): Promise<void> => {
    setError(null);

    try {
      if (!imageObj?.name) return;
      const formData = new FormData();
      formData.append("userpic", imageObj);
      if (type === "user") {
        const { data } = await userApi.uploadUserAvatar(
          formData,
          localStorage.getItem("token")
        );
        setImage(data.result.image);

        console.log(data.result.image);
      } else {
        const { data } = await exchangeApi.uploadExchangeAvatar(
          formData,
          localStorage.getItem("token")
        );
        setImage(data.result.image);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const reset = () => {
    setImage("");
  };

  return { upload, reset, image, error };
}
