import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const table4Data = [
  {
    dchv4: "Nails thiết kế",
    gi4: "250.000vnd",
    slng4: "1",
    gigc4: "250.000vnd",
  },
  {
    dchv4: "Massage cổ vai gáy chuyên sâu ",
    gi4: "199.000vnd",
    slng4: "1",
    gigc4: "199.000vnd",
  },
];
type Table4RowType = {
  dchv4: string;
  gi4: string;
  slng4: string;
  gigc4: string;
};

export default function CartPage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper<Table4RowType>();
    return [
      table4ColumnHelper.accessor("dchv4", {
        cell: (info) => (
          <div className="flex items-center">
            ];
            <Img
              src="images/img_close_red_300_02.svg"
              alt="close"
              className="w-[23px] h-[24px]"
            />
            <Img
              src="images/img_rectangle_14.svg"
              alt="image"
              className="ml-[26px] w-[20%] h-[147px]"
            />
            <Text
              size="5xl"
              as="p"
              className="ml-[47px] !font-poppins4 !text-gray-900_04"
            >
              {info?.getValue?.()}
            </Text>
          </div>
        ),

        header: (info) => (
          <Text
            size="7xl"
            as="p"
            className="pl-[35px] pb-[30px] pt-0.5 !font-poppins4 !text-gray-900_03 sm:pb-5 sm:pl-5"
          >
            Dịch Vụ
          </Text>
        ),
        meta: { width: "758px" },
      }),
      table4ColumnHelper.accessor("gi4", {
        cell: (info) => (
          <Text size="5xl" as="p" className="!font-poppins4 !text-gray-900_04">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text
            size="7xl"
            as="p"
            className="pb-[33px] !font-poppins4 !text-gray-900_03 sm:pb-5"
          >
            Giá
          </Text>
        ),
        meta: { width: "176px" },
      }),
      table4ColumnHelper.accessor("slng4", {
        cell: (info) => (
          <div className="bg-[url(/public/images/img_group_1278.svg)] h-[52px] flex flex-1 items-start justify-between gap-5 bg-cover bg-no-repeat md:h-auto md:self-stretch">
            <div className="mt-[9px] w-[8px] h-[2px] bg-blue-400" />
            <Text size="5xl" as="p" className="!font-alata4 !text-gray-900_04">
              {info?.getValue?.()}
            </Text>
            <Img
              src="images/img_plus.svg"
              alt="plus"
              className="w-[8px] h-[9px] mt-1.5"
            />
          </div>
        ),
        header: (info) => (
          <Text
            size="7xl"
            as="p"
            className="pb-[30px] pt-0.5 !font-poppins4 !text-gray-900_03 sm:pb-5"
          >
            Số lượng
          </Text>
        ),
        meta: { width: "198px" },
      }),
      table4ColumnHelper.accessor("gigc4", {
        cell: (info) => (
          <Text
            size="5xl"
            as="p"
            className="ml-[74px] !font-poppins4 !text-gray-900_04 md:ml-0"
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text
            size="7xl"
            as="p"
            className="pb-[30px] pt-0.5 !font-poppins4 !text-gray-900_03 sm:pb-5"
          >
            Giá gốc
          </Text>
        ),
        meta: { width: "123px" },
      }),
    ];
  }, []);
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header className="ml-[12rem]" />
      <div className="flex w-full flex-col bg-white-A700">
        <div className="max-w-[1846px] mt-[84px] mx-auto flex w-full items-center gap-12 md:flex-col md:p-5">
          <div className="sm:gap-[35px] md:gap-[52px] gap-[70px] flex flex-1 flex-col items-start md:self-stretch">
            <ReactTable
              size="xs"
              bodyProps={{}}
              headerProps={{ className: "flex-wrap" }}
              rowDataProps={{ className: "md:flex-col" }}
              className="self-stretch"
              columns={table4Columns}
              data={table4Data}
            />
            <div className="pb-[33px] w-[73%] flex items-center justify-center gap-3 rounded border border-solid border-red-300 bg-teal-400_19 px-5 pt-5 md:w-full md:flex-col sm:pb-5">
              <Img
                src="images/img_percent.svg"
                alt="percent"
                className="w-[24px] h-[24px] self-start md:w-full"
              />
              <Text as="p" className="!font-prompt4 text-black-900">
                Giảm giá tức thì 10% với Thẻ ghi nợ của Ngân hàng Liên bang khi
                chi tiêu tối thiểu là 500.000vnd.
              </Text>
            </div>
          </div>
          <div className="px-[31px] gap-[29px] pb-[205px] w-[30%] flex flex-col items-start justify-center rounded-sm border border-solid border-blue_gray-100_06 bg-white-A700 pt-8 md:w-full md:pb-5 sm:p-5">
            <Text size="9xl" as="p" className="!font-alata4">
              Tóm tắt theo thứ tự
            </Text>
            <div className="gap-[30px] flex flex-col items-start self-stretch">
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-alata4">
                    Giá
                  </Text>
                  <Text as="p" className="!font-alata4">
                    449.000vnd
                  </Text>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-alata4">
                    Số lượng
                  </Text>
                  <Text as="p" className="!font-alata4">
                    2
                  </Text>
                </div>
                <div className="flex flex-wrap justify-between gap-5">
                  <Text as="p" className="!font-alata4">
                    Áp dụng mã giảm giá
                  </Text>
                  <Text as="p" className="!font-alata4">
                    0vnd
                  </Text>
                </div>
              </div>
              <div className="w-[66%] h-px bg-blue_gray-100_06" />
              <div className="gap-[23px] flex flex-col self-stretch">
                <div className="pr-[140px] flex flex-wrap items-center justify-between gap-5 md:pr-5">
                  <Text as="p" className="self-end !font-alata4">
                    Tổng
                  </Text>
                  <Text
                    as="p"
                    className="tracking-[0.10px] self-start !font-prompt4"
                  >
                    499.000vnd
                  </Text>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <Text as="p" className="!font-alata4">
                    Dự kiến thực hiện
                  </Text>
                  <Text
                    as="p"
                    className="tracking-[0.10px] self-end !font-alata4"
                  >
                    26 Tháng 2, 2024
                  </Text>
                </div>
                <Input
                  color="blue_gray_100_06"
                  size="sm"
                  variant="outline"
                  name="couponcode_one"
                  placeholder={`Coupon Code`}
                  suffix={
                    <Img
                      src="images/img_trailing_icon.svg"
                      alt="trailing icon"
                      className="h-[24px] w-[24px]"
                    />
                  }
                />
              </div>
              <Button color="black_900" shape="round" className="w-full">
                Tiến hành thanh toán
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
