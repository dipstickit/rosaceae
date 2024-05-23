import React from "react";
import { ReactTable } from "../../../components/ReactTable";
import { Text, Img, Button } from "../..";
import { createColumnHelper } from "@tanstack/react-table";

type TableRowType = {
  img: string;
  name: string;
  salePrice: string;
  quantity: string;
  originPrice: string;
};

interface Props {
  className?: string;
  data?: TableRowType[];
}

const Item: React.FC<Props> = ({ className, data = [], ...props }) => {
  const tableColumns = React.useMemo(() => {
    const table8ColumnHelper = createColumnHelper<TableRowType>();
    return [
      table8ColumnHelper.accessor("img", {
        cell: (info) => (
          <div className="flex justify-center items-center">
            <Img
              src={info.getValue()}
              alt="image"
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
        ),
        header: () => (
          <Text
            size="7xl"
            as="p"
            className="pb-2 pt-2 font-semibold text-gray-900 text-center"
          >
            Hình ảnh
          </Text>
        ),
        meta: { width: "150px" },
      }),
      table8ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text size="5xl" as="p" className="text-gray-900">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Text
            size="7xl"
            as="p"
            className="pb-2 pt-2 font-semibold text-gray-900 text-left"
          >
            Dịch Vụ
          </Text>
        ),
        meta: { width: "300px" },
      }),
      table8ColumnHelper.accessor("salePrice", {
        cell: (info) => (
          <Text size="5xl" as="p" className="text-gray-900">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Text
            size="7xl"
            as="p"
            className="pb-2 pt-2 font-semibold text-gray-900 text-left"
          >
            Giá
          </Text>
        ),
        meta: { width: "150px" },
      }),
      table8ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex justify-between items-center bg-gray-100 rounded-md p-2">
            <Button
              size="sm"
              className="w-6 h-6 flex items-center justify-center text-white rounded-full"
            >
              -
            </Button>
            <Text size="5xl" as="p" className="text-gray-900 mx-2">
              {info.getValue()}
            </Text>
            <Button
              size="sm"
              className="w-6 h-6 flex items-center justify-center text-white rounded-full"
            >
              +
            </Button>
          </div>
        ),
        header: () => (
          <Text
            size="7xl"
            as="p"
            className="pb-2 pt-2 font-semibold text-gray-900 text-left"
          >
            Số lượng
          </Text>
        ),
        meta: { width: "150px" },
      }),
      table8ColumnHelper.accessor("originPrice", {
        cell: (info) => (
          <Text size="5xl" as="p" className="text-gray-900 text-right">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Text
            size="7xl"
            as="p"
            className="pb-2 pt-2 font-semibold text-gray-900 ml-[80px]"
          >
            Giá gốc
          </Text>
        ),
        meta: { width: "150px" },
      }),
    ];
  }, []);

  return (
    <div
      {...props}
      className={`${className} flex flex-col items-start w-full gap-10`}
    >
      <ReactTable
        size="xs"
        bodyProps={{ className: "w-full" }}
        headerProps={{ className: "flex-wrap w-full" }}
        rowDataProps={{ className: "md:flex-col w-full" }}
        className="w-full"
        columns={tableColumns}
        data={data}
      />
    </div>
  );
};

export default Item;
