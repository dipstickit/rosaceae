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
      <div className="bg-white-A700">
        <div className="max-w-[1478px] mx-auto py-[50px] px-[20px] md:py-5">
          <div className="flex justify-center">
            <Text className="text-[30px] leading-[50px] mb-2 !text-gray-900_06 Arial">
              Thông Tin Về Rosaceae
            </Text>
          </div>
          <Img
            src="images/img_rectangle_6069.png"
            alt="image"
            className="h-[635px] w-full object-cover md:h-auto"
          />
          <div className="mt-[50px] flex flex-col items-center md:items-start">
            <Heading
              size="6xl"
              as="h1"
              className="leading-[125%] text-center !font-comfortaa1 capitalize !text-gray-900_06"
            >
              Về Chúng Tôi: Rosaceae - Nền Tảng Hàng Đầu Cho Trải Nghiệm Làm Đẹp
              Tại Nhà
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="mt-5 leading-[150%] text-center !font-comfortaa1 !text-gray-800"
            >
              Chúng tôi tạo ra một môi trường thuận lợi và đáng tin cậy, cho
              phép bạn thưởng thức các dịch vụ spa và làm đẹp chuyên nghiệp mà
              không cần phải rời khỏi không gian riêng tư và thoải mái của ngôi
              nhà. Hãy để chúng tôi mang đến cho bạn trải nghiệm làm đẹp tuyệt
              vời nhất, chỉ cách đơn giản là một cuộc gọi hoặc một cú click.
            </Text>
          </div>
          <div className="mt-[50px] flex flex-col items-center md:items-start">
            <Heading
              size="6xl"
              as="h2"
              className="!font-comfortaa1 !text-gray-900_06"
            >
              Câu chuyện của Rosaceae
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="mt-3 leading-[150%] text-center !font-comfortaa1 !text-gray-800"
            >
              Câu chuyện của chúng tôi bắt đầu từ sự yêu thương và tôn trọng đối
              với vẻ đẹp tự nhiên, tập trung vào sự kết hợp giữa làm đẹp và cảm
              giác thư giãn. Rosaceae là không gian kết nối người dùng với các
              dịch vụ làm đẹp và trung tâm spa chất lượng, mang đến trải nghiệm
              làm đẹp độc đáo và những phút giây thư giãn trọn vẹn.
            </Text>
            <div className="mt-[50px] flex justify-center gap-[20px] md:flex-col md:items-center">
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
