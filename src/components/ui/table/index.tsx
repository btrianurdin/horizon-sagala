import cn from "@/utils/cn";

const Table = ({ columns, data, rootClassName, className }: TableProps) => {
  return (
    <div className={cn("w-full overflow-x-auto", rootClassName)}>
      <table className={cn("w-full block max-w-[300px] sm:max-w-full sm:table", className)}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "text-left p-3 pl-6 font-semibold text-slate-400 text-xs uppercase border-b",
                  column.className
                )}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-sm text-gray-500 py-4"
              >
                No data available
              </td>
            </tr>
          )}
          {data.map((row, index) => {
            return (
              <tr key={`tb-${index}`}>
                {columns.map((column) => (
                  <td
                    key={`col-${column.key}${index}`}
                    className={cn(
                      "py-4 px-6 text-nowrap",
                      column?.contentWrap && "text-wrap",
                      column.rowClassName
                    )}
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export type TableProps = {
  columns: TableColumnProps[];
  data: Record<string, any>[];
  rootClassName?: string;
  className?: string;
};

export type TableColumnProps = {
  key: string;
  name: string;
  className?: string;
  rowClassName?: string;
  contentWrap?: boolean;
  render?: (row: Record<string, any>) => React.ReactNode;
};

export default Table;
