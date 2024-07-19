import * as RadixPopover from "@radix-ui/react-popover";

const Popover = ({
  children,
  side,
  align,
  offset,
  content,
}: {
  children: React.ReactNode;
  side?: RadixPopover.PopoverContentProps["side"];
  align?: RadixPopover.PopoverContentProps["align"];
  offset?: RadixPopover.PopoverContentProps["sideOffset"];
  content: React.ReactNode;
}) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          sideOffset={offset || 10}
          side={side}
          align={align}
          className="z-10"
        >
          <div className="bg-white shadow-brand rounded-[20px] w-[calc(100vw-20px)] sm:w-auto">{content}</div>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

export default Popover;
