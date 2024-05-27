import { Helmet } from "react-helmet";
import { Button, Input, Text, Img, Switch } from "../../components";
import HeaderAdmin from "../../components/HeaderAdmin";
import Sidebar from "../../components/Sidebar";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Mật khẩu hiện tại là bắt buộc"),
  newPassword: Yup.string()
    .required("Mật khẩu mới là bắt buộc")
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự"),
});

export default function SettingPageThreePage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700">
        <HeaderAdmin className="mt-4" />
        <div className="flex gap-[31px] items-center md:flex-col">
          {/* <Sidebar /> */}
          <div className="flex flex-1 items-start md:flex-col md:self-stretch md:p-5">
            <div className="px-[30px] pb-[362px] pt-[30px] ml-[-16px] relative flex-1 bg-gray-100 md:ml-0 md:self-stretch md:pb-5 sm:p-5">
              <div className="rounded-[25px] pr-[30px] pl-[29px] pb-[30px] bg-white-A700 pt-8 sm:p-5">
                <div className="flex flex-col">
                  <div className="w-[49%] ml-4 flex items-start justify-between gap-5 md:ml-0 md:w-full sm:flex-col">
                    <div className="w-[71%] flex flex-wrap items-start justify-between gap-5 sm:w-full">
                      <Link to="/settingpageOne">
                        <Text
                          size="3xl"
                          as="p"
                          className="self-end !font-medium !text-indigo-300_03"
                        >
                          Chỉnh sửa thông tin cá nhân
                        </Text>
                      </Link>
                      <Link to="/settingpage2">
                        <Text
                          as="p"
                          className="!font-medium !text-indigo-300_03"
                        >
                          Preferences
                        </Text>
                      </Link>
                    </div>
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-medium !text-indigo-A700"
                    >
                      Bảo mật
                    </Text>
                  </div>
                  <div className="mt-[-1px] relative flex flex-col items-start">
                    <div className="rounded-tr-[1px] rounded-tl-[1px] w-[6%] h-[3px] self-center bg-indigo-A700 mr-10" />
                    <div className="mt-[7px] h-px w-full self-stretch bg-gray-100_02" />
                    <Text
                      size="4xl"
                      as="p"
                      className="mt-[38px] !text-blue_gray-800"
                    >
                      Xác thực 2 yếu tố
                    </Text>
                    <div className="mt-[17px] flex items-center gap-5">
                      <Switch />
                      <Text size="3xl" as="p" className="!text-gray-900_01">
                        Bật hoặc tắt xác thực hai yếu tố
                      </Text>
                    </div>
                    <Text
                      size="4xl"
                      as="p"
                      className="mt-7 !text-blue_gray-800"
                    >
                      Đổi mật khẩu
                    </Text>

                    <Formik
                      initialValues={{ currentPassword: "", newPassword: "" }}
                      validationSchema={validationSchema}
                      onSubmit={(values, actions) => {
                        console.log(values);
                        actions.setSubmitting(false);
                      }}
                    >
                      {(props) => (
                        <Form className="flex flex-col self-stretch md:flex-col">
                          <div className="w-[49%] mt-3.5 flex flex-col items-start gap-2.5 md:w-full">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-gray-900_01"
                            >
                              Mật khẩu hiện tại
                            </Text>
                            <Input
                              name="currentPassword"
                              type="password"
                              placeholder="**********"
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              value={props.values.currentPassword}
                              className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                            />
                            <ErrorMessage
                              name="currentPassword"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                          <div className="mt-[21px] w-[49%] flex flex-col items-start gap-2.5 md:w-full">
                            <Text
                              size="3xl"
                              as="p"
                              className="!text-gray-900_01"
                            >
                              Mật khẩu mới
                            </Text>
                            <Input
                              name="newPassword"
                              type="password"
                              placeholder="**********"
                              onChange={props.handleChange("newPassword")}
                              onBlur={props.handleBlur}
                              value={props.values.newPassword}
                              className="!rounded-[15px] self-stretch border border-solid border-teal-50 sm:pr-5"
                            />
                            <ErrorMessage
                              name="newPassword"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                          <Button
                            type="submit"
                            color="indigo_A700"
                            size="4xl"
                            className="rounded-[15px] min-w-[190px] mt-[30px] self-end font-medium sm:px-5"
                          >
                            Lưu
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
