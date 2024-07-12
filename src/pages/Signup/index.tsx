import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidateSchema } from "../../validates/ValidateSchema";
import { userHandler } from "../../usecases/HandleLogin";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidateSchema,
    onSubmit: async (values) => {
      const result: any = await userHandler.Register(
        Object.entries(formik.errors).length,
        values
      );
      if (result && result.data.status === 200) {
        alert(result.data.msg);
        navigate("/login");
      } else {
        alert("An error occurred while creating the account");
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 pb-[5px] ml-10 md:flex-col md:pl-5 md:pt-5">
        <div className="flex w-[40%] flex-col items-start md:w-full mt-5 ml-8">
          <Heading
            size="6xl"
            as="h1"
            className="!font-overpass !font-extrabold tracking-[3.60px] !text-blue_gray-800_01"
          >
            CHÀO MỪNG TRỞ LẠI!
          </Heading>
          <Text
            size="4xl"
            as="p"
            className="mt-[27px] flex !font-opensans tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Nếu bạn đã có tài khoản,
            </span>
            <a href="/login" className="text-blue_gray-800_01 underline">
              đăng nhập tại đây
            </a>
          </Text>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-[61px] flex flex-col gap-[43px] self-stretch"
          >
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-col items-start gap-3.5 relative">
                <Heading
                  size="2xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Tên của bạn
                </Heading>
                <Input
                  size="md"
                  type="text"
                  name="name"
                  placeholder="Rosaceae"
                  onChange={(value) => formik.setFieldValue("name", value)}
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
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-3.5 relative">
                <Heading
                  size="2xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Email
                </Heading>
                <Input
                  size="md"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  onChange={(value) => formik.setFieldValue("email", value)}
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
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-3.5 relative">
                <Heading
                  size="2xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Số điện thoại
                </Heading>
                <Input
                  size="md"
                  type="text"
                  name="phone"
                  placeholder="********"
                  onChange={(value) => formik.setFieldValue("phone", value)}
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
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-3.5 relative">
                <Heading
                  size="2xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Địa chỉ
                </Heading>
                <Input
                  size="md"
                  type="text"
                  name="address"
                  placeholder="********"
                  onChange={(value) => formik.setFieldValue("address", value)}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  shape="round"
                  variant="outline"
                  color={
                    formik.touched.address && formik.errors.address
                      ? "gray_500_01"
                      : "blue_gray_100"
                  }
                  className={`self-stretch ${
                    formik.touched.address && formik.errors.address
                      ? "border-red-500"
                      : "border-black-900"
                  }`}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.address}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-[15px] relative">
                <Heading
                  size="2xl"
                  as="h3"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Mật khẩu
                </Heading>
                <Input
                  size="md"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  onChange={(value) => formik.setFieldValue("password", value)}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  shape="round"
                  variant="outline"
                  color={
                    formik.touched.password && formik.errors.password
                      ? "gray_500_01"
                      : "blue_gray_100"
                  }
                  className={`self-stretch ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-black-900"
                  }`}
                />
                <span
                  className="absolute right-3 top-1/2 mt-5 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
                {formik.touched.password && formik.errors.password && (
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-[15px] relative">
                <Heading
                  size="2xl"
                  as="h3"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Xác nhận mật khẩu
                </Heading>
                <Input
                  size="md"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="********"
                  onChange={(value) =>
                    formik.setFieldValue("confirmPassword", value)
                  }
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
                  className={`self-stretch ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-black-900"
                  }`}
                />
                <span
                  className="absolute right-3 top-1/2 mt-5 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>
            <Button
              color="black_900"
              size="6xl"
              className="w-full rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
              type="submit"
            >
              Đăng ký
            </Button>
          </form>
          <div className="relative mr-[185px] mt-[12px] h-[43px] w-[51%] self-end md:mr-0">
            <div className="absolute bottom-0 left-0 top-0 my-auto h-[43px] w-[82%] bg-white-A700" />
            <Text
              size="6xl"
              as="p"
              className="absolute ml-[5rem] bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01"
            >
              Hoặc đăng nhập bằng
            </Text>
          </div>
          <div className="mt-4 flex w-[75%] justify-between gap-[5px] self-center md:w-full md:p-5">
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
        <div className="h-[1210px] w-[55%] sm:w-[50%] object-cover overflow-hidden">
          <Img
            src="images/img_image_48.png"
            alt="imagefortyeight"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
