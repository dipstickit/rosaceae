import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import Address from "../../components/Address";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OrderBill from "../../components/Checkout/OrderBill";

export default function AddressPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header/>
      <div className="pt-[5px] flex w-full flex-col items-center bg-white-A700">
        <div className="max-w-[1793px] mt-[107px] mx-auto flex w-full md:p-5">
          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            <div className="w-[62%] flex flex-col md:w-full">
              <div className="w-[28%] flex flex-wrap items-start justify-between gap-5 md:w-full">
                <Text size="9xl" as="p" className="text-gray-950">
                  Địa chỉ
                </Text>
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright"
                  className="w-[24px] h-[24px]"
                />
                <Text size="9xl" as="p" className="!text-blue_gray-300_01">
                  Thanh toán
                </Text>
              </div>
              <div className="gap-[101px] mt-[122px] flex flex-col">
                <Address className="ml-[5px] w-[93%] flex items-center md:ml-0 md:w-full" />
                <Address
                  className="ml-[5px] w-[93%] flex items-center md:ml-0 md:w-full"
                  name="S6.03 Vinhomes Grand Park"
                  tag="VĂN PHÒNG"
                  phoneNumber="(+84) 324125896"
                />
                <div className="h-[1px] w-full bg-blue_gray-100_06" />
                <Text className="ml-[5px] mb-8 md:ml-0 cursor-pointer !text-red-300">
                  Thêm địa chỉ mới
                </Text>
              </div>
            </div>
            <OrderBill />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
