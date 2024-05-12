import { Helmet } from "react-helmet";
import { Text, Img, Heading, CheckBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePviOiNYNAColumn from "../../components/HomePviOiNYNAColumn";

const data = [
  { userimage: "images/img_woman_having_be.png" },
  { userimage: "images/img_1.png" },
  { userimage: "images/img_woman_cosmetolo.png" },
];

export default function HomepvioinynaPage() {
  return (
    <>
      <Helmet>
        <title>Nguyen Huu Phuoc K16 HCM's Application4</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col bg-white-A700">
        <Header className="ml-[12rem]" />
        <div className="bg-[url(/public/images/img_group_1.png)] pb-[212px] pt-[146px] mt-[38px] h-[500px] flex items-center bg-cover bg-no-repeat px-14 md:h-auto md:p-5">
          <Heading
            size="15xl"
            as="h1"
            className="!font-comfortaa8 !text-white-A700 ml-[2rem]"
          >
            Tái tạo bề mặt da bằng laser
          </Heading>
        </div>
        <div className="mt-[63px] flex flex-col items-center">
          <div className="max-w-[1248px] mx-auto flex w-full md:p-5">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="w-[42%] flex items-center justify-center md:w-full sm:flex-col">
                <div className="rounded-[14px] border-[10px] w-[30%] h-[347px] border-solid border-lime-800 bg-white-A700" />
                <Img
                  src="images/img_senior_female_g.png"
                  alt="seniorfemaleg"
                  className="ml-[-198px] w-[70%] h-[310px] relative object-cover sm:ml-0 sm:w-full"
                />
              </div>
              <div className="gap-[33px] w-[50%] flex flex-col items-start md:w-full">
                <Heading size="6xl" as="h2" className="!font-comfortaa8">
                  Chào mừng đến với Rosaceae
                </Heading>
                <Text
                  as="p"
                  className="leading-[18px] w-full text-justify !font-comfortaa8"
                >
                  <span className="text-gray-700_01">
                    <>
                      Rosaceae - nền tảng hàng đầu cho trải nghiệm làm đẹp tại
                      nhà! <br />
                      <br />
                    </>
                  </span>
                  <span className="text-gray-700_01">
                    Chúng tôi tin rằng mọi người đều xứng đáng được chăm sóc và
                    thư giãn, ngay cả trong cuộc sống bận rộn. Đó là lý do tại
                    sao chúng tôi đã tạo ra một nền tảng đột phá, nơi bạn có thể
                    dễ dàng đặt lịch hẹn và tận hưởng những dịch vụ làm đẹp chất
                    lượng ngay tại nhà của bạn.
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="pb-[52px] pt-[75px] mt-[74px] flex flex-col items-center justify-center gap-11 self-stretch bg-gray-200 md:py-5">
            <div className="container-xs flex md:p-5">
              <div className="flex w-full flex-col">
                <div className="pr-[306px] pl-[401px] flex flex-col items-center md:px-5">
                  <Heading size="6xl" as="h2" className="!font-comfortaa8">
                    Làm đẹp với nền tảng Rosaceae
                  </Heading>
                </div>
                <Text
                  as="p"
                  className="leading-[17px] text-center !font-comfortaa8"
                >
                  <span className="text-gray-700_01">
                    Rosaceae mang đến một môi trường nhẹ nhàng, nơi bạn có thể
                    nghỉ ngơi, thư giãn và cảm thấy trẻ hóa hoàn toàn. <br />
                    Không cần phải đi đâu xa, không cần phải lo lắng về thời
                    gian và không gian - chỉ cần tìm đến Rosaceae và lựa chọn
                    dịch vụ mà bạn mong muốn.
                  </span>
                </Text>
                <div className="pr-[37px] pl-[45px] mt-[45px] flex flex-col items-center gap-2 md:pl-5 sm:px-5">
                  <div className="flex justify-between gap-5 self-stretch">
                    <div className="rounded-[50px] pl-[27px] pb-[23px] flex flex-col items-center bg-blue_gray-900_03 pr-6 pt-7 sm:p-5">
                      <Img
                        src="images/img_massage_1.png"
                        alt="massageone"
                        className="w-[49px] h-[49px] object-cover"
                      />
                    </div>
                    <div className="rounded-[50px] p-[26px] flex flex-col items-center bg-white-A700 sm:p-5">
                      <Img
                        src="images/img_massage_2.png"
                        alt="massagetwo"
                        className="w-[48px] h-[48px] object-cover"
                      />
                    </div>
                    <div className="rounded-[50px] pr-[26px] pl-[27px] pb-[26px] pt-[27px] flex flex-col items-center bg-white-A700 sm:p-5">
                      <Img
                        src="images/img_massage_3.png"
                        alt="massagethree"
                        className="w-[47px] h-[47px] object-cover"
                      />
                    </div>
                    <div className="rounded-[50px] p-[25px] flex flex-col items-center bg-white-A700 sm:p-5">
                      <Img
                        src="images/img_massage_4.png"
                        alt="massagefour"
                        className="w-[50px] h-[50px] object-cover"
                      />
                    </div>
                    <div className="rounded-[50px] pr-[23px] pb-[23px] w-[9%] bg-white-A700 pl-6 pt-6 sm:p-5">
                      <Img
                        src="images/img_massage_5.png"
                        alt="massagefive"
                        className="w-[53px] h-[53px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-[96%] flex flex-wrap items-end justify-between gap-5 md:w-full">
                    <Heading
                      size="2xl"
                      as="h3"
                      className="mb-[5px] !text-gray-700_01"
                    >
                      Spa
                    </Heading>
                    <Text
                      size="7xl"
                      as="p"
                      className="!font-normal text-gray-700_02"
                    >
                      Làm tóc
                    </Text>
                    <Text
                      size="7xl"
                      as="p"
                      className="!font-normal text-gray-700_02"
                    >
                      Tẩy lông
                    </Text>
                    <Text
                      size="7xl"
                      as="p"
                      className="!font-normal text-gray-700_02"
                    >
                      Mặt
                    </Text>
                    <Text
                      size="7xl"
                      as="p"
                      className="!font-normal text-gray-700_02"
                    >
                      Massage
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-xs pr-[26px] pl-[21px] md:p-5 sm:px-5">
              <div className="pb-[23px] flex justify-center bg-white-A700 pr-5 pt-5 sm:pb-5">
                <div className="w-[97%] flex items-center justify-between gap-5 md:w-full md:flex-col">
                  <div className="w-[22%] flex flex-col gap-3.5 md:w-full">
                    <CheckBox
                      name="liệuphápxoabóp"
                      label="Liệu pháp xoa bóp"
                      id="liuphpxoabp8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                    <CheckBox
                      name="chămsócdamặt"
                      label="Chăm sóc da mặt"
                      id="chmscdamt8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                    <CheckBox
                      name="làmmóngchân"
                      label="Làm móng chân"
                      id="lmmngchn8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                    <CheckBox
                      name="làmmóngtay"
                      label="Làm móng tay"
                      id="lmmngtay8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                    <CheckBox
                      name="chămsócdacơthể"
                      label="Chăm sóc da cơ thể"
                      id="chmscdacth8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                    <CheckBox
                      name="tẩylôngmỹphẩm"
                      label="Tẩy lông & Mỹ phẩm"
                      id="tylngmphm8"
                      className="tracking-[0.80px] rounded-br-[20px] rounded-tr-[20px] py-[11px] gap-[30px] pr-[35px] bg-gray-200 text-base font-medium text-black-900 sm:pr-5"
                    />
                  </div>
                  <div className="w-[73%] flex items-center justify-center gap-9 md:w-full md:flex-col">
                    <div className="rounded-[181px] pl-[21px] pb-[19px] pt-[22px] w-[46%] bg-gray-100_06 pr-5 md:w-full sm:pl-5 sm:pt-5">
                      <Img
                        src="images/img_spa_salon_worke.png"
                        alt="spasalonworke"
                        className="rounded-[50%] w-[322px] h-[322px]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 md:self-stretch">
                      <Text
                        as="p"
                        className="leading-[27px] tracking-[0.80px] w-[73%] !font-medium !text-black-900 md:w-full"
                      >
                        <span className="text-[32px] text-black-900">
                          <>
                            Liệu pháp xoa bóp <br />
                          </>
                        </span>
                        <span className="text-lg text-black_900_cc">
                          <>
                            400.000 - 800.000VND <br />
                          </>
                        </span>
                      </Text>
                      <Text as="p" className="leading-[27px]">
                        <span className="text-gray-700_01">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. remaining
                          essentially unchanged. It was popularised in the with
                          theLorem Ipsum is simply dummy text of the printing
                          and eentially unchanged. <br /> <br /> Đọc thêm
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs mt-[141px] px-2.5 md:p-5">
            <div className="sm:gap-[37px] md:gap-[55px] gap-[74px] flex flex-col">
              <div className="gap-[23px] flex flex-col items-start">
                <Heading
                  size="13xl"
                  as="h2"
                  className="tracking-[2.60px] !font-comfortaa8"
                >
                  TRUNG TÂM LÀM ĐẸP VÀ SPA
                </Heading>
                <Text
                  as="p"
                  className="ml-[5px] !font-comfortaa8 md:ml-0 text-gray-700_01"
                >
                  Với sự đa dạng của các dịch vụ spa, nối mi, nails và nhiều hơn
                  nữa, Rosaceae mang lại cho bạn sự linh hoạt và tiện lợi mà bạn
                  đáng giá.
                </Text>
              </div>
              <div className="gap-[27px] ml-[5px] flex md:ml-0 md:flex-col">
                {data.map((d, index) => (
                  <HomePviOiNYNAColumn
                    {...d}
                    key={"listwomanhaving3" + index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="gap-[15px] pb-[101px] pt-[86px] mt-28 flex flex-col items-center justify-center self-stretch bg-gray-200 md:py-5">
            <div className="container-xs gap-[41px] pr-[161px] flex flex-col items-center pl-40 md:p-5 md:px-5">
              <Heading size="6xl" as="h2" className="!font-comfortaa8">
                Chuyên gia dày dặn kinh nghiệm của chúng tôi
              </Heading>
              <Text
                as="p"
                className="leading-[21px] w-full text-center !font-comfortaa8 text-gray-700_01"
              >
                Đội ngũ đối tác chuyên nghiệp và được lựa chọn kỹ lưỡng, cùng
                với một hệ thống đặt lịch đơn giản và tiện lợi. Rosaceae cam kết
                mang đến cho bạn trải nghiệm làm đẹp tuyệt vời nhất, mỗi lần sử
                dụng.
              </Text>
            </div>
            <div className="gap-[34px] w-[95%] flex md:w-full md:flex-col md:p-5">
              <div className="w-[32%] h-[490px] relative md:h-auto md:w-full">
                <Img
                  src="images/img_expert1_1.png"
                  alt="expert1one"
                  className="h-[490px] w-full object-cover"
                />
                <div className="h-[490px] absolute bottom-0 left-0 right-0 top-0 m-auto w-full bg-black-900_7f" />
              </div>
              <Img
                src="images/img_expert2_1.png"
                alt="expert"
                className="w-[32%] h-[490px] object-cover md:w-full"
              />
              <Img
                src="images/img_expert3_1.png"
                alt="expert"
                className="w-[31%] h-[490px] object-cover md:w-full"
              />
            </div>
          </div>
        </div>
        <div className="gap-[26px] pb-[110px] pt-[111px] flex items-center bg-gray-200 pl-12 pr-14 md:flex-col md:p-5">
          <div className="mb-4 flex flex-1 flex-col items-start gap-9 self-end md:self-stretch">
            <Heading size="10xl" as="h2" className="tracking-[2.25px]">
              Ưu đãi đặc biệt của chúng tôi
            </Heading>
            <div className="sm:gap-[35px] md:gap-[52px] gap-[70px] ml-3 flex flex-col self-stretch md:ml-0">
              <Text as="p" className="leading-[27px] text-gray-700_01">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Text>
              <Img
                src="images/img_image_1_98x516.png"
                alt="imageone"
                className="w-[71%] h-[98px] object-cover"
              />
            </div>
          </div>
          <Img
            src="images/img_ellipse_7.svg"
            alt="image"
            className="w-[41%] h-[399px] md:w-full"
          />
        </div>
        {/* <div className="pt-[43px] bg-gray-900 md:pt-5">
        </div> */}
          <Footer />
      </div>
      
    </>
    
  );
}
