import React from "react";
import { Button, Text } from "./../";

interface Props {
  className?: string;
  name?: string;
  tag?: string;
  phoneNumber?: string;
}
export default function AddressCard({
  name = "S7.02 Vinhomes Grand Park",
  tag = "nHÀ",
  phoneNumber = "0909 090 909",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex w-full flex-col gap-7">
        <div className="flex items-start justify-between gap-5 sm:flex-col">
          <div className="w-[32%] flex items-start justify-center sm:w-full">
            <div className="rounded-[12px] border-[3px] p-[7px] w-[8%] border-solid border-red-300">
              <div className="rounded-[5px] w-[11px] h-[11px] bg-red-300" />
            </div>
            <Text
              size="9xl"
              as="p"
              className="tracking-[0.15px] ml-[18px] w-[77%] !font-prompt6 leading-8 text-gray-950"
            >
              {name}
            </Text>
            <div className="pr-[11px] pl-[9px] mt-[7px] flex rounded border border-solid border-red-300 pb-px">
              <Text size="md" as="p" className="uppercase !text-red-300">
                {tag}
              </Text>
            </div>
          </div>
          <div className="w-[10%] mt-2 flex items-center justify-between gap-5 sm:w-full">
            <div className="pt-[5px] flex flex-col pb-1">
              <Button className="tracking-[0.10px] text-gray-950 p-2 text-sm rounded-full">
                Sửa
              </Button>
            </div>
            <div className="h-[20px] w-px bg-blue_gray-100_06" />
            <div className="pt-[5px] flex flex-col pb-1">
              <Text as="p" className="tracking-[0.10px] !text-red-400">
                Xóa
              </Text>
            </div>
          </div>
        </div>
        <div className="gap-[18px] w-[24%] flex items-center md:w-full">
          <div className="rounded-[12px] border-[3px] w-[25px] h-[25px] border-solid border-blue_gray-100_02" />
          <Text as="p" className="self-end text-gray-950">
            {name}
          </Text>
        </div>
        <div className="ml-[43px] w-[25%] flex flex-wrap items-start justify-between gap-5 md:ml-0 md:w-full">
          <Text as="p" className="tracking-[0.10px] mt-[5px] text-gray-950">
            Liên hệ -
          </Text>
          <Text className="text-gray-950 mt-2" as="p">
            {phoneNumber}
          </Text>
        </div>
      </div>
    </div>
  );
}
