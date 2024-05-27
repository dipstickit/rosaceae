import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";

export default function NotificationsupdatepasswordPage() {
  return (
    <>
      <Helmet>
        <title>Nguyen Huu Phuoc K16 HCM's Application4</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="pb-[285px] pt-[204px] flex w-full flex-col items-center justify-center bg-white-A700 md:py-5">
        <div className="max-w-[1242px] pl-[115px] mx-auto flex w-full flex-col items-start pr-14 md:p-5 md:px-5">
          <Heading as="h1" className="ml-[91px] md:ml-0 text-gray-950">
            Thành công
          </Heading>
          <div className="rounded-[66px] pr-[49px] pl-[50px] pb-[54px] pt-[53px] ml-[213px] mt-[59px] flex border border-solid border-indigo-300_01 bg-gray-100_03 md:ml-0 md:p-5">
            <Img
              src="images/img_checkmark_indigo_300_01.svg"
              alt="checkmark"
              className="h-[23px]"
            />
          </div>
          <Text
            as="p"
            className="leading-[31px] mt-[67px] w-[48%] self-center md:w-full text-gray-950"
          >
            <>
              Chúc mừng! Mật khẩu của bạn có <br /> Đã được thay đổi. Nhấn tiếp
              tục đăng nhập
            </>
          </Text>
          <Button
            color="black_900"
            size="11xl"
            className="w-full rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </>
  );
}
