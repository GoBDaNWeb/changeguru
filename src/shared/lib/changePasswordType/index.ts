import { RefObject } from "react";

export const changePasswordType = (ref: RefObject<HTMLInputElement>) => {
  console.log("ref.current", ref.current?.type);
  console.log("ref.current", ref.current);
  if (ref.current) {
    if (ref.current.type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  }
};
