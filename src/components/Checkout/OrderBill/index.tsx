import React from "react";
import { Button, Input, Img, Text } from "../..";

interface Props {
  className?: string;
  price?: string;
  quantity?: string;
  voucher?: string;
  cartTotal?: string;
  delivery?: string;
}

const OrderBill: React.FC<Props> = ({
  className,
  price = "449.000vnd",
  quantity = "2",
  voucher = "0vnd",
  cartTotal = "499.000vnd",
  delivery = "26 Tháng 2, 2024",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${className} flex flex-col items-start justify-center w-[30%] md:w-full pt-8 pb-[205px] gap-[29px] px-[31px] md:pb-5 sm:p-5 border-blue_gray-100_06 border border-solid bg-white-A700 rounded-sm`}
    >
      <Text size="9xl" as="p" className="!font-alata8 text-gray-950">
        Tóm tắt theo thứ tự
      </Text>
      <div className="gap-[30px] flex flex-col items-start self-stretch text-gray-950">
        <div className="flex flex-col gap-6 self-stretch">
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p" className="!font-alata8 text-gray-950">
              Giá
            </Text>
            <Text as="p" className="!font-alata8 text-gray-950">
              {price}
            </Text>
          </div>
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p" className="!font-alata8 text-gray-950">
              Số lượng
            </Text>
            <Text as="p" className="!font-alata8 text-gray-950">
              {quantity}
            </Text>
          </div>
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p" className="!font-alata8 text-gray-950">
              Áp dụng mã giảm giá
            </Text>
            <Text as="p" className="!font-alata8 text-gray-950">
              {voucher}
            </Text>
          </div>
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p" className="!font-alata8 text-gray-950">
              Tổng
            </Text>
            <Text as="p" className="!font-alata8 text-gray-950">
              {cartTotal}
            </Text>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Text as="p" className="!font-alata8 text-gray-950">
              Dự kiến thực hiện
            </Text>
            <Text as="p" className="tracking-[0.10px] self-end !font-alata8 text-gray-950">
              {delivery}
            </Text>
          </div>
          <Input
            color="blue_gray_100_06"
            size="sm"
            variant="outline"
            name="couponcode_one"
            placeholder="Coupon Code"
            suffix={<Img src="images/img_trailing_icon.svg" alt="trailing icon" className="h-[24px] w-[24px]" />}
          />
        </div>
        <Button color="black_900" shape="round" className="w-full">
          Tiến hành thanh toán
        </Button>
      </div>
    </div>
  );
};

export default OrderBill;
