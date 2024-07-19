import cn from "@/utils/cn";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import "@/styles/modal.css";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  title,
  footer,
}: ModalProps) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center modal-overlay"
          tabIndex={-1}
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div
            className={cn(
              "relative w-[calc(100vw-50px)] md:w-1/2 min-h-[200px] bg-white rounded-[20px] px-6 py-4 modal-content",
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {title && <h2 className="mb-6 text-lg font-semibold">{title}</h2>}
            <button
              className="absolute top-3.5 right-6 p-1.5 hover:bg-gray-100 rounded-md transition-all duration-300"
              onClick={onClose}
            >
              <MdClose className="w-5 h-5" />
            </button>
            {children}
            {footer}
          </div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  footer?: React.ReactNode;
};

export default Modal;
