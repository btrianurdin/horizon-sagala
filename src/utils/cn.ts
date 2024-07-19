import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classname: ClassValue[]) => {
  return twMerge(clsx(...classname));
};

export default cn;
