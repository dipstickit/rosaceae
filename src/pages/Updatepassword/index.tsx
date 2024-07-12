import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { UpdatePasswordValidateSchema } from "../../validates/ValidateSchema";

export default function UpdatePasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: UpdatePasswordValidateSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form submitted with values:", values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <Helmet>
        <title>Đặt mật khẩu mới</title>
        <meta
          name="description"
          content="Đặt mật khẩu mới cho tài khoản của bạn"
        />
      </Helmet>
      <Header />
      <div className="flex flex-col items-center justify-between gap-10 bg-white-A700 py-10 px-5 md:py-5 md:px-5">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <Heading
            size="8xl"
            as="h1"
            className="!font-overpass !font-extrabold tracking-[3.60px] !text-blue_gray-800_01 text-center"
          >
            Đặt mật khẩu mới
          </Heading>
          <Text
            size="9xl"
            as="p"
            className="mt-5 text-center tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Nhập thông tin dưới đây để cập nhật mật khẩu mới cho tài khoản của
              bạn
            </span>
          </Text>
          <div className="mt-10 w-full">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col w-full max-w-lg gap-6">
                <div className="flex flex-col items-start gap-3.5 relative">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                  >
                    Mật khẩu hiện tại
                  </Heading>
                  <div className="w-full relative">
                    <Input
                      size="md"
                      type={showPassword ? "text" : "password"}
                      name="currentPassword"
                      placeholder="Nhập mật khẩu hiện tại"
                      onChange={(value) =>
                        formik.setFieldValue("currentPassword", value)
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.currentPassword}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.currentPassword &&
                        formik.errors.currentPassword
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch pr-10 ${
                        formik.touched.currentPassword &&
                        formik.errors.currentPassword
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    <span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  {formik.touched.currentPassword &&
                    formik.errors.currentPassword && (
                      <div className="mt-1 text-red-500 text-xl">
                        {formik.errors.currentPassword}
                      </div>
                    )}
                </div>
                <div className="flex flex-col items-start gap-3.5 relative">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                  >
                    Mật khẩu mới
                  </Heading>
                  <div className="w-full relative">
                    <Input
                      size="md"
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      placeholder="Nhập mật khẩu mới"
                      onChange={(value) => {
                        formik.setFieldValue("newPassword", value);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.newPassword}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.newPassword && formik.errors.newPassword
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch pr-10 ${
                        formik.touched.newPassword && formik.errors.newPassword
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    <span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={toggleNewPasswordVisibility}
                    >
                      {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  {formik.touched.newPassword && formik.errors.newPassword && (
                    <div className="mt-1 text-red-500 text-xl">
                      {formik.errors.newPassword}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-3.5 relative">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                  >
                    Xác nhận mật khẩu mới
                  </Heading>
                  <div className="w-full relative">
                    <Input
                      size="md"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Nhập lại mật khẩu mới"
                      onChange={(value) => {
                        formik.setFieldValue("confirmPassword", value);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch pr-10 ${
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    <span
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="mt-1 text-red-500 text-xl">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
              </div>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                color="black_900"
                size="7xl"
                className="mt-10 w-full max-w-lg rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
              >
                {formik.isSubmitting ? "Đang xử lý..." : "Cập nhật mật khẩu"}
              </Button>
            </form>
          </div>
          <div className="mt-12 w-full max-w-lg flex flex-col items-center gap-4">
            <Text
              size="7xl"
              as="p"
              className="!font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01 flex items-center"
            >
              <span className="text-blue_gray-800_01">
                Nếu bạn đã có tài khoản,
              </span>
              <Link
                to="/login"
                className="text-blue_gray-800_01 underline ml-1"
              >
                đăng nhập tại đây
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
