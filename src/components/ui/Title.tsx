import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps) {
  return (
    <h2
      className={
        "text-4xl text-center my-14  hover:bg-gradient-to-r from-[#007BFF] to-[#52D3B8] hover:bg-clip-text hover:text-transparent "
      }
    >
      {children}
    </h2>
  );
}

export default Title;
