import Card from "@/components/shared/card";
import CreateModal from "@/components/shared/complex-table/create-modal";
import Button from "@/components/ui/button";
import DropdownMenu from "@/components/ui/dropdown-menu";
import Table, { TableColumnProps } from "@/components/ui/table";
import TextInput from "@/components/ui/text-input";
import useModal from "@/hooks/use-modal";
import createId from "@/utils/create-id";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import {
  MdAdd,
  MdCheckCircle,
  MdDeleteOutline,
  MdError,
  MdOutlineMoreHoriz,
} from "react-icons/md";

const ComplexTable = () => {
  const modal = useModal();
  const [data, setData] = useState<Record<string, any>[]>([
    {
      id: createId(),
      name: "Marketplace",
      status: "disabled",
      date: "2021-10-10",
      progress: 45,
    },
    {
      id: createId(),
      name: "Venus DB PRO",
      status: "approved",
      date: "2021-10-11",
      progress: 50,
    },
  ]);
  const [filteredData, setFilteredData] = useState<Record<string, any>[]>(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const tableColumns = useMemo(() => {
    const columns: TableColumnProps[] = [
      {
        key: "name",
        name: "Name",
        rowClassName: "text-sm",
        render: (row) => <span className="font-medium">{row.name}</span>,
      },
      {
        key: "status",
        name: "Status",
        rowClassName: "text-sm font-medium",
        render(row) {
          switch (row.status) {
            case "approved":
              return (
                <div className="font-medium flex items-center gap-1">
                  <MdCheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  Approved
                </div>
              );
            case "disabled":
              return (
                <div className="font-medium flex items-center gap-1">
                  <IoMdCloseCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                  Disabled
                </div>
              );
            case "error":
              return (
                <div className="font-medium flex items-center gap-1">
                  <MdError className="text-yellow-500 w-6 h-6 flex-shrink-0" />
                  Error
                </div>
              );
          }
        },
      },
      {
        key: "progress",
        name: "Progress",
        rowClassName: "text-sm",
        render(row) {
          return (
            <div className="bg-gray-200 h-2 w-28 rounded-md">
              <div
                className="bg-brand-600 h-2 rounded-md"
                style={{ width: `${row.progress}%` }}
              />
            </div>
          );
        },
      },
      {
        key: "date",
        name: "Date",
        rowClassName: "text-sm font-medium",
        render(row) {
          return dayjs(row.date).format("DD.MMM.YYYY");
        },
      },
      {
        key: "action",
        name: "Action",
        render(row) {
          return (
            <Button
              variant="soft"
              color="red"
              onClick={() => {
                setData((prev) => prev.filter((data) => data.id !== row.id));
              }}
            >
              <MdDeleteOutline />
            </Button>
          );
        },
      },
    ];

    return columns;
  }, []);

  return (
    <Card>
      <Card.Header
        action={
          <div className="ml-auto">
            <DropdownMenu
              align="end"
              items={[
                {
                  key: "add",
                  title: "Add Data",
                  icon: <MdAdd />,
                },
              ]}
              onSelect={() => modal.open()}
            >
              <Button variant="soft" size="sm">
                <MdOutlineMoreHoriz className="w-7 h-7" />
              </Button>
            </DropdownMenu>
          </div>
        }
      >
        Complex Table
      </Card.Header>
      <Card.Body>
        <div className="px-6 pb-4">
          <TextInput
            placeholder="Search..."
            rootClassName="w-full"
            className="w-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredData(
                data.filter((data) =>
                  data.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
        </div>
        <Table columns={tableColumns} data={filteredData} />
      </Card.Body>
      <CreateModal
        isOpen={modal.isOpen}
        onClose={modal.close}
        onCreated={(data) => {
          const progress = Math.floor(Math.random() * 100);

          setData((prev) => [
            ...prev,
            {
              id: createId(),
              name: data.name,
              progress,
              date: dayjs().toISOString(),
              status: data.status,
            },
          ]);
          modal.close();
        }}
      />
    </Card>
  );
};

export default ComplexTable;
