import Button from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import Modal from "@/components/ui/modal";
import TextInput from "@/components/ui/text-input";
import TextInputLabel from "@/components/ui/text-input-label";
import cn from "@/utils/cn";
import { useMemo, useState } from "react";
import { FaAndroid, FaApple, FaWindows } from "react-icons/fa";

const CreateModal = ({
  isOpen,
  onClose,
  onCreated,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCreated?: (data: { name: string; techs: string[] }) => void;
}) => {
  const [selectedTech, setSelectedTech] = useState<string[] | null>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const techs = useMemo(() => {
    return [
      {
        id: "windows",
        name: "Windows",
        icon: <FaWindows className="w-5 h-5" />,
      },
      {
        id: "apple",
        name: "Apple",
        icon: <FaApple className="w-5 h-5" />,
      },
      {
        id: "android",
        name: "Android",
        icon: <FaAndroid className="w-5 h-5" />,
      },
    ];
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Development Data"
      className="md:max-w-md"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target as HTMLFormElement);
          const name = data.get("name") as string;

          if (!name || selectedTech?.length === 0) {
            setErrors({
              name: !name ? "Name is required" : "",
              tech: selectedTech?.length === 0 ? "Tech is required" : "",
            });
            return;
          }
          setErrors({});
          setSelectedTech([]);

          onCreated?.({
            name,
            techs: selectedTech || [],
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
        <div>
          <TextInputLabel className="mb-4">Select Tech</TextInputLabel>
          <div className="grid grid-cols-3 gap-6">
            {techs.map((tech) => (
              <button
                type="button"
                key={tech.id}
                onClick={() => {
                  setSelectedTech((prev) => {
                    if (prev?.includes(tech.id)) {
                      return prev.filter((id) => id !== tech.id);
                    }
                    return [...(prev || []), tech.id];
                  });
                }}
                className={cn(
                  "text-center flex flex-col gap-2 justify-center items-center text-gray-400 hover:bg-gray-50 p-3 rounded-md",
                  "transition-colors duration-300",
                  selectedTech?.includes(tech.id) &&
                    "bg-gray-100 hover:bg-gray-100 text-brand-600 ring-1 ring-brand-600"
                )}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </button>
            ))}
          </div>
          {errors.tech && (
            <span className="mt-2 text-xs text-red-600">{errors.tech}</span>
          )}
        </div>
        <Button className="mt-6 w-full" variant="solid" type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default CreateModal;
