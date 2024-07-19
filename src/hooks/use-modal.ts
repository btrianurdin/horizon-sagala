import { useCallback, useMemo, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const result = useMemo(() => {
    return {
      isOpen,
      open,
      close,
    };
  }, [isOpen, open, close]);

  return result;
};

export default useModal;
