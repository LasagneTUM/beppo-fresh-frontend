import classNames from "classnames";
import styles from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "small";
}

export default function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.secondary]: variant === "secondary",
        [styles.small]: variant === "small"
      })}
      {...props}
    />
  );
}
