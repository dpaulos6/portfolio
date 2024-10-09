import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  classes: string;
};

function Button({ children, classes }: ButtonProps) {
  return <button className={classes}>{children}</button>;
}

export default Button;
