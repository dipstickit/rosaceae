import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import HeaderAdmin from "../../components/HeaderAdmin";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const table4Data = [
  {
    service: "Làm móng",
    order: "#11232",
    date: "Jun 29,2022",
    name: "Trang",
    status: "Hoàn thành",
  },
  {
    service: "Chăm sóc da",
    order: "#11232",
    date: "Jun 29,2022",
    name: "Diệu",
    status: "Hoàn thành",
  },
  {
    service: "Gội đầu",
    order: "#11232",
    date: "Jun 29,2022",
    name: "Hồng",
    status: "Hoàn thành",
  },
  {
    service: "Làm móng",
    order: "#11232",
    date: "Jun 29,2022",
    name: "Ngân",
    status: "Hoàn thành",
  },
  {
    service: "Chăm sóc da",
    order: "#11232",
    date: "Jun 29,2022",
    name: "Linh",
    status: "Hoàn thành",
  },
];
type Table4RowType = {
  service: string;
  order: string;
  date: string;
  name: string;
  status: string;
};
export default function ReportrevenuePage() {
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper<Table4RowType>();
    return [
      table4ColumnHelper.accessor("service", {
        cell: (info) => (
          <Text as="p" className="!font-medium text-gray-950">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text size="3xl" as="p" className="pl-[0] pb-2 pt-3 sm:pl-5 text-gray-950">
            Dịch vụ
          </Text>
        ),
        meta: { width: "226px" },
      }),
      table4ColumnHelper.accessor("order", {
        cell: (info) => <Text as="p" className="text-gray-950">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text size="3xl" as="p" className="py-2.5 text-gray-950">
            Order ID
          </Text>
        ),
        meta: { width: "248px" },
      }),
      table4ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p" className="text-gray-950">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text size="3xl" as="p" className="pb-2 pt-3 text-gray-950">
            Ngày
          </Text>
        ),
        meta: { width: "173px" },
      }),
      table4ColumnHelper.accessor("name", {
        cell: (info) => <Text as="p" className="text-gray-950">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text size="3xl" as="p" className="pb-2 pt-3 text-gray-950">
            Tên khách hàng
          </Text>
        ),
        meta: { width: "249px" },
      }),
      table4ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5">
            <div className="w-[8px] h-[8px] rounded bg-light_green-A700" />
            <Text as="p" className="text-gray-950">{info?.getValue?.()}</Text>
          </div>
        ),
        header: (info) => (
          <Text size="3xl" as="p" className="pb-2 pt-3 text-gray-950">
            Trạng thái
          </Text>
        ),
        meta: { width: "134px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Rosaceaae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full border border-solid border-gray-50_07 bg-gray-50_03">
        <div className="flex items-start md:flex-col">
          <Sidebar />
          <div className="flex flex-1 flex-col items-center md:self-stretch md:p-5">
            <HeaderAdmin />
            <div className="w-[92%] flex flex-col gap-4 md:w-full">
              <div>
                <div className="gap-[47px] flex md:flex-col">
                  <div className="flex flex-1 flex-col gap-4 md:self-stretch">
                    <div className="flex justify-between gap-5 md:flex-col">
                      <div className="w-[43%] flex items-center justify-center md:w-full">
                        <div className="rounded-[5px] px-[13px] pb-[47px] pt-[22px] flex flex-1 flex-col items-start gap-2.5 bg-white-A700 md:pb-5 sm:py-5">
                          <Heading
                            as="h1"
                            className="text-sm font-bold !text-blue_gray-700"
                          >
                            Đặt dịch vụ hôm nay
                          </Heading>
                          <Heading size="3xl" as="h2">
                            123 lượt đặt
                          </Heading>
                        </div>
                        <Img
                          src="images/img_vector_4.svg"
                          alt="vectorfour"
                          className="ml-[-18px] mb-[7px] w-[21%] h-[55px] relative self-end"
                        />
                      </div>
                      <div className="gap-[25px] w-[47%] flex items-center justify-center md:w-full">
                        <div className="rounded-[5px] gap-[9px] pb-[49px] pt-[21px] flex flex-1 flex-col items-start bg-white-A700 px-4 md:pb-5 sm:py-5">
                          <Heading
                            as="h3"
                            className="text-sm font-bold !text-blue_gray-700"
                          >
                            Doanh thu hôm nay
                          </Heading>
                          <Heading size="3xl" as="h4">
                            500.000vnd
                          </Heading>
                        </div>
                        <Img
                          src="images/img_vector_5.svg"
                          alt="vectorfive"
                          className="mb-[11px] w-[21%] h-[55px] self-end"
                        />
                      </div>
                    </div>
                    <div className="w-[96%] flex md:w-full">
                      <div className="flex w-full items-center md:flex-col">
                        <div className="flex flex-1 items-center md:self-stretch sm:flex-col">
                          <div className="rounded-[5px] pb-[9px] pt-[18px] flex flex-1 bg-white-A700 px-4 sm:self-stretch">
                            <div className="w-[87%] flex flex-col items-start md:w-full">
                              <Heading size="xl" as="h5">
                                Tổng doanh thu
                              </Heading>
                              <div className="gap-[9px] w-[51%] mt-1.5 flex items-center md:w-full">
                                <div className="h-[29px] relative flex-1 md:h-auto">
                                  <Heading size="3xl" as="h6">
                                    10.000.000vnd
                                  </Heading>
                                  <Img
                                    src="images/img_arrow_1.svg"
                                    alt="arrowone"
                                    className="right-[15.00px] h-[13px] absolute bottom-0 top-0 my-auto"
                                  />
                                </div>
                                <Text
                                  size="md"
                                  as="p"
                                  className="!font-medium !text-light_green-A700"
                                >
                                  5% so với tháng trước
                                </Text>
                              </div>
                              <div className="mt-[21px] flex items-end justify-between gap-5 self-stretch sm:flex-col">
                                <div className="w-[16%] flex items-start justify-between gap-5 sm:w-full">
                                  <div className="gap-[17px] flex flex-col items-end">
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      100k
                                    </Text>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      80k
                                    </Text>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      60k
                                    </Text>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      50k
                                    </Text>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      20k
                                    </Text>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      0
                                    </Text>
                                  </div>
                                  <div className="gap-[7px] mt-3.5 flex flex-1 flex-col items-center">
                                    <div className="flex items-center gap-1 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[160px] bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[108px] self-end bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      Jan
                                    </Text>
                                  </div>
                                </div>
                                <div className="w-[40%] flex items-center justify-between gap-5 sm:w-full">
                                  <div className="gap-[7px] w-[20%] flex flex-col items-center self-end">
                                    <div className="flex items-center gap-1 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[129px] bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[88px] self-end bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      Feb
                                    </Text>
                                  </div>
                                  <div className="gap-[7px] w-[41%] flex flex-col items-start">
                                    <div className="flex items-center justify-between gap-5 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[135px] bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[55px] self-end bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="ml-3.5 !font-medium !text-gray-700_02 md:ml-0"
                                    >
                                      Mar
                                    </Text>
                                  </div>
                                  <div className="w-[20%] flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-1 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[113px] self-end bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[142px] bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      Apr
                                    </Text>
                                  </div>
                                </div>
                                <div className="gap-[21px] w-[20%] flex items-center justify-center sm:w-full">
                                  <div className="flex w-full flex-col items-end gap-2">
                                    <div className="flex items-center gap-1 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[129px] bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[88px] self-end bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="mr-2 !font-medium !text-gray-700_02 md:mr-0"
                                    >
                                      May
                                    </Text>
                                  </div>
                                  <div className="gap-[7px] flex w-full flex-col items-center self-end">
                                    <div className="flex items-center gap-1 self-stretch">
                                      <div className="rounded-[3px] w-[21px] h-[71px] bg-indigo-A400_01" />
                                      <div className="rounded-[3px] w-[21px] h-[48px] self-end bg-indigo-50_01" />
                                    </div>
                                    <Text
                                      size="md"
                                      as="p"
                                      className="!font-medium !text-gray-700_02"
                                    >
                                      Jun
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="z-[1] gap-[7px] ml-[-32px] w-[6%] relative mb-2.5 flex flex-col items-start self-end sm:ml-0 sm:w-full">
                            <div className="flex items-center gap-1 self-stretch">
                              <div className="rounded-[3px] w-[21px] h-[113px] bg-indigo-A400_01" />
                              <div className="rounded-[3px] w-[21px] h-[58px] self-end bg-indigo-50_01" />
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="w-[15px] h-[15px] ml-3.5 !font-medium !text-gray-700_02 md:ml-0"
                            >
                              Jul
                            </Text>
                          </div>
                        </div>
                        <div className="ml-[21px] mb-[9px] w-[5%] flex flex-col items-end gap-2 self-end md:ml-0 md:w-full">
                          <div className="flex items-center gap-1 self-stretch">
                            <div className="rounded-[3px] w-[21px] h-[135px] bg-indigo-A400_01" />
                            <div className="rounded-[3px] w-[21px] h-[92px] self-end bg-indigo-50_01" />
                          </div>
                          <Text
                            size="md"
                            as="p"
                            className="mr-2.5 !font-medium !text-gray-700_02 md:mr-0"
                          >
                            Aug
                          </Text>
                        </div>
                        <div className="sm:gap-[55px] md:gap-[82px] gap-[110px] ml-[38px] w-[12%] flex flex-col items-center md:ml-0 md:w-full">
                          <div className="flex items-center self-stretch">
                            <div className="w-[9px] h-[9px] rounded bg-indigo-A400_01" />
                            <Text
                              size="md"
                              as="p"
                              className="ml-1.5 !font-poppins4 !font-medium !text-gray-700_02"
                            >
                              Profit
                            </Text>
                            <div className="ml-[15px] w-[9px] h-[9px] rounded bg-indigo-50_02" />
                            <Text
                              size="md"
                              as="p"
                              className="ml-1.5 !font-poppins4 !font-medium !text-gray-700_02"
                            >
                              Loss
                            </Text>
                          </div>
                          <div className="w-[45%] flex flex-col items-center gap-2 md:w-full">
                            <div className="flex items-center gap-1 self-stretch">
                              <div className="rounded-[3px] w-[21px] h-[124px] bg-indigo-A400_01" />
                              <div className="rounded-[3px] w-[21px] h-[84px] self-end bg-indigo-50_01" />
                            </div>
                            <Text
                              size="md"
                              as="p"
                              className="!font-medium !text-gray-700_02"
                            >
                              Sep
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32%] flex md:w-full">
                    <div className="flex w-full flex-col gap-4">
                      <div className="flex items-center gap-6">
                        <div className="rounded-[5px] gap-[9px] pb-[49px] pt-[21px] flex flex-1 flex-col items-start bg-white-A700 px-4 md:pb-5 sm:py-5">
                          <Heading
                            as="p"
                            className="text-sm font-bold !text-blue_gray-700"
                          >
                            Tổng số khách đặt
                          </Heading>
                          <Heading
                            size="3xl"
                            as="h4"
                            className="w-[28px] h-[29px]"
                          >
                            40
                          </Heading>
                        </div>
                        <Img
                          src="images/img_vector_6.svg"
                          alt="vectorsix"
                          className="mb-[11px] w-[21%] h-[55px] self-end"
                        />
                      </div>
                      <div className="w-[92%] flex items-center justify-between gap-5 md:w-full">
                        <div className="rounded-[5px] pb-[15px] pt-[18px] w-[81%] flex flex-col items-start bg-white-A700 px-4">
                          <Heading size="xl" as="h6">
                            Loại hình được sử dụng nhiều nhất
                          </Heading>
                          <Heading
                            as="p"
                            className="mt-[19px] text-sm font-semibold"
                          >
                            Làm móng
                          </Heading>
                          <div className="bg-[url(/public/images/img_group_70.svg)] mt-[5px] h-[8px] flex items-center self-stretch rounded bg-cover bg-no-repeat md:h-auto">
                            <Img
                              src="images/img_rectangle_5991.svg"
                              alt="image"
                              className="w-[68%] h-[8px] rounded"
                            />
                          </div>
                          <Heading
                            as="p"
                            className="mt-[19px] text-sm font-semibold"
                          >
                            Làm mặt
                          </Heading>
                          <div className="bg-[url(/public/images/img_group_70.svg)] mt-[5px] h-[8px] flex items-center self-stretch rounded bg-cover bg-no-repeat md:h-auto">
                            <Img
                              src="images/img_rectangle_5991.svg"
                              alt="image"
                              className="w-[46%] h-[8px] rounded"
                            />
                          </div>
                          <div className="gap-[5px] mt-[19px] flex flex-col items-start self-stretch">
                            <Heading as="p" className="text-sm font-semibold">
                              Gội đầu dưỡng sinh
                            </Heading>
                            <div className="bg-[url(/public/images/img_group_70.svg)] h-[8px] flex items-center self-stretch rounded bg-cover bg-no-repeat md:h-auto">
                              <Img
                                src="images/img_rectangle_5991.svg"
                                alt="image"
                                className="w-[59%] h-[8px] rounded"
                              />
                            </div>
                          </div>
                          <Heading
                            as="p"
                            className="mt-[19px] text-sm font-semibold"
                          >
                            Massage
                          </Heading>
                          <div className="bg-[url(/public/images/img_group_70.svg)] mt-[5px] h-[8px] flex items-center self-stretch rounded bg-cover bg-no-repeat md:h-auto">
                            <Img
                              src="images/img_rectangle_5991.svg"
                              alt="image"
                              className="w-[83%] h-[8px] rounded"
                            />
                          </div>
                          <div className="gap-[5px] mt-[19px] flex flex-col items-start self-stretch">
                            <Heading as="p" className="text-sm font-semibold">
                              Sơn móng
                            </Heading>
                            <div className="bg-[url(/public/images/img_group_70.svg)] h-[8px] flex items-center self-stretch rounded bg-cover bg-no-repeat md:h-auto">
                              <Img
                                src="images/img_rectangle_5991.svg"
                                alt="image"
                                className="w-[33%] h-[8px] rounded"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="gap-[33px] mb-[31px] flex flex-col self-end">
                          <Heading as="p" className="text-sm font-bold">
                            70%
                          </Heading>
                          <Heading as="p" className="text-sm font-bold">
                            40%
                          </Heading>
                          <Heading as="p" className="text-sm font-bold">
                            60%
                          </Heading>
                          <Heading as="p" className="text-sm font-bold">
                            80%
                          </Heading>
                          <Heading as="p" className="text-sm font-bold">
                            20%
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="rounded-[5px] pb-[15px] pt-[17px] w-[72%] flex flex-col items-start gap-2.5 bg-white-A700 pl-4 md:w-full">
                  <Heading size="xl" as="h6" className="!text-gray-700_02">
                    Latest Orders
                  </Heading>
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "bg-gray-100_01 flex-wrap" }}
                    rowDataProps={{ className: "md:flex-col" }}
                    className="self-stretch"
                    columns={table4Columns}
                    data={table4Data}
                  />
                </div>
                <div className="mt-[61px] w-[21%] flex flex-col md:w-full">
                  <div className="flex flex-wrap justify-between gap-5">
                    <Text size="3xl" as="p" className="self-start text-gray-950">
                      Giá
                    </Text>
                    <Text size="3xl" as="p" className="self-end text-gray-950">
                      Hành động khác
                    </Text>
                  </div>
                  <div className="w-[76%] mt-7 flex items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">600.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings"
                      className="h-[7px]"
                    />
                  </div>
                  <div className="mt-[29px] w-[76%] flex items-center justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">400.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings"
                      className="h-[7px] self-end"
                    />
                  </div>
                  <div className="mt-[29px] w-[76%] flex items-center justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">500.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings"
                      className="h-[7px] self-end"
                    />
                  </div>
                  <div className="mt-[29px] w-[76%] flex items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">100.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings"
                      className="h-[7px] mt-1"
                    />
                  </div>
                  <div className="mt-[29px] w-[76%] flex items-center justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">60.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings"
                      className="h-[7px] self-end"
                    />
                  </div>
                  <div className="mt-[29px] w-[76%] flex items-start justify-between gap-5 md:w-full">
                    <Text as="p" className="text-gray-950">80.000vnd</Text>
                    <Img
                      src="images/img_settings_gray_900_07.svg"
                      alt="settings_eleven"
                      className="h-[7px] mt-1"
                    />
                  </div>
                  <Img
                    src="images/img_settings_gray_900_07.svg"
                    alt="settings"
                    className="mr-[58px] mt-[396px] h-[7px] self-end md:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
