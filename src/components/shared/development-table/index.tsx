import Card from "@/components/shared/card";
import CreateModal from "@/components/shared/development-table/create-modal";
import Button from "@/components/ui/button";
import DropdownMenu from "@/components/ui/dropdown-menu";
import Table, { TableColumnProps } from "@/components/ui/table";
import TextInput from "@/components/ui/text-input";
import useModal from "@/hooks/use-modal";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { FaAndroid, FaApple, FaWindows } from "react-icons/fa";
import { MdAdd, MdDeleteOutline, MdOutlineMoreHoriz } from "react-icons/md";

const DevelopmentTable = () => {
  const modal = useModal();
  const [data, setData] = useState<Record<string, any>[]>([
    {
      name: "Venus DS",
      tech: ["windows"],
      date: "2021-10-10",
      progress: 45,
    },
    {
      name: "Venus DB PRO",
      tech: ["android"],
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
        contentWrap: true,
        className: "min-w-[120px]",
        render(row) {
          return <span className="font-medium">{row.name}</span>;
        },
      },
      {
        key: "tech",
        name: "Tech",
        render(row) {
          return (
            <div className="flex items-center space-x-2">
              {row.tech?.map((tech: string) => (
                <div key={tech} className="text-gray-500">
                  {techIcon[tech as TechAvailable]}
                </div>
              ))}
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
        key: "progress",
        name: "Progress",
        rowClassName: "text-sm",
        render(row) {
          return (
            <div className="flex items-center gap-2">
              <div className="font-medium">{row.progress}%</div>
              <div className="bg-gray-200 h-2 w-16 rounded-md">
                <div
                  className="bg-brand-600 h-2 rounded-md"
                  style={{ width: `${row.progress}%` }}
                />
              </div>
            </div>
          );
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
                setData((prev) => prev.filter((data) => data !== row));
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
        Development Table
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
              date: dayjs().toISOString(),
              progress,
              tech: data.techs,
              name: data.name,
            },
          ]);
          modal.close();
        }}
      />
    </Card>
  );
};

type TechAvailable = "windows" | "android" | "apple";

const techIcon = {
  windows: <FaWindows className="w-5 h-5" />,
  android: <FaAndroid className="w-5 h-5" />,
  apple: <FaApple className="w-5 h-5" />,
};

export default DevelopmentTable;
