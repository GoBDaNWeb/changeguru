import { FC, ReactNode } from "react";

import s from "./styles.module.sass";

interface IButtonProps {
  children: ReactNode;
  variant?: "primary" | "additional" | "clear";
  onClick: () => void;
  className?: string;
  type?: "submit" | "button";
}

export const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
  type = "button",
}) => {
  const btnClass = `${s.button} ${s[variant]} ${className ? className : ""}`;

  return (
    <button onClick={onClick} className={btnClass} type={type}>
      {children}
    </button>
  );
};
