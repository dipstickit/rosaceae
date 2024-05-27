import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import HeaderAdmin from "../../components/HeaderAdmin";
import DashboardDesignRowbagOne from "../../components/DashboardDesignRowbagOne";
import QuantityAdmin from "../../components/QuantityAdmin";
import Sidebar from "../../components/Sidebar";

import { Suspense } from "react";
export default function DashboardDesignPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full border border-solid border-gray-50_07 bg-gray-50_03">
        <div className="flex items-start md:flex-col">
          <Sidebar />
          <div className="flex flex-1 flex-col gap-8 md:self-stretch md:p-5 ml-5">
            <HeaderAdmin className="mt-4" />
            <div className="w-[95%] flex flex-col gap-8 md:w-full">
              <div className="gap-[31px] flex md:flex-col">
                <div className="rounded-[20px] px-[25px] gap-[46px] pt-[25px] flex flex-1 flex-col border border-solid border-gray-50_04 bg-white-A700 pb-8 shadow-xs md:self-stretch sm:p-5">
                  <div className="flex items-start justify-between gap-5">
                    <div className="gap-[5px] flex flex-col items-start">
                      <Heading as="h1" className="!font-semibold">
                        Doanh số hôm nay
                      </Heading>
                      <Text size="3xl" as="p" className="!text-blue_gray-500">
                        Tóm tắt doanh số
                      </Text>
                    </div>
                    <Button
                      color="indigo_100"
                      size="xl"
                      variant="outline"
                      leftIcon={
                        <Img
                          src="images/img_twitter.svg"
                          alt="twitter"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      className="min-w-[100px] mt-1.5 gap-2 rounded-lg font-medium"
                    >
                      Xuất file
                    </Button>
                  </div>
                  <div className="gap-[31px] flex md:flex-col">
                    <QuantityAdmin />
                    <div className="rounded-[16px] pb-[18px] flex flex-col items-start gap-2.5 bg-orange-50 px-3 pt-5">
                      <Button
                        color="deep_orange_A100"
                        size="2xl"
                        shape="circle"
                        className="!rounded-[20px] w-[40px] ml-2 md:ml-0"
                      >
                        <Img src="images/img_settings_white_a700.svg" />
                      </Button>
                      <Heading
                        size="3xl"
                        as="h2"
                        className="ml-2 !font-semibold !text-blue_gray-900 md:ml-0"
                      >
                        300
                      </Heading>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text
                          size="3xl"
                          as="p"
                          className="ml-2 !font-medium !text-blue_gray-700_01 md:ml-0"
                        >
                          Tổng số dịch vụ
                        </Text>
                        <Text
                          as="p"
                          className="!font-medium !text-blue-A200_02"
                        >
                          +5% so với ngày hôm qua
                        </Text>
                      </div>
                    </div>
                    <div className="rounded-[16px] pb-[18px] flex flex-col items-start gap-2.5 bg-green-50 px-3 pt-5">
                      <Button
                        color="green_500"
                        size="2xl"
                        shape="circle"
                        className="!rounded-[20px] w-[40px] ml-2 md:ml-0"
                      >
                        <Img src="images/img_sort.svg" />
                      </Button>
                      <Heading
                        size="3xl"
                        as="h3"
                        className="ml-2 !font-semibold !text-blue_gray-900 md:ml-0"
                      >
                        5
                      </Heading>
                      <div className="flex flex-col items-start gap-1.5">
                        <Text
                          size="3xl"
                          as="p"
                          className="ml-2 !font-medium !text-blue_gray-700_01 md:ml-0"
                        >
                          Lượt đặt
                        </Text>
                        <Text
                          as="p"
                          className="!font-medium !text-blue-A200_02"
                        >
                          +5% so với ngày hôm qua
                        </Text>
                      </div>
                    </div>
                    <div className="rounded-[16px] px-[11px] pb-[17px] flex flex-col items-start gap-2.5 bg-purple-50 pt-5">
                      <Button
                        color="deep_purple_A100"
                        size="2xl"
                        shape="circle"
                        className="!rounded-[20px] ml-[9px] w-[40px] md:ml-0"
                      >
                        <Img src="images/img_user.svg" />
                      </Button>
                      <Heading
                        size="3xl"
                        as="h4"
                        className="ml-[9px] !font-semibold !text-blue_gray-900 md:ml-0"
                      >
                        10
                      </Heading>
                      <div className="gap-[7px] flex flex-col items-center">
                        <Text
                          size="3xl"
                          as="p"
                          className="!font-medium !text-blue_gray-700_01"
                        >
                          Khách hàng mới
                        </Text>
                        <Text
                          as="p"
                          className="!font-medium !text-blue-A200_02"
                        >
                          +5% so với ngày hôm qua
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[20px] bg-[url(/public/images/img_visitor_insights.svg)] px-[21px] pt-[26px] w-[40%] h-[348px] flex items-center justify-center bg-cover bg-no-repeat pb-6 md:h-auto md:w-full sm:p-5">
                  <div className="gap-[27px] flex w-full flex-col items-start">
                    <Heading as="h5" className="ml-2 !font-semibold md:ml-0">
                      Thông tin chi tiết về khách truy cập
                    </Heading>
                    <div className="gap-[39px] flex flex-col items-center self-stretch">
                      <div className="self-stretch">
                        <div className="flex items-start justify-between gap-5 sm:flex-col">
                          <div className="gap-[22px] mb-1.5 flex flex-col items-end">
                            <Text as="p" className="!text-blue_gray-400_b2">
                              400
                            </Text>
                            <Text as="p" className="!text-blue_gray-400_b2">
                              300
                            </Text>
                            <Text as="p" className="!text-blue_gray-400_b2">
                              200
                            </Text>
                            <Text
                              as="p"
                              className="w-[19px] h-[18px] !text-blue_gray-400_b2"
                            >
                              100
                            </Text>
                            <Text as="p" className="!text-blue_gray-400_b2">
                              0
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col sm:self-stretch">
                            <div className="h-[169px] relative md:h-auto">
                              <Img
                                src="images/img_frame_10.svg"
                                alt="image"
                                className="rounded-[12px] h-[163px] w-full"
                              />
                              <div className="rounded-[7px] top-[12.00px] right-[32%] w-[14px] h-[14px] absolute m-auto bg-red-A200_01" />
                            </div>
                            <div className="flex flex-wrap self-start">
                              <Text
                                size="s"
                                as="p"
                                className="self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Jan
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-7 self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Feb
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-4 self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Mar
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-7 self-end !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Apr
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-7 self-end !font-epilogue8 !text-blue_gray-700_03"
                              >
                                May
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-[26px] self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Jun
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-7 self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Jun
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-[30px] self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Jul
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-[17px] self-end !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Sept
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-6 self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Oct
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-7 self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Nov
                              </Text>
                              <Text
                                size="s"
                                as="p"
                                className="ml-[27px] self-start !font-epilogue8 !text-blue_gray-700_03"
                              >
                                Des
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[70%] flex justify-center gap-4 rounded-md md:w-full sm:flex-col">
                        <div className="pr-[9px] flex w-full justify-center gap-1 rounded-md sm:w-full">
                          <div className="w-[12px] h-[12px] rounded-md bg-purple-A700" />
                          <Text
                            as="p"
                            className="!font-epilogue8 !font-medium !text-blue_gray-700_03"
                          >
                            KH trung thành
                          </Text>
                        </div>
                        <div className="flex w-full justify-center gap-1 rounded-md sm:w-full">
                          <div className="w-[12px] h-[12px] rounded-md bg-red-500_01" />
                          <Text
                            as="p"
                            className="!font-epilogue8 !font-medium !text-blue_gray-700_03"
                          >
                            Khách hàng mới
                          </Text>
                        </div>
                        <div className="flex w-full justify-center gap-1 rounded-md sm:w-full">
                          <div className="w-[12px] h-[12px] rounded-md bg-green-500" />
                          <Text
                            as="p"
                            className="!font-epilogue8 !font-medium !text-blue_gray-700_03"
                          >
                            Khách hàng độc lạ
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="gap-[27px] flex md:flex-col">
                  <div className="w-[44%] flex flex-col gap-8 md:w-full">
                    <div className="rounded-[20px] gap-[23px] flex flex-col items-start border border-solid border-gray-50_04 bg-white-A700 p-7 shadow-xs sm:p-5">
                      <Heading as="h6" className="!font-semibold">
                        Tổng doanh thu
                      </Heading>
                      <div className="self-stretch">
                        <div className="flex flex-col items-end">
                          <div className="flex flex-col gap-1.5 self-stretch">
                            <div className="gap-[18px] flex items-center sm:flex-col ">
                              <Text as="p" className="text-gray-950">
                                25k
                              </Text>
                              <div className="mb-[7px] h-px flex-1 self-end bg-blue_gray-50_01 sm:self-stretch" />
                            </div>
                            <div className="flex items-start justify-between gap-5 sm:flex-col">
                              <div className="mt-[7px] flex flex-col items-start gap-3.5">
                                <Text as="p" className="text-gray-950">
                                  20k
                                </Text>
                                <Text
                                  as="p"
                                  className="w-[18px] h-[18px] text-gray-950"
                                >
                                  15k
                                </Text>
                                <Text
                                  as="p"
                                  className="w-[18px] h-[18px] text-gray-950"
                                >
                                  10k
                                </Text>
                                <Text as="p" className="text-gray-950">
                                  5k
                                </Text>
                                <Text as="p" className="text-gray-950">
                                  0
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-center sm:self-stretch">
                                <div className="w-[91%] flex items-end justify-between gap-5 md:w-full">
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image"
                                    className="w-[6%] h-[88px]"
                                  />
                                  <Img
                                    src="images/img_group_14_copy.svg"
                                    alt="image"
                                    className="w-[6%] h-[108px]"
                                  />
                                  <Img
                                    src="images/img_group_14_copy.svg"
                                    alt="image"
                                    className="w-[6%] h-[108px]"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image"
                                    className="w-[6%] h-[100px]"
                                  />
                                  <Img
                                    src="images/img_group_14.svg"
                                    alt="image"
                                    className="w-[6%] h-[76px]"
                                  />
                                  <Img
                                    src="images/img_group_14_copy.svg"
                                    alt="image"
                                    className="w-[6%] h-[106px]"
                                  />
                                  <Img
                                    src="images/img_group_14_copy.svg"
                                    alt="image"
                                    className="w-[6%] h-[134px]"
                                  />
                                </div>
                                <div className="h-px w-full self-stretch bg-blue_gray-50_01" />
                              </div>
                            </div>
                          </div>
                          <div className="mr-[11px] mt-[5px] flex flex-wrap md:mr-0">
                            <Text as="p" className="self-start text-gray-950">
                              Thứ 2
                            </Text>
                            <Text
                              as="p"
                              className="ml-[45px] text-gray-950 self-start"
                            >
                              Thứ 3
                            </Text>
                            <Text
                              as="p"
                              className="ml-11 sel text-gray-950 f-start"
                            >
                              Thứ 4
                            </Text>
                            <Text
                              as="p"
                              className="ml-[45px] text-gray-950 self-start"
                            >
                              Thứ 5
                            </Text>
                            <Text
                              as="p"
                              className="ml-[45px] text-gray-950 self-start"
                            >
                              Thứ 6
                            </Text>
                            <Text
                              as="p"
                              className="ml-[45px] text-gray-950 self-start"
                            >
                              Thứ 7
                            </Text>
                            <Text as="p" className="ml-[35px] text-gray-950">
                              Chủ nhật
                            </Text>
                          </div>
                          <div className="mr-[168px] mt-[22px] w-[51%] flex justify-between gap-5 md:mr-0 md:w-full">
                            <div className="w-[40%] flex items-center justify-center gap-1.5">
                              <div className="rounded-[5px] w-[11px] h-[11px] self-start bg-light_blue-A700" />
                              <Text
                                as="p"
                                className="!font-opensans8 !text-blue_gray-900_05"
                              >
                                Online Sales
                              </Text>
                            </div>
                            <div className="w-[41%] flex items-center justify-center gap-1.5">
                              <div className="rounded-[5px] w-[11px] h-[11px] self-start bg-green-A400" />
                              <Text
                                as="p"
                                className="!font-opensans8 !text-blue_gray-900_05"
                              >
                                Offline Sales
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[20px] py-[25px] gap-[15px] flex flex-col items-start border border-solid border-gray-50_04 bg-white-A700 shadow-xs sm:py-5">
                      <Heading
                        as="h5"
                        className="ml-[26px] !font-semibold md:ml-0"
                      >
                        Dịch vụ hàng đầu
                      </Heading>
                      <div className="self-stretch">
                        <div className="pr-[57px] pl-[26px] pb-[15px] flex items-start justify-between gap-5 md:pr-5 sm:px-5">
                          <div className="mb-[5px] w-[14%] flex flex-wrap justify-between gap-5">
                            <Text
                              size="lg"
                              as="p"
                              className="!font-opensans8 !text-blue_gray-300"
                            >
                              #
                            </Text>
                            <Text
                              size="lg"
                              as="p"
                              className="!font-opensans8 !text-blue_gray-300"
                            >
                              Tên
                            </Text>
                          </div>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-opensans8 !text-blue_gray-300"
                          >
                            Phổ biến
                          </Text>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-opensans8 !text-blue_gray-300"
                          >
                            Tỉ lệ
                          </Text>
                        </div>
                        <div className="flex flex-col items-center gap-2 pt-2">
                          <div className="w-[90%] flex items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="w-[22%] flex flex-wrap items-center justify-between gap-5 self-end sm:w-full">
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                01
                              </Text>
                              <Text
                                size="xl"
                                as="p"
                                className="self-end !text-blue_gray-700_02"
                              >
                                Làm móng
                              </Text>
                            </div>
                            <div className="w-[47%] flex items-center justify-between gap-5 sm:w-full">
                              <div className="mb-[9px] w-[65%] h-[4px] relative self-end rounded-sm bg-blue-100">
                                <div
                                  style={{ width: "78%" }}
                                  className="absolute h-full rounded-sm bg-light_blue-A700"
                                />
                              </div>
                              <Text
                                size="lg"
                                as="p"
                                className="py-[3px] flex items-center justify-center rounded-lg border border-solid border-light_blue-A700 bg-gray-50_01 px-3 !font-opensans8 !text-light_blue-A700"
                              >
                                45%
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_02_ui_elements_6.svg"
                            alt="02uielements"
                            className="h-[21px] w-full md:h-auto"
                          />
                          <div className="w-[90%] flex items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="w-[19%] flex flex-wrap justify-between gap-5 self-end sm:w-full">
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                02
                              </Text>
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                Làm tóc
                              </Text>
                            </div>
                            <div className="w-[47%] flex items-center justify-between gap-5 sm:w-full">
                              <div className="mb-[9px] w-[65%] h-[4px] relative self-end rounded-sm bg-green-A200">
                                <div
                                  style={{ width: "61%" }}
                                  className="absolute h-full rounded-sm bg-green-A400"
                                />
                              </div>
                              <Text
                                size="lg"
                                as="p"
                                className="py-[3px] flex items-center justify-center rounded-lg border border-solid border-green-A400_03 bg-gray-100_07 px-3 !font-opensans8 !text-green-A400_02"
                              >
                                29%
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_02_ui_elements_6.svg"
                            alt="02uielements"
                            className="h-[21px] w-full md:h-auto"
                          />
                          <div className="w-[90%] flex items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="w-[23%] flex flex-wrap items-center justify-between gap-5 self-end sm:w-full">
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                03
                              </Text>
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                Trang điểm
                              </Text>
                            </div>
                            <div className="w-[47%] flex items-center justify-between gap-5 sm:w-full">
                              <div className="mb-[9px] w-[65%] h-[4px] relative self-end rounded-sm bg-deep_purple-A100_01">
                                <div
                                  style={{ width: "56%" }}
                                  className="absolute h-full rounded-sm bg-deep_purple-A200"
                                />
                              </div>
                              <Text
                                size="lg"
                                as="p"
                                className="py-[3px] flex items-center justify-center rounded-lg border border-solid border-deep_purple-A200 bg-gray-50 px-3 !font-opensans8 !text-deep_purple-A200"
                              >
                                18%
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_02_ui_elements_6.svg"
                            alt="02uielements"
                            className="h-[21px] w-full md:h-auto"
                          />
                          <div className="w-[90%] flex items-center justify-between gap-5 md:w-full sm:flex-col">
                            <div className="w-[17%] flex flex-wrap items-center justify-between gap-5 self-end sm:w-full">
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                04
                              </Text>
                              <Text
                                size="xl"
                                as="p"
                                className="!text-blue_gray-700_02"
                              >
                                Nối mi
                              </Text>
                            </div>
                            <div className="w-[47%] flex items-center justify-between gap-5 sm:w-full">
                              <div className="mb-[9px] w-[65%] h-[4px] relative self-end rounded-sm bg-orange-100_01">
                                <div
                                  style={{ width: "33%" }}
                                  className="absolute h-full rounded-sm bg-amber-800"
                                />
                              </div>
                              <Text
                                size="lg"
                                as="p"
                                className="py-[3px] flex items-center justify-center rounded-lg border border-solid border-orange-600 bg-orange-50_01 px-3 !font-opensans8 !text-orange-600"
                              >
                                25%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 md:self-stretch">
                    <div className="flex flex-col gap-8">
                      <div className="gap-[31px] flex md:flex-col">
                        <div className="rounded-[20px] px-[11px] gap-[18px] pb-[15px] pt-[27px] flex flex-1 flex-col items-start border border-solid border-gray-50_04 bg-white-A700 shadow-xs md:self-stretch sm:pt-5">
                          <Heading
                            as="h5"
                            className="ml-[11px] !font-semibold md:ml-0"
                          >
                            Sự hài lòng của khách hàng
                          </Heading>
                          <div className="flex flex-col items-center gap-3 self-stretch">
                            <div className="bg-[url(/public/images/img_group_188.png)] pt-[72px] h-[167px] self-stretch bg-cover bg-no-repeat md:h-auto md:pt-5">
                              <Img
                                src="images/img_group_16.png"
                                alt="image_ten"
                                className="h-[93px] w-full object-cover md:h-auto"
                              />
                            </div>
                            <Img
                              src="images/img_02_ui_elements_6.svg"
                              alt="02uielements"
                              className="h-[21px] w-full md:h-auto"
                            />
                            <div className="mr-[45px] flex items-center self-end md:mr-0">
                              <div className="flex flex-col items-start">
                                <div className="flex items-start gap-2">
                                  <Img
                                    src="images/img_close.svg"
                                    alt="close"
                                    className="h-[9px] mt-1.5"
                                  />
                                  <Text
                                    size="3xl"
                                    as="p"
                                    className="!text-blue_gray-300 mr-5"
                                  >
                                    Tháng trước
                                  </Text>
                                </div>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="ml-[27px] !font-medium !text-blue_gray-900_05 md:ml-0"
                                >
                                  $3,004
                                </Text>
                              </div>
                              <div className="h-[24px] w-px self-start bg-blue_gray-200" />
                              <div className="ml-3.5 flex flex-col items-start">
                                <div className="flex items-start gap-2">
                                  <Img
                                    src="images/img_close_green_a400_01.svg"
                                    alt="close"
                                    className="mt-[5px] h-[9px]"
                                  />
                                  <Text
                                    size="3xl"
                                    as="p"
                                    className="!text-blue_gray-300"
                                  >
                                    Tháng hiện tại
                                  </Text>
                                </div>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="ml-[27px] !font-medium !text-blue_gray-900_05 md:ml-0"
                                >
                                  $4,504
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[20px] bg-[url(/public/images/img_visitor_insights.svg)] pr-[18px] pl-[19px] pt-[26px] w-[47%] h-[351px] flex items-center justify-center bg-cover bg-no-repeat pb-5 md:h-auto md:w-full sm:pt-5">
                          <div className="gap-[13px] flex w-full flex-col items-start">
                            <Heading as="h5" className="!font-semibold">
                              Mục tiêu và thực tế
                            </Heading>
                            <div className="flex items-end gap-3.5 self-stretch">
                              <div className="gap-[9px] flex w-full flex-col items-center">
                                <Img
                                  src="images/img_group_1000002782.svg"
                                  alt="image_eleven"
                                  className="h-[102px] w-full md:h-auto"
                                />
                                <Text size="s" as="p">
                                  Jan
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-center gap-2">
                                <Img
                                  src="images/img_group_1000002780.svg"
                                  alt="image_twelve"
                                  className="h-[92px] w-full md:h-auto"
                                />
                                <Text size="s" as="p">
                                  Feb
                                </Text>
                              </div>
                              <div className="gap-[9px] flex w-full flex-col items-end">
                                <Img
                                  src="images/img_group_1000002782.svg"
                                  alt="image_thirteen"
                                  className="h-[116px] w-full md:h-auto"
                                />
                                <Text
                                  size="s"
                                  as="p"
                                  className="mr-[7px] md:mr-0"
                                >
                                  Mar
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end gap-2.5">
                                <Img
                                  src="images/img_group_1000002780.svg"
                                  alt="imageteen"
                                  className="h-[92px] w-full md:h-auto"
                                />
                                <Text
                                  size="s"
                                  as="p"
                                  className="mr-[7px] md:mr-0"
                                >
                                  Apr
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-end gap-2.5">
                                <Img
                                  src="images/img_group_1000002782.svg"
                                  alt="image_fifteen"
                                  className="h-[133px] w-full md:h-auto"
                                />
                                <Text
                                  size="s"
                                  as="p"
                                  className="mr-1.5 md:mr-0"
                                >
                                  May
                                </Text>
                              </div>
                              <div className="gap-[9px] flex w-full flex-col items-center">
                                <Img
                                  src="images/img_group_1000002782.svg"
                                  alt="imageteen"
                                  className="h-[133px] w-full md:h-auto"
                                />
                                <Text size="s" as="p">
                                  June
                                </Text>
                              </div>
                              <div className="flex w-full flex-col items-center gap-2.5">
                                <Img
                                  src="images/img_group_1000002782.svg"
                                  alt="imageteen"
                                  className="h-[133px] w-full md:h-auto"
                                />
                                <Text size="s" as="p">
                                  July
                                </Text>
                              </div>
                            </div>
                            <div className="gap-[15px] w-[70%] flex flex-col md:w-full md:flex-row sm:flex-col">
                              <Suspense fallback={<div>Loading feed...</div>}>
                                {[...Array(2)].map((d, index) => (
                                  <DashboardDesignRowbagOne
                                    realitysalestext="Doanh số thực tế"
                                    globaltext="Toàn cầu"
                                    numbertext="8.823"
                                    key={"listbagone3" + index}
                                  />
                                ))}
                              </Suspense>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 md:flex-col">
                        <div className="h-[351px] relative flex-1 md:w-full md:flex-none md:self-stretch">
                          <Img
                            src="images/img_visitor_insights.svg"
                            alt="container"
                            className="rounded-[20px] h-[351px] absolute bottom-0 left-0 right-0 top-0 m-auto w-full"
                          />
                          <div className="left-[0.00px] gap-[38px] w-[94%] absolute bottom-0 top-0 my-auto flex h-max flex-col items-start">
                            <Heading
                              as="h5"
                              className="ml-7 !font-semibold md:ml-0"
                            >
                              Bản đồ dịch theo quốc gia
                            </Heading>
                            <Img
                              src="images/img_world_1.svg"
                              alt="worldone"
                              className="h-[236px] w-full md:h-auto"
                            />
                          </div>
                        </div>
                        <div className="rounded-[26px] pb-[13px] pt-[27px] w-[47%] flex flex-col items-center border border-solid border-blue_gray-50_02 bg-white-A700 shadow-xs md:w-full sm:pt-5">
                          <Heading as="h5" className="!font-semibold">
                            Khối lượng so với cấp độ dịch vụ
                          </Heading>
                          <div className="mt-[21px] w-[74%] flex items-end justify-between gap-5 md:w-full md:p-5">
                            <div className="pt-[60px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[78px] rounded-sm bg-green-A400" />
                            </div>
                            <div className="pt-[78px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[89px] rounded-sm bg-green-A400" />
                            </div>
                            <div className="pt-[102px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[36px] rounded-sm bg-green-A400" />
                            </div>
                            <div className="pt-[84px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[41px] rounded-sm bg-green-A400" />
                            </div>
                            <div className="pt-[60px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[36px] rounded-sm bg-green-A400" />
                            </div>
                            <div className="pt-[42px] w-[4%] rounded-sm bg-light_blue-A700 md:pt-5">
                              <div className="w-[12px] h-[61px] rounded-sm bg-green-A400" />
                            </div>
                          </div>
                          <div className="gap-[9px] mt-2.5 flex flex-col items-center self-stretch">
                            <Img
                              src="images/img_02_ui_elements_6.svg"
                              alt="02uielements"
                              className="h-[21px] w-full md:h-auto"
                            />
                            <div className="w-[55%] flex items-center gap-5 md:w-full">
                              <div className="gap-[3px] flex flex-1 flex-col items-start">
                                <div className="flex items-center gap-2.5 self-stretch">
                                  <div className="rounded-[5px] w-[10px] h-[10px] bg-light_blue-A700" />
                                  <Text
                                    size="3xl"
                                    as="p"
                                    className="!text-blue_gray-300"
                                  >
                                    Volume
                                  </Text>
                                </div>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="ml-5 !font-medium !text-blue_gray-900_05 md:ml-0"
                                >
                                  1,135
                                </Text>
                              </div>
                              <div className="h-[24px] w-px self-start bg-blue_gray-200" />
                              <div className="flex flex-1 flex-col items-start">
                                <div className="flex items-start gap-2.5 self-stretch">
                                  <div className="rounded-[5px] mt-[5px] w-[10px] h-[10px] bg-green-A400" />
                                  <Text
                                    size="3xl"
                                    as="p"
                                    className="!text-blue_gray-300"
                                  >
                                    Dịch vụ
                                  </Text>
                                </div>
                                <Text
                                  size="xl"
                                  as="p"
                                  className="ml-5 !font-medium !text-blue_gray-900_05 md:ml-0"
                                >
                                  635
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
