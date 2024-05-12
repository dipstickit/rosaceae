import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";

type ReactTableProps<D> = {
  data: D[];
  columns: ColumnDef<D, string>[];
  headerProps?: Record<string, never>;
  bodyProps?: Record<string, never>;
  rowDataProps?: { className: string };
  size?: keyof typeof sizes;
  [x: string]: any;
};

const sizes = {
  xs: "p-[11px]",
  sm: "p-5",
} as const;

// const ReactTable = <D extends unknown>({
//     columns,
//     data = [],
//     headerProps = {},
//     bodyProps = {},
//     className = "",
//     rowDataProps = { className: "" },
//     size,
//     ...restConfig
//   }: ReactTableProps<D>) => {
//     const table = useReactTable({
//       columns,
//       data,
//       getCoreRowModel: getCoreRowModel(),
//       getSortedRowModel: getSortedRowModel(),
//       ...restConfig,
//     });

const ReactTable = <D,>({
  columns,
  data = [],
  headerProps = {},
  bodyProps = {},
  className = "",
  rowDataProps = { className: "" },
  size,
  ...restConfig
}: ReactTableProps<D>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...restConfig,
  });

  // Render the UI for your table
  return (
    <table className={className}>
      <thead {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} {...header.column.columnDef?.meta}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...bodyProps}>
        {table.getRowModel().rows.map((row) => (
          <tr
            {...rowDataProps}
            className={`${rowDataProps?.className}`}
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={size ? sizes[size] : ""}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ReactTable };
