import cn from "@/utils/cn";
import clsx from "clsx";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx("w-full bg-white rounded-[20px] py-5", className)}>
      {children}
    </div>
  );
};

export type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

Card.Header = ({ children, className, action }: CardHeaderProps) => (
  <div
    className={clsx(
      "px-6 text-xl font-semibold flex items-center mb-5",
      className
    )}
  >
    <p>{children}</p>
    {action}
  </div>
);

export type CardBodyProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

Card.Body = ({ children, className }: CardBodyProps) => (
  <div className={cn(className)}>{children}</div>
);

export default Card;
