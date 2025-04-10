import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  className?: string;
}

export const SectionLayout = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "w-full mx-auto px-4 p-14 transition-colors duration-700 ease-in-out",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </div>
  );
};
