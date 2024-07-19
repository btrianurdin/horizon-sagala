import Button from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import Modal from "@/components/ui/modal";
import TextInput from "@/components/ui/text-input";
import TextInputLabel from "@/components/ui/text-input-label";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const CreateModal = ({
  isOpen,
  onClose,
  onCreated,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (data: { name: string; status: string }) => void;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Complex Data"
      className="md:max-w-md"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target as HTMLFormElement);
          const name = data.get("name") as string;
          const status = data.get("status") as string;

          if (!name || !status) {
            setErrors({
              name: !name ? "Name is required" : "",
              status: !status ? "Status is required" : "",
            });
            return;
          }
          setErrors({});

          onCreated?.({
            name,
            status,
          });
        }}
      >
        <InputGroup error={errors.name}>
          <TextInput
            id="name"
            name="name"
            label="Name"
            className="w-full"
            placeholder="Enter the name..."
          />
        </InputGroup>
        <InputGroup error={errors.status}>
          <TextInputLabel id="status">Status</TextInputLabel>
          <div className="relative">
            <select
              className="w-full text-sm bg-slate-100 px-4 py-2.5 rounded-full focus-visible:outline-none appearance-none"
              id="status"
              name="status"
            >
              <option value="approved">Approved</option>
              <option value="disabled">Disabled</option>
              <option value="error">Error</option>
            </select>
            <MdKeyboardArrowDown className="absolute top-1/2 -translate-y-1/2 right-3 w-5 h-5" />
          </div>
        </InputGroup>
        <Button className="mt-6 w-full" variant="solid" type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default CreateModal;
