import { FC, ReactNode } from "react";

import s from "./styles.module.sass";

interface IButtonProps {
  children: ReactNode;
  variant?: "primary" | "additional" | "clear";
  onClick: () => void;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const btnClass = `${s.button} ${s[variant]} ${className ? className : ""}`;

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};
