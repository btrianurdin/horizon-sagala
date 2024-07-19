import TextInputLabel from "@/components/ui/text-input-label";
import clsx from "clsx";
import React, { cloneElement, useId } from "react";

export type TextInputProps = {
  id?: string;
  type?: "text" | "password" | "number" | "email";
  rootClassName?: string;
  variant?: "default" | "rounded";
  leadingIcon?: React.ReactElement;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      rootClassName,
      type = "text",
      className,
      variant = "default",
      leadingIcon,
      label,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const _defaultId = useId();
    const _id = props.id || _defaultId;

    return (
      <div className={clsx("relative", rootClassName)}>
        {label && <TextInputLabel id={_id}>{label}</TextInputLabel>}
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {cloneElement(leadingIcon, {
              className: "w-5 h-5",
            })}
          </div>
        )}
        <input
          ref={ref}
          id={_id}
          type={type || "text"}
          className={clsx(
            "bg-slate-100 px-4 py-2.5 text-sm focus-visible:outline-none",
            variant === "default" && "rounded-full",
            leadingIcon && "pl-10",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

export default TextInput;
