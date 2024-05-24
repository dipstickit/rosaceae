import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OrderBill from "../../components/Checkout/OrderBill";
import PaymentMethod from "../../components/Checkout/PaymentMethod";

const paymentMethods = [
  {
    payimg: "images/img_television_white_a700_17x24.svg",
    numberpay: "•••• 6754",
    expired: "Expires 06/2021",
  },
  {
    payimg: "images/img_rectangle_5999.png",
    numberpay: "•••• 5643",
    expired: "Expires 11/2025",
  },
];

export default function PaymentPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <Header className="w-full" />
      </div>
      <div className="pt-[19px] flex w-full flex-col items-center bg-white-A700">
        <div className="max-w-[1782px] mt-[95px] mx-auto flex w-full items-start justify-between gap-5 md:flex-col md:p-5">
          <div className="w-[46%] flex flex-col items-start md:w-full">
            <div className="w-[37%] flex flex-wrap items-start justify-between gap-5 md:w-full">
              <Text size="9xl" as="p" className="!text-blue_gray-300_01">
                Địa chỉ
              </Text>
              <Img src="images/img_arrow_right.svg" alt="arrowright" className="w-[24px] h-[24px]" />
              <Text size="9xl" as="p" className="text-gray-950">
                Thanh toán
              </Text>
            </div>
            <Text size="7xl" as="p" className="mt-[60px] !font-normal text-gray-950">
              Phương thức thanh toán
            </Text>
            <div className="gap-[0.5px] mt-[19px] flex flex-col self-stretch">
              {paymentMethods.map((method, index) => (
                <PaymentMethod
                  key={index}
                  payimg={method.payimg}
                  numberpay={method.numberpay}
                  expired={method.expired}
                  className="mt-4"
                />
              ))}
            </div>
            <div className="mt-[98px] flex items-center gap-4">
              <Img src="images/img_plus_gray_900_08.svg" alt="plus" className="w-[24px] h-[24px] self-start" />
              <Text as="p" className="tracking-[0.10px] self-end !text-teal-400">
                Thêm phương thức thanh toán
              </Text>
            </div>
          </div>
          <OrderBill />
        </div>
      </div>
      <Footer />
    </>
  );
}
