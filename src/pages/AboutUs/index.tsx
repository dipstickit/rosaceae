// src/pages/AboutUsPage.js

import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const data = [
  { rectangle: "images/img_rectangle_6070.png" },
  { rectangle: "images/img_rectangle_6071.png" },
  { rectangle: "images/img_rectangle_6072.png" },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header />
      <div className="pt-[85px] flex w-full flex-col items-center bg-white-A700 md:py-5 sm:pl-5">
        <div className="max-w-[1478px] mt-[50px] mx-auto flex w-full flex-col">
          <div className="gap-[50px] flex flex-col items-center">
            <Img
              src="images/img_rectangle_6069.png"
              alt="image"
              className="h-[635px] w-full object-cover md:h-auto"
            />
            <div className="w-full flex flex-col items-center gap-5 md:flex-col md:items-start">
              <Heading
                size="3xl"
                as="h1"
                className="leading-[125%] text-center w-full !font-comfortaa1 capitalize !text-gray-900_06"
              >
                Về Chúng Tôi: Rosaceae - Nền Tảng Hàng Đầu Cho Trải Nghiệm Làm
                Đẹp Tại Nhà
              </Heading>
              <Text
                size="8xl"
                as="p"
                className="leading-[150%] text-center w-full !font-comfortaa1 !text-gray-800"
              >
                Chúng tôi tạo ra một môi trường thuận lợi và đáng tin cậy, cho
                phép bạn thưởng thức các dịch vụ spa và làm đẹp chuyên nghiệp mà
                không cần phải rời khỏi không gian riêng tư và thoải mái của
                ngôi nhà. Hãy để chúng tôi mang đến cho bạn trải nghiệm làm đẹp
                tuyệt vời nhất, chỉ cách đơn giản là một cuộc gọi hoặc một cú
                click
              </Text>
            </div>
          </div>
          <div className="gap-[35px] flex flex-col items-center mt-[50px]">
            <div className="gap-[37px] w-full flex flex-col items-center md:w-full">
              <Heading
                size="11xl"
                as="h2"
                className="!font-comfortaa1 !text-gray-900_06"
              >
                Câu chuyện của Rosaceae
              </Heading>
              <Text
                size="9xl"
                as="p"
                className="leading-[150%] tracking-[0.12px] w-full text-center !font-comfortaa1 !text-gray-800"
              >
                Câu chuyện của chúng tôi bắt đầu từ sự yêu thương và tôn trọng
                đối với vẻ đẹp tự nhiên, tập trung vào sự kết hợp giữa làm đẹp
                và cảm giác thư giãn. Rosaceae là không gian kết nối người dùng
                với các dịch vụ làm đẹp và trung tâm spa chất lượng, mang đến
                trải nghiệm làm đẹp độc đáo và những phút giây thư giãn trọn
                vẹn.
              </Text>
            </div>
            <div className="gap-[35px] mb-[122px] flex w-full md:flex-col">
              {data.map((d, index) => (
                <Img
                  key={"aboutus" + index}
                  src={d.rectangle}
                  alt="rectangle"
                  className="w-[31%] h-[291px] object-cover md:w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
