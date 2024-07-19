import cn from "@/utils/cn";

export type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label className="relative cursor-pointer inline-flex items-center align-top">
      <input
        type="checkbox"
        value=""
        className="h-[1px] w-[1px] p-0 -m-[1px] absolute whitespace-nowrap overflow-hidden"
        style={{
          border: "0px; clip: rect(0px, 0px, 0px, 0px)",
        }}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span
        className={cn(
          "w-4 h-4 border inline-flex items-center justify-center flex-shrink-0 select-none",
          checked && "bg-brand-700 border-brand-700 text-white"
        )}
        aria-hidden="true"
      >
        <div className="flex items-center justify-center h-full transform-none">
          <svg
            viewBox="0 0 12 10"
            className={cn(
              "w-3 h-3 text-white scale-0 transition-all duration-300",
              checked && "scale-100"
            )}
            style={{
              fill: "none",
              strokeWidth: 2,
              stroke: "currentcolor",
              strokeDasharray: 16,
              opacity: 1,
              strokeDashoffset: 0,
              overflow: "visible",
            }}
          >
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
      </span>
    </label>
  );
};

export default Checkbox;
