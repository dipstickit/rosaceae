import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormContactValidateSchema } from "../../validates/ValidateSchema";
import { Link } from "react-router-dom";
export default function ContactAdmin() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      phone: "",
      message: "",
    },
    validationSchema: FormContactValidateSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="sm:gap-[90px] md:gap-[141px] gap-[188px] pt-[5px] flex w-full flex-col bg-white-A700">
        <Header />
        <div className="max-w-[1497px] gap-[43px] mx-auto flex w-full flex-col items-center md:p-5">
          <div className="w-[88%] flex flex-col items-start md:w-full">
            <div className="z-[1] ml-[69px] w-[38%] relative flex flex-col gap-5 md:ml-0 md:w-full">
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
                        <span className="font-normal text-gray-800">
                          rosaceae.makebeauty@gmail.com
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
                        (+84)39 2272 536
                      </Text>
                    </div>
                  </div>
                  <div className="w-[70%] flex justify-between gap-5 md:w-full">
                    <Link to="https://www.instagram.com/rosaceae_vn?fbclid=IwZXh0bgNhZW0CMTAAAR1fXBxl3_3JsvTi9VW9HG6edoCfcW_BiPn74MTAvh5VBUu4Eq6RZgHbLmo_aem_Y4J-lHgRW5_TbfEOl1mDPg">
                      <Button
                        color="orange_700"
                        size="3xl"
                        variant="outline"
                        className="rounded-[24px] px-[11px] w-[49px] mb-5"
                      >
                        <Img src="images/icons8-instagram.svg" />
                      </Button>
                    </Link>
                    <Link to="https://www.facebook.com/rosaceaevn">
                      <Button
                        color="orange_700"
                        size="3xl"
                        variant="outline"
                        className="rounded-[24px] px-[11px] w-[49px] mb-5"
                      >
                        <Img src="images/icons8-facebook.svg" />
                      </Button>
                    </Link>
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px] mb-5"
                    >
                      <Img src="images/icons8-youtube.svg" />
                    </Button>
                    <Button
                      color="orange_700"
                      size="3xl"
                      variant="outline"
                      className="rounded-[24px] px-[11px] w-[49px] mb-2"
                    >
                      <Img src="images/icons8-pinterest.svg" />
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
                        Giờ làm việc:
                      </Text>
                      <Text
                        size="6xl"
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
                        <span className="font-montserrat6 text-lg text-gray-700">
                          09 AM to 05 PM
                        </span>
                      </Text>
                    </div>
                  </div>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-[43px] self-stretch"
                  >
                    <div className="gap-[29px] flex flex-col items-start">
                      <div className="flex flex-row gap-[26px] self-stretch">
                        <div className="flex-1">
                          <Input
                            size="md"
                            type="name"
                            name="name"
                            placeholder="Tên của bạn"
                            onChange={(value) =>
                              formik.setFieldValue("name", value)
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            shape="round"
                            variant="outline"
                            color={
                              formik.touched.name && formik.errors.name
                                ? "gray_500_01"
                                : "blue_gray_100"
                            }
                            className={`self-stretch ${
                              formik.touched.name && formik.errors.name
                                ? "border-red-500"
                                : "border-black-900"
                            }`}
                          />
                          {formik.touched.name && formik.errors.name && (
                            <div className="mt-1 text-red-500 text-xm">
                              {formik.errors.name}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <Input
                            size="md"
                            type="email"
                            name="email"
                            placeholder="Email của bạn"
                            onChange={(value) =>
                              formik.setFieldValue("email", value)
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            shape="round"
                            variant="outline"
                            color={
                              formik.touched.email && formik.errors.email
                                ? "gray_500_01"
                                : "blue_gray_100"
                            }
                            className={`self-stretch ${
                              formik.touched.email && formik.errors.email
                                ? "border-red-500"
                                : "border-black-900"
                            }`}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <div className="mt-1 text-red-500 text-xm">
                              {formik.errors.email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row gap-[26px] self-stretch">
                        <div className="flex-1">
                          <Input
                            size="md"
                            type="text"
                            name="service"
                            placeholder="Dịch vụ quan tâm"
                            onChange={(value) =>
                              formik.setFieldValue("service", value)
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.service}
                            shape="round"
                            variant="outline"
                            color={
                              formik.touched.service && formik.errors.service
                                ? "gray_500_01"
                                : "blue_gray_100"
                            }
                            className={`self-stretch ${
                              formik.touched.service && formik.errors.service
                                ? "border-red-500"
                                : "border-black-900"
                            }`}
                          />
                          {formik.touched.service && formik.errors.service && (
                            <div className="mt-1 text-red-500 text-xm">
                              {formik.errors.service}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <Input
                            size="md"
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại của bạn"
                            onChange={(value) =>
                              formik.setFieldValue("phone", value)
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            shape="round"
                            variant="outline"
                            color={
                              formik.touched.phone && formik.errors.phone
                                ? "gray_500_01"
                                : "blue_gray_100"
                            }
                            className={`self-stretch ${
                              formik.touched.phone && formik.errors.phone
                                ? "border-red-500"
                                : "border-black-900"
                            }`}
                          />
                          {formik.touched.phone && formik.errors.phone && (
                            <div className="mt-1 text-red-500 text-xm">
                              {formik.errors.phone}
                            </div>
                          )}
                        </div>
                      </div>

                      <TextArea
                        name="message"
                        placeholder="Nội dung tin nhắn"
                        onChange={(value) =>
                          formik.setFieldValue("message", value)
                        }
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className={`self-stretch rounded-[40px] border-2 border-solid border-blue_gray-100 outline-none p-[15px] ${
                          formik.touched.message && formik.errors.message
                            ? "border-red-500"
                            : "border-black-900"
                        }`}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <div className="mt-1 text-red-500 text-xm">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="8xl"
                      shape="round"
                      className="min-w-[200px] border-gray-900_06 font-montserrat6 font-semibold sm:px-5 rounded-[40px]"
                    >
                      Gửi
                    </Button>
                  </form>
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
