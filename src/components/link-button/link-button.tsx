import { Link } from "react-router-dom";
import Button, { ButtonProps } from "../button/button";

interface LinkButtonProps extends ButtonProps {
  to: string;
  children: string;
}

export default function LinkButton({
  to,
  children,
  className,
  ...btnProps
}: LinkButtonProps) {
  return (
    <Link to={to} className={className}>
      <Button {...btnProps}>{children}</Button>
    </Link>
  );
}
