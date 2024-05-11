import React from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className, ...props }) => {
  return (
    <footer className={className} {...props}>
      <div className="relative h-[369px] w-full md:h-auto">
        <div className="w-full bg-gray-900 pt-[37px] sm:pt-5">
          <div className="flex flex-col items-start">
            <div className="mx-auto flex w-full max-w-[1562px] items-start md:flex-col md:p-5">
              <div className="mb-[18px] flex w-[25%] flex-col items-center gap-[67px] md:w-full sm:gap-[33px]">
                <div className="flex flex-col items-start gap-[67px] sm:gap-[33px]">
                  <div className="flex items-start">
                    <Img
                      src="images/img_mask_group.png"
                      alt="image"
                      className="mb-2 h-[33px] object-cover"
                    />
                    <Heading
                      size="xl"
                      as="h6"
                      className="!font-jost !font-semibold !text-pink-A100"
                    >
                      OSACEAE
                    </Heading>
                  </div>
                  <Text as="p" className="!text-white-A700">
                    “For the Love of Natural Beauty and Care”
                  </Text>
                </div>
                <Img
                  src="images/img_image_3.png"
                  alt="imagethree"
                  className="h-[52px] w-full object-cover md:h-auto"
                />
              </div>
              <div className="ml-[267px] flex flex-1 items-center justify-between gap-5 md:ml-0 md:flex-col md:self-stretch">
                <div className="flex flex-col gap-1.5">
                  <Heading
                    size="2xl"
                    as="h5"
                    className="!font-jost !text-gray-50_08"
                  >
                    Bài đăng gần đây
                  </Heading>
                  <ul className="flex flex-col gap-[18px]">
                    <li>
                      <a href="About" target="_blank" rel="noreferrer">
                        <Text as="p">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="FAQ" target="_blank" rel="noreferrer">
                        <Text as="p">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Career" target="_blank" rel="noreferrer">
                        <Text as="p">Career</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Đội của chúng tôi</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Dịch vụ</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Heading
                    size="2xl"
                    as="h5"
                    className="!font-jost !text-gray-50_08"
                  >
                    Giờ làm việc
                  </Heading>
                  <ul className="flex flex-col items-start gap-[18px]">
                    <li>
                      <a href="#">
                        <Text as="p">Thứ 2 – Thứ 6: 8am – 6pm</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Thứ 7: 9am – 5pm</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Chủ nhật: 9am – 4pm</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Heading
                size="2xl"
                as="h5"
                className="ml-[23px] mt-[37px] !font-jost !text-gray-50_08 md:ml-0"
              >
                Liên hệ chúng tôi
              </Heading>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 self-stretch bg-blue_gray-900_02 pb-4 pl-[38px] pr-[265px] pt-[19px] md:pr-5 sm:px-5">
              <Text as="p" className="!text-white-A700">
                © Copyright 2024 developed by Efurniture. @All rights reserved.
              </Text>
              <Text size="xl" as="p" className="self-end !text-white-A700">
                Chính sách bảo mật Điều khoản sử dụng
              </Text>
            </div>
          </div>
        </div>
        <Text
          as="p"
          className="absolute bottom-[18%] right-[0.00px] m-auto w-[26%] leading-[35px]"
        >
          <>
            Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ
            <br />
            Email: efurniture@gmail.com
            <br />
            Hotline: (+084)28 7300 5588
          </>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
