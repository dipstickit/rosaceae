import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="sm:gap-[94px] md:gap-[141px] gap-[188px] pt-[5px] flex w-full flex-col bg-white-A700">
        <Header />
        <div className="max-w-[1497px] gap-[43px] mx-auto flex w-full flex-col items-center md:p-5">
          <div className="w-[88%] flex flex-col items-start md:w-full">
            <div className="z-[1] ml-[69px] w-[34%] relative flex flex-col gap-5 md:ml-0 md:w-full">
              <Heading
                size="8xl"
                as="h1"
                className="!font-suwannaphum6 !text-gray-900_06"
              >
                Thông tin liên hệ
              </Heading>
              <Text
                size="5xl"
                as="p"
                className="leading-[150%] !font-montserrat6 !text-gray-800"
              >
                Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn, giải đáp
                mọi thắc mắc hoặc để trải nghiệm sự yên bình của Rosaceae. Chúng
                tôi luôn sẵn lòng hỗ trợ bạn trong hành trình làm đẹp của mình,
                đảm bảo bạn có trải nghiệm thư giãn và thoải mái nhất có thể.
                Hãy để Rosaceae chăm sóc bạn từng chút một!
              </Text>
            </div>
            <div className="gap-[42px] mt-[-239px] relative flex items-center self-stretch bg-white-A700 md:flex-col">
              <div className="pt-[279px] w-[44%] rounded-sm border border-solid border-blue_gray-100_01 bg-gray-900_07_01 px-14 md:w-full md:p-5 md:px-5 md:pt-5">
                <div className="flex flex-col gap-10">
                  <div className="gap-[30px] flex flex-col items-start">
                    <div className="flex items-center gap-3.5">
                      <div className="rounded-[25px] px-[11px] pt-[11px] flex border border-solid border-orange-700 pb-3">
                        <Img
                          src="images/img_ph_map_pin.svg"
                          alt="phmappin"
                          className="w-[26px] h-[26px]"
                        />
                      </div>
                      <Text as="p" className="!text-gray-800">
                        Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ
                      </Text>
                    </div>
                    <div className="pr-[5px] flex items-center gap-3.5">
                      <Button
                        color="orange_700"
                        size="3xl"
                        variant="outline"
                        className="rounded-[24px] px-[9px] w-[49px]"
                      >
                        <Img src="images/img_lock.svg" />
                      </Button>
                      <Text
                        size="5xl"
                        as="p"
                        className="mb-3 self-end !font-montserrat6 !font-medium !text-gray-800"
                      >
                        <span className="text-gray-800">@</span>
                        <span className="font-normal text-gray-800">
                          efurniture@gmail.com
                        </span>
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        color="orange_700"
                        size="3xl"
                        variant="outline"
                        className="rounded-[24px] px-[7px] w-[49px]"
                      >
                        <Img src="images/img_fluent_call_24_regular.svg" />
                      </Button>
                      <Text as="p" className="!text-gray-800">
                        (+84)28 7300 5588
                      </Text>
                    </div>
                  </div>
                  <div className="w-[69%] flex justify-between gap-5 md:w-full">
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px]"
                    >
                      <Img src="images/img_iconoir_instagram.svg" />
                    </Button>
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px]"
                    >
                      <Img src="images/img_ri_youtube_fill.svg" />
                    </Button>
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px]"
                    >
                      <Img src="images/img_mdi_twitter.svg" />
                    </Button>
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px]"
                    >
                      <Img src="images/img_bi_pinterest.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="gap-[30px] pt-[19px] flex flex-1 flex-col md:self-stretch md:p-5">
                <Heading
                  size="8xl"
                  as="h2"
                  className="!font-suwannaphum6 !text-gray-900_06"
                >
                  Bạn có câu hỏi nào không?
                </Heading>
                <div className="gap-[29px] flex flex-col">
                  <div className="gap-[23px] flex flex-col">
                    <div className="h-px bg-blue_gray-100_04" />
                    <div className="flex flex-wrap items-center gap-5 self-start">
                      <Text
                        size="6xl"
                        as="p"
                        className="!font-syne6 capitalize !text-orange-700"
                      >
                        Giờ làm việc
                      </Text>
                      <Text
                        size="7xl"
                        as="p"
                        className="!font-lato6 capitalize !text-black-900"
                      >
                        <span className="font-montserrat6 text-lg font-semibold text-gray-900_06">
                          Thứ 2 – Thứ 6:
                        </span>
                        <span className="text-[19px] font-montserrat6 font-semibold text-gray-700">
                          &nbsp;
                        </span>
                        <span className="font-montserrat6 text-lg text-gray-700">
                          08 aM to 06 pM
                        </span>
                      </Text>
                      <Text
                        size="7xl"
                        as="p"
                        className="!font-lato6 capitalize !text-black-900"
                      >
                        <span className="text-[19px] font-montserrat6 font-semibold text-gray-900_06">
                          Thứ 7 & CN:
                        </span>
                        <span className="text-[19px] font-montserrat6 font-semibold text-gray-700">
                          &nbsp;
                        </span>
                        <span className="text-[19px] font-montserrat6 text-gray-700">
                          09 AM To 05 PM
                        </span>
                      </Text>
                    </div>
                  </div>
                  <div className="gap-[29px] flex flex-col items-start">
                    <div className="flex flex-col gap-8 self-stretch">
                      <div className="flex flex-col gap-8">
                        <div className="gap-[26px] flex md:flex-col">
                          <Input
                            color="blue_gray_100"
                            size="md"
                            variant="outline"
                            name="one_one"
                            placeholder={`Tên của bạn`}
                            className="w-full rounded-sm"
                          />
                          <Input
                            color="blue_gray_100"
                            size="md"
                            variant="outline"
                            type="email"
                            name="email"
                            placeholder={`Email`}
                            className="w-full rounded-sm"
                          />
                        </div>
                        <div className="gap-[26px] flex md:flex-col">
                          <Input
                            color="blue_gray_100"
                            size="md"
                            variant="outline"
                            name="one_three"
                            placeholder={`Dịch vụ bạn muốn làm?`}
                            className="w-full"
                          />
                          <Input
                            color="blue_gray_100"
                            size="md"
                            variant="outline"
                            name="two_one"
                            placeholder={`Số điện thoại`}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <TextArea
                        shape="round"
                        name="button_one"
                        placeholder={`Nội dung`}
                        className="!border-blue_gray-100 font-montserrat6 font-medium text-gray-700 sm:py-5 sm:pr-5"
                      />
                    </div>
                    <Button
                      size="8xl"
                      shape="round"
                      className="min-w-[200px] !rounded-sm border-gray-900_06 font-montserrat6 font-semibold sm:px-5"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
