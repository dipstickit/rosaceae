import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import { loginValidateSchema } from "../../validates/ValidateSchema";
import { useFormik } from "formik";
import { userHandler } from "../../usecases/HandleLogin";
import { useEffect, useState } from "react";
import { setAccessToken } from "../../store/authActions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserInfo } from "../../store/userActions";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";
import "firebase/auth";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user && user.email) {
          const googleUserInfo = {
            displayName: user.displayName || "",
            email: user.email,
            photoURL: user.photoURL || "",
          };
          localStorage.setItem(
            "google-user-info",
            JSON.stringify(googleUserInfo)
          );
          navigate("/");
        } else {
          console.error("User email is null or user is not available");
        }
      })
      .catch((error) => {
        console.error("Error signing in with popup:", error);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setValue(storedEmail || "");
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidateSchema,
    onSubmit: async (values) => {
      const result = await userHandler.Login(
        Object.entries(formik.errors).length,
        values
      );
      if (result && result.data.status === 200) {
        const token = result.data.access_token;
        const data = result.data.userInfo;
        const userInfo = {
          usersID: data.usersID,
          accountName: data.accountName,
          email: data.email,
          phone: data.phone,
          address: data.address,
        };
        dispatch(setAccessToken(token, userInfo, data.role));
        dispatch(setUserInfo(userInfo));
        localStorage.setItem("access-token", token);
        localStorage.setItem("user-info", JSON.stringify(userInfo));
        localStorage.setItem("usersID", JSON.stringify(data.usersID));
        navigate("/");
        toast.success("Đăng nhập thành công!");
      } else if (result && result.data.status === 400) {
        toast.error(
          "Đăng nhập thất bại, vui lòng kiểm tra email hoặc password!"
        );
      } else {
        alert("An error occurred during login. Please try again.");
      }
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
      <Header />
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 pb-[5px] px-10 md:flex-col md:pl-5 md:pt-5">
        <div className="flex w-[40%] flex-col items-start md:w-full mt-5">
          <Heading
            size="6xl"
            as="h1"
            className="!font-sansserif !font-extrabold tracking-[3.60px] !text-blue_gray-800_01"
          >
            CHÀO MỪNG TRỞ LẠI!
          </Heading>
          <Text
            size="4xl"
            as="p"
            className="mt-[27px] flex !font-opensans tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Nếu bạn chưa có tài khoản,
            </span>
            <Link to="/signup" className="text-blue_gray-800_01 underline">
              đăng ký tại đây
            </Link>
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
                  Tên đăng nhập
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
                  type="password"
                  name="password"
                  placeholder="********"
                  onChange={(value) => formik.setFieldValue("password", value)}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
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
                {formik.touched.password && formik.errors.password && (
                  <div className="absolute top-full left-0 mt-1 text-red-500 text-xl">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex justify-between gap-5 sm:flex-col">
                <div className="flex w-[40%] justify-center gap-4 sm:w-full sm:p-5">
                  <div className="w-[20%] rounded-[24px] border-2 border-solid border-white-A700 bg-white-A700 p-[9px]"></div>
                </div>
                <div className="flex pb-[9px] pr-2.5 pt-2.5 sm:p-5">
                  <Link to="/forgotpassword">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!font-opensans !font-semibold tracking-[2.00px]"
                    >
                      Quên mật khẩu?
                    </Heading>
                  </Link>
                </div>
              </div>
            </div>
            <Button
              color="black_900"
              size="6xl"
              className="rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
              type="submit"
            >
              Đăng nhập
            </Button>
          </form>
          <div className="relative mt-12 h-[43px] w-[75%] self-center md:w-full">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[43px] w-[82%] bg-white-A700" />
            <Text
              size="4xl"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-nunito !font-normal tracking-[2.00px] !text-blue_gray-800_01"
            >
              Hoặc đăng nhập bằng
            </Text>
          </div>
          <div className="mt-4 flex w-[75%] justify-between gap-5 self-center md:w-full md:p-5">
            <div
              className="flex w-[25%] justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 px-[22px] pb-5 pt-[22px] sm:px-5 sm:pt-5 cursor-pointer"
              onClick={handleClick}
            >
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
        <div className="h-[880px] w-[55%] sm:w-[50%] object-cover overflow-hidden">
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
