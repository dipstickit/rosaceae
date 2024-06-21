import React from "react";
import { Heading } from "../../Heading";
import { Img } from "../../Img";
import { RatingBar } from "../../RatingBar";
import { Text } from "../../Text";

interface Props {
  className?: string;
  coverImg: string;
  name: string;
  ratingCount: number;
  itemRate?: number;
  itemPrice?: number;
  discount?: number;
  itemType?: string;
}

export default function ItemDetail({
  coverImg = "",
  name = "Massage cổ vai gáy",
  ratingCount = 199,
  itemRate = 0,
  itemPrice = 200000,
  discount = 25,
  itemType = "Chăm sóc",
  ...props
}: Props) {
  const discountedPrice = itemPrice - (itemPrice / 100) * discount;
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center gap-5 container-xs`}
    >
      <Img
        src={coverImg}
        className="w-[40%] h-[271px] object-cover md:w-full"
      />
      <div className="w-[54%] flex justify-center md:w-full">
        <div className="flex w-full flex-col items-start">
          <Heading as="h6" className="tracking-[0.5px] !text-indigo-900">
            {name}
          </Heading>
          <div className="mt-[25px] w-[51%] flex items-start md:w-full">
            <RatingBar
              value={4}
              isEditable={false}
              color="#cfd9de"
              activeColor="#ffa331"
              size={14}
              className="flex justify-center"
            />
            <Text
              size="3xl"
              as="p"
              className="ml-[17px] !font-opensans !text-gray-400"
            >
              {ratingCount} reviews
            </Text>
            <Text
              size="3xl"
              as="p"
              className="ml-3 !font-opensans !text-blue-400"
            >
              Đánh giá
            </Text>
          </div>
          <div className="mt-[11px] h-[2px] self-stretch bg-gray-100_08" />
          <div className="mt-[22px] flex flex-wrap items-start">
            <Heading
              as="h6"
              className="tracking-[0.50px] !text-light_blue-A200"
            >
              đ{discountedPrice}
            </Heading>
            <Text
              size="xl"
              as="p"
              className="tracking-[0.50px] ml-[5px] line-through !text-gray-500"
            >
              đ{itemPrice}
            </Text>
            <Heading
              as="p"
              className="tracking-[0.5px] mt-[5px] ml-2 text-sm font-bold !text-pink-300"
            >
              {discount}% OFF
            </Heading>
          </div>
          <div className="gap-[11px] mt-[22px] w-[44%] flex flex-col md:w-full">
            <div className="flex flex-wrap justify-between gap-5">
              <Text as="p" className="self-end !text-gray-900">
                Loại hình
              </Text>
              <Text as="p" className="self-start !text-gray-900_04">
                {itemType}
              </Text>
            </div>
          </div>
          <div className="mt-[53px] h-[2px] self-stretch bg-gray-100_08" />
        </div>
      </div>
    </div>
  );
}
