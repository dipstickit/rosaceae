import { Helmet } from "react-helmet";
import { Button, Input, Text, Switch } from "../../components";
import HeaderAdmin from "../../components/HeaderAdmin";
import Sidebar from "../../components/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  price: Yup.string().required("Tiền tệ không được để trống"),
  time: Yup.string().required("Time Zone không được để trống"),
});

export default function SettingPageTwoPage() {
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
            <div className="h-px bg-indigo-50" />
            <div className="pl-[53px] pb-[126px] pt-[94px] bg-gray-100 pr-6 md:py-5 md:pl-5 sm:p-5">
              <div className="rounded-[25px] px-[30px] pb-[30px] pt-[34px] bg-white-A700 sm:p-5">
                <div className="self-stretch">
                  <div className="flex flex-col items-start">
                    <div className="w-[49%] ml-4 flex flex-wrap justify-between gap-5 md:ml-0 md:w-full">
                      <Link to="/settingpageOne">
                        <Text
                          size="3xl"
                          as="p"
                          className="self-end !font-medium !text-indigo-300_03"
                        >
                          Chỉnh sửa thông tin cá nhân
                        </Text>
                      </Link>
                      <Text
                        size="3xl"
                        as="p"
                        className="self-start !font-medium !text-indigo-A700"
                      >
                        Preferences
                      </Text>
                      <Link to="/settingpage3">
                        <Text
                          size="3xl"
                          as="p"
                          className="self-start !font-medium !text-indigo-300_03"
                        >
                          Bảo mật
                        </Text>
                      </Link>
                    </div>
                    <div className="rounded-tr-[1px] rounded-tl-[1px] w-[10%] h-[3px] self-center bg-indigo-A700 mr-[518px]" />
                    <div className="h-px w-full self-stretch bg-blue_gray-50" />
                  </div>
                </div>

                <Formik
                  initialValues={{
                    price: "",
                    time: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  <Form>
                    <div className="flex flex-col items-start mt-4">
                      <div className="gap-[30px] flex self-stretch md:flex-col">
                        <div className="flex w-full flex-col items-start gap-2.5">
                          <Text size="3xl" as="p" className="!text-gray-900_01">
                            Tiền tệ
                          </Text>
                          <Field
                            as={Input}
                            shape="round"
                            name="price"
                            placeholder={`VND`}
                            className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                          />
                          <ErrorMessage
                            name="price"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-2.5">
                          <Text size="3xl" as="p" className="!text-gray-900_01">
                            Time Zone
                          </Text>
                          <Field
                            as={Input}
                            shape="round"
                            name="time"
                            placeholder={`Múi giờ ở Việt Nam (GMT+7)`}
                            className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                          />
                          <ErrorMessage
                            name="time"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-7 !text-blue_gray-800"
                      >
                        Thông báo
                      </Text>
                      <div className="mt-[17px] flex items-center gap-5">
                        <Switch />
                        <Text size="3xl" as="p" className="!text-gray-900_01">
                          Tôi gửi hoặc nhận tiền kỹ thuật số
                        </Text>
                      </div>
                      <div className="gap-[21px] mt-[15px] flex items-center sm:flex-col">
                        <Switch />
                        <Text
                          size="3xl"
                          as="p"
                          className="mb-1 self-end !text-gray-900_01"
                        >
                          Tôi nhận được đơn đặt hàng của người bán
                        </Text>
                      </div>
                      <div className="gap-[21px] mt-[15px] flex items-start">
                        <Switch />
                        <Text size="3xl" as="p" className="!text-gray-900_01">
                          Có đề xuất cho tài khoản của tôi
                        </Text>
                      </div>
                      <Button
                        type="submit"
                        color="indigo_A700"
                        size="4xl"
                        className="rounded-[15px] min-w-[190px] mt-[72px] self-end font-medium sm:px-5"
                      >
                        Lưu
                      </Button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
