import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { UserApi } from "../../api/Api";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>('')

  const forgotPassword = () => {
    UserApi.ForgotPassword(email).then(res => alert(res.data)).catch(e => console.error(e))
  }

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header className="ml-[12rem]" />
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 pb-[5px] pl-[139px] pt-[110px] md:flex-col md:pl-5 md:pt-5">
        <div className="flex w-[36%] flex-col items-start md:w-full">
          <Heading
            size="8xl"
            as="h1"
            className="!font-overpass !font-extrabold tracking-[3.60px] !text-blue_gray-800_01"
          >
            Quên Mật Khẩu?
          </Heading>
          <Text
            size="9xl"
            as="p"
            className="mt-[27px] flex tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Đừng lo lắng, điều này xảy ra với tất cả chúng ta.
              Nhập email của bạn dưới đây để khôi phục mật khẩu của bạn
            </span>

          </Text>
          <div className="mt-[61px] flex flex-col gap-[43px] self-stretch">
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-col items-start gap-3.5">
                <Heading
                  size="4xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Email
                </Heading>
                <input
                  // size="2xl"
                  type="email"
                  name="email"
                  placeholder={`example@gmail.com`}
                  className="self-stretch rounded-[40px] border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <Button
              color="black_900"
              size="11xl"
              className="w-full rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
              onClick={forgotPassword}
            >
              Gửi
            </Button>
          </div>
          <div className="relative mr-[185px] mt-12 h-[43px] w-[51%] self-end md:mr-0">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[43px] w-[82%] bg-white-A700" />
            <Text
              size="7xl"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01 flex items-center"
            >
              <div className="flex items-center">
                <span className="text-blue_gray-800_01">
                  Nếu bạn đã có tài khoản,   
                </span> 
                <a href="#" className="text-blue_gray-800_01 underline ml-1">
                  đăng nhập tại đây
                </a>
              </div>
            </Text>
          </div>
          <div className="relative mr-[185px] mt-[8px] h-[43px] w-[51%] self-end md:mr-0">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[43px] w-[82%] bg-white-A700" />
            <Text
              size="7xl"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01"
            >
              Hoặc đăng ký bằng
            </Text>
          </div>
          <div className="mt-4 flex w-[75%] justify-between gap-5 self-center md:w-full md:p-5">
            <div className="flex w-[25%] justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 px-[22px] pb-5 pt-[22px] sm:px-5 sm:pt-5">
              <Img
                src="images/img_google.svg"
                alt="google"
                className="h-[38px] w-[38px]"
              />
            </div>
            <div className="flex w-[25%] justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 px-[15px] pb-[17px] pt-[15px]">
              <Img
                src="images/img_icon_font_awesome.svg"
                alt="iconfont"
                className="h-[48px] w-[48px]"
              />
            </div>
            <div className="flex w-[25%] justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 px-[15px] pb-[21px] pt-[15px] sm:pb-5">
              <Img
                src="images/img_apple.svg"
                alt="apple"
                className="h-[44px] w-[44px]"
              />
            </div>
          </div>
        </div>
        <Img
          src="images/img_image_48.png"
          alt="imagefortyeight"
          className="h-[965px] w-[57%] object-cover md:w-full"
        />
      </div>
    </>
  );
}
