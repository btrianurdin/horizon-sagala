import Button from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import Modal from "@/components/ui/modal";
import TextInput from "@/components/ui/text-input";
import { useState } from "react";

const CreateModal = ({
  isOpen,
  onClose,
  onCreated,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (data: { name: string; quantity: number }) => void;
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Check Data"
      className="md:max-w-md"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target as HTMLFormElement);
          const name = data.get("name") as string;
          const quantity = data.get("quantity") as string;

          if (!name || !quantity) {
            setErrors({
              name: !name ? "Name is required" : "",
              quantity: !quantity ? "Quantity is required" : "",
            });
            return;
          }
          setErrors({});

          onCreated?.({
            name,
            quantity: parseInt(quantity),
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
        <InputGroup error={errors.quantity}>
          <TextInput
            id="quantity"
            name="quantity"
            label="Quantity"
            className="w-full"
            placeholder="Enter the quantity..."
            type="number"
          />
        </InputGroup>
        <Button className="mt-6 w-full" variant="solid" type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default CreateModal;
