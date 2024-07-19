import cn from "@/utils/cn";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { cloneElement } from "react";

const DropdownMenu = ({
  children,
  items,
  onSelect,
  align,
  side,
}: DropdownMenuProps) => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{children}</RadixDropdownMenu.Trigger>
      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className="bg-white shadow-brand rounded-[20px] p-3.5"
          sideOffset={10}
          align={align || "start"}
          side={side || "bottom"}
        >
          {items.map((item) => {
            const icon = item.icon as React.ReactElement;

            return (
              <RadixDropdownMenu.Item
                key={item.key}
                className={cn(
                  "text-sm flex items-center text-slate-400 hover:cursor-pointer focus-visible:outline-none hover:text-black",
                  "transition duration-300 mb-3 last:mb-0 min-w-[120px]"
                )}
                onSelect={() => onSelect(item.key)}
              >
                {item.icon && (
                  <div className="mr-1">
                    {cloneElement(icon, {
                      className: clsx("w-5 h-5", icon.props?.className),
                    })}
                  </div>
                )}
                {item.title}
              </RadixDropdownMenu.Item>
            );
          })}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export type DropdownMenuProps = {
  children: React.ReactNode;
  items: DropdownMenuItemProps[];
  align?: "center" | "start" | "end" | undefined;
  side?: "top" | "right" | "bottom" | "left";
  onSelect: (id: string) => void;
};

export type DropdownMenuItemProps = {
  key: string;
  icon?: React.ReactNode;
  title: string | React.ReactNode;
  type?: "button" | "content";
};

export default DropdownMenu;
