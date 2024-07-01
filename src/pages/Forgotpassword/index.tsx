import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { UserApi } from "../../api/Api";
import { useFormik } from "formik";
import { forgotPasswordValidateSchema } from "../../validates/ValidateSchema";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidateSchema,
    onSubmit: (values, { setSubmitting }) => {
      UserApi.ForgotPassword(values.email)
        .then((res) => {
          toast.success("Email đã được gửi thành công!", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((e) => {
          toast.error("Đã xảy ra lỗi khi gửi email. Vui lòng thử lại sau.", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.error(e);
        })
        .finally(() => setSubmitting(false));
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
      <div className="flex flex-col items-center justify-between gap-10 bg-white-A700 py-10 px-5 md:py-5 md:px-5">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <Heading
            size="8xl"
            as="h1"
            className="!font-overpass !font-extrabold tracking-[3.60px] !text-blue_gray-800_01 text-center"
          >
            Quên Mật Khẩu?
          </Heading>
          <Text
            size="9xl"
            as="p"
            className="mt-5 text-center tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Đừng lo lắng, điều này xảy ra với tất cả chúng ta. Nhập email của
              bạn dưới đây để khôi phục mật khẩu của bạn
            </span>
          </Text>
          <div className="mt-10 w-full">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col w-full max-w-lg gap-6">
                <div className="flex flex-col items-start gap-3.5">
                  <Heading
                    size="4xl"
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
                    <div className="mt-1 text-red-500 text-xl">
                      {formik.errors.email}
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
                {formik.isSubmitting ? "Đang xử lý..." : "Gửi"}
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
            <Text
              size="7xl"
              as="p"
              className="!font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01"
            >
              Hoặc đăng ký bằng
            </Text>
            <div className="flex w-full justify-between gap-5 mt-4">
              <div className="flex w-1/3 justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 p-5">
                <Img
                  src="images/img_google.svg"
                  alt="google"
                  className="h-[38px] w-[38px]"
                />
              </div>
              <div className="flex w-1/3 justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 p-5">
                <Img
                  src="images/img_icon_font_awesome.svg"
                  alt="iconfont"
                  className="h-[48px] w-[48px]"
                />
              </div>
              <div className="flex w-1/3 justify-center rounded-lg border-2 border-solid border-indigo-300 bg-white-A700 p-5">
                <Img
                  src="images/img_apple.svg"
                  alt="apple"
                  className="h-[44px] w-[44px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
