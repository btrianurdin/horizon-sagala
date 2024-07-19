import cn from "@/utils/cn";
import { useId } from "react";

const TextInputLabel = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const _defaultId = useId();

  return (
    <label
      htmlFor={id || _defaultId}
      className={cn("block text-sm text-slate-400 mb-1", className)}
    >
      {children}
    </label>
  );
};

export default TextInputLabel;
