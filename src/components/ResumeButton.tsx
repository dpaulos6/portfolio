import { ReactNode } from "react";

type ResumeButtonProps = {
  children: ReactNode;
  classes: string;
};

function ResumeButton({ children, classes }: ResumeButtonProps) {
  return <button className={classes}>{children}</button>;
}

export default ResumeButton;
