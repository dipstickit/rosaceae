import React from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Img } from "../Img";
import { CiFacebook } from "react-icons/ci";
interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className, ...props }) => {
  return (
    <footer className={className} {...props}>
      <div className="relative">
        <div className="w-full bg-gray-900 py-5">
          <div className="container mx-auto flex flex-wrap items-start justify-between gap-5 md:flex-col md:p-5">
            <div className="flex flex-col items-start gap-5 md:gap-3 md:items-center ml-[2rem]">
              <div className="flex items-center gap-2">
                <Img
                  src="http://res.cloudinary.com/dpxs39hkb/image/upload/v1718989859/fcg3qiqmvsz8dnc2lods.png"
                  alt="image"
                  className="h-8 object-cover"
                />
                <Heading
                  size="xl"
                  as="h6"
                  className="!font-opensans !font-semibold !text-pink-A100"
                >
                  OSACEAE
                </Heading>
              </div>
              <Text as="p" className="!text-white-A700 mt-7">
                “For the Love of Natural Beauty and Care”
              </Text>
              <Img
                src="images/img_image_3.png"
                alt="imagethree"
                className="h-12 w-full object-cover md:h-auto mt-12"
              />
              {/* <CiFacebook/> */}
            </div>
            <div className="flex flex-col gap-5 md:gap-3">
              <Heading
                size="2xl"
                as="h5"
                className="!font-opensans !text-gray-50_08"
              >
                Bài đăng gần đây
              </Heading>
              <ul className="flex flex-col gap-2">
                <li className="mb-1">
                  <a href="About" target="_blank" rel="noreferrer">
                    <Text as="p">About</Text>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="FAQ" target="_blank" rel="noreferrer">
                    <Text as="p">FAQ</Text>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="Career" target="_blank" rel="noreferrer">
                    <Text as="p">Career</Text>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#">
                    <Text as="p">Đội của chúng tôi</Text>
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#">
                    <Text as="p">Dịch vụ</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 md:gap-3">
              <Heading
                size="2xl"
                as="h5"
                className="!font-opensans !text-gray-50_08"
              >
                Giờ làm việc
              </Heading>
              <ul className="flex flex-col gap-2">
                <li className="mb-4">
                  <a href="#">
                    <Text as="p">Thứ 2 – Thứ 6: 8am – 6pm</Text>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#">
                    <Text as="p">Thứ 7: 9am – 5pm</Text>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#">
                    <Text as="p">Chủ nhật: 9am – 4pm</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5 md:gap-3 mr-8">
              <Heading
                size="2xl"
                as="h5"
                className="!font-opensans !text-gray-50_08"
              >
                Liên hệ chúng tôi
              </Heading>
              <Text as="p" className="!text-white-A700">
                <Text className="!font-opensans">
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ
                </Text>
                <br />
                <Text className="!font-opensans">
                  {" "}
                  Email: rosaceae.makebeauty@gmail.com
                </Text>
                <br />
                <Text className="!font-opensans">
                  {" "}
                  Hotline: (+084)28 7300 5588
                </Text>
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full bg-blue_gray-900_02 py-4 px-5">
          <div className="container mx-auto flex justify-between items-center">
            <Text as="p" className="!text-white-A700 ml-[2rem] !font-opensans">
              © Copyright 2024 developed by Rosaceae. @All rights reserved.
            </Text>
            <div className="flex !font-opensans">
              <Text
                size="xl"
                as="p"
                className="!text-white-A700 !font-opensans"
              >
                Chính sách bảo mật
              </Text>
              <Text
                size="xl"
                as="p"
                className="!text-white-A700 ml-7 !font-opensans"
              >
                Điều khoản sử dụng
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
