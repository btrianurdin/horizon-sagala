import cn from "@/utils/cn";

const InputGroup = ({
  children,
  className,
  error,
}: {
  children: React.ReactNode;
  className?: string;
  error?: string;
}) => {
  return (
    <div className={cn("mb-3", className)}>
      {children}
      {error && <span className="mt-2 text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default InputGroup;
