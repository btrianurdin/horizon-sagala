import Card from "@/components/shared/card";
import CreateModal from "@/components/shared/four-column-table/create-modal";
import Button from "@/components/ui/button";
import DropdownMenu from "@/components/ui/dropdown-menu";
import Table, { TableColumnProps } from "@/components/ui/table";
import TextInput from "@/components/ui/text-input";
import useModal from "@/hooks/use-modal";
import createId from "@/utils/create-id";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { MdAdd, MdDeleteOutline, MdOutlineMoreHoriz } from "react-icons/md";

const FourColumnTable = () => {
  const modal = useModal();
  const [data, setData] = useState<Record<string, any>[]>([
    {
      id: createId(),
      name: "Marketplace",
      progress: 45,
      quantity: 2344,
      date: "2021-10-10",
    },
    {
      id: createId(),
      name: "Venus DB PRO",
      progress: 50,
      quantity: 224,
      date: "2021-10-11",
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
        key: "progress",
        name: "Progress",
        rowClassName: "text-sm",
        render(row) {
          return <div className="font-medium">{row.progress}%</div>;
        },
      },
      {
        key: "quantity",
        name: "Quantity",
        rowClassName: "text-sm font-medium",
        render(row) {
          return <div className="font-medium">{row.quantity}</div>;
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
        Check Table
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
              quantity: data.quantity,
            },
          ]);
          modal.close();
        }}
      />
    </Card>
  );
};

export default FourColumnTable;
