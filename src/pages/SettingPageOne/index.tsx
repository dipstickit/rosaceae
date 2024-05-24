import { Helmet } from "react-helmet";
import { Button, Input, Text, SelectBox, Img } from "../../components";
import HeaderAdmin from "../../components/HeaderAdmin";
import Sidebar from "../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  currentAddress: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

export default function SettingPageOnePage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700 pt-4">
        <div className="flex items-start md:flex-col">
          <Sidebar />
          <div className="flex-1 md:self-stretch md:p-5">
            <HeaderAdmin />
            <div className="pl-[53px] pb-[126px] pt-[94px] bg-gray-100 pr-6 md:py-5 md:pl-5 sm:p-5">
              <div className="rounded-[25px] px-[30px] pb-[29px] pt-[31px] flex flex-col items-end bg-white-A700 sm:p-5">
                <div className="self-stretch">
                  <div className="flex flex-col items-start">
                    <div className="ml-[15px] w-[52%] flex flex-wrap justify-between gap-5 md:ml-0 md:w-full">
                      <Text
                        as="p"
                        className="self-end !font-medium !text-indigo-A700"
                      >
                        Chỉnh sửa thông tin cá nhân
                      </Text>
                      <Text as="p" className="!font-medium !text-indigo-300_03">
                        Preferences
                      </Text>
                      <Text
                        as="p"
                        className="self-start !font-medium !text-indigo-300_03"
                      >
                        Bảo mật
                      </Text>
                    </div>
                    <div className="z-[1] rounded-tr-[1px] rounded-tl-[1px] ml-[60px] mt-[5px] w-[12%] h-[2px] relative bg-indigo-A700 md:ml-0" />
                    <div className="h-px w-full self-stretch bg-blue_gray-50" />
                  </div>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    date: "",
                    address: "",
                    zipCode: "",
                    username: "",
                    password: "",
                    currentAddress: "",
                    city: "",
                    country: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="mt-[51px] flex flex-col self-stretch md:flex-col">
                      <div className="flex items-start justify-between gap-5 md:flex-col">
                        <div className="w-[13%] flex items-center justify-center md:w-full">
                          <Img
                            src="images/img_image_1.png"
                            alt="imageone"
                            className="rounded-[50%] w-[81%] h-[127px]"
                          />
                          <Button
                            color="indigo_A700"
                            size="sm"
                            className="rounded-[14px] ml-[-28px] mb-[15px] w-[30px] relative self-end"
                          >
                            <Img src="images/img_television_white_a700.svg" />
                          </Button>
                        </div>
                        <div className="w-[82%] flex items-center justify-center gap-7 md:w-full md:flex-col">
                          <div className="gap-[21px] flex w-full flex-col">
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Tên của bạn
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="name"
                                placeholder={`Huy Phạm`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />

                              <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Email
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="email"
                                placeholder={`example@example.com`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <Text as="p" className="text-gray-950">
                                Ngày sinh
                              </Text>
                              <Field
                                as={SelectBox}
                                name="date"
                                placeholder={`25/01/1990`}
                                options={dropDownOptions}
                                className="rounded-[15px] gap-px self-stretch border border-solid border-teal-50 sm:pr-5"
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_indigo_300_03.svg"
                                    alt="arrow_down"
                                    className="h-[5px] w-[12px]"
                                  />
                                }
                              />
                              <ErrorMessage
                                name="date"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Địa chỉ thường trú
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="address"
                                placeholder={`San Jose, California, USA`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="address"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <Text as="p" className="text-gray-950">
                                Mã bưu điện
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="zipCode"
                                placeholder={`45962`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="zipCode"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                          <div className="gap-[21px] flex w-full flex-col">
                            <div className="flex flex-col items-start gap-2">
                              <Text as="p" className="text-gray-950">
                                Tên đăng nhập
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="username"
                                placeholder={`Charlene Reed `}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Mật khẩu
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                type="password"
                                name="password"
                                placeholder={`**********`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Địa chỉ hiện tại
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="currentAddress"
                                placeholder={`Hồ Chí Minh, Việt Nam`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="currentAddress"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Thành phố
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="city"
                                placeholder={`Hồ Chí Minh`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="city"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                            <div className="gap-[9px] flex flex-col items-start">
                              <Text as="p" className="text-gray-950">
                                Quốc gia
                              </Text>
                              <Field
                                as={Input}
                                shape="round"
                                name="country"
                                placeholder={`Việt Nam`}
                                className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                              />
                              <ErrorMessage
                                name="country"
                                component="div"
                                className="text-red-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-5">
                        <Button
                          type="submit"
                          color="indigo_A700"
                          size="4xl"
                          className="rounded-[15px] min-w-[190px] mt-[29px] font-medium sm:px-5"
                          disabled={isSubmitting}
                        >
                          Lưu
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
