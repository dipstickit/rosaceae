import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Input } from "../../components";
import Header from "../../components/Header";
import { loginValidateSchema } from "../../validates/ValidateSchema";
import { useFormik } from "formik";
import { userHandler } from "../../usecases/HandleLogin";
import { ChangeEvent, useState } from "react";
import { setAccessToken } from "../../store/authActions";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: ''
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginValidateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    }
  });

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value.trim()
    })
  }

  const login = async () => {
    const result: any = await userHandler.Login(Object.entries(formik.errors).length, loginInfo)
    console.log(result.data)
    if (result.data.status === 0) {
      const token: string = result.data.access_token
      dispatch(setAccessToken(token));
      navigate('/')
    }
  }

  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header className="ml-[12rem]" />
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 pb-[5px] pl-[139px] pt-[110px] md:flex-col md:pl-5 md:pt-5">
        <div className="flex w-[36%] flex-col items-start md:w-full">
          <Heading
            size="8xl"
            as="h1"
            className="!font-overpass !font-extrabold tracking-[3.60px] !text-blue_gray-800_01"
          >
            CHÀO MỪNG TRỞ LẠI!
          </Heading>
          <Text
            size="9xl"
            as="p"
            className="mt-[27px] flex !font-opensans tracking-[2.40px] !text-blue_gray-800_01"
          >
            <span className="text-blue_gray-800_01">
              Nếu bạn chưa có tài khoản,
            </span>
            <a href="signup" className="text-blue_gray-800_01 underline">
              đăng ký tại đây
            </a>
          </Text>
          <div className="mt-[61px] flex flex-col gap-[43px] self-stretch">
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-col items-start gap-3.5">
                <Heading
                  size="4xl"
                  as="h2"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Tên đăng nhập
                </Heading>
                <input
                  type="email"
                  name="email"
                  placeholder={`example@gmail.com`}
                  className="self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 font-nunito tracking-[2.40px] !text-black-900 sm:px-5"
                  onChange={e => { formik.handleChange(e); handleInput(e) }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.email}</div>
                )}
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <Heading
                  size="4xl"
                  as="h3"
                  className="!font-opensans !font-semibold tracking-[2.80px] !text-blue_gray-800_01"
                >
                  Mật khẩu
                </Heading>
                <input
                  type="password"
                  name="password"
                  // suffix={
                  //   <Img
                  //     src="images/img_icon_font_awesome_free_solid_e_eyeslash.svg"
                  //     alt="icon/font awesome free/solid/e/eye-slash"
                  //     className="h-[32px] w-[32px]"
                  //   />
                  // }
                  onChange={e => { formik.handleChange(e); handleInput(e) }}
                  onBlur={formik.handleBlur}
                  placeholder={`********`}
                  className="gap-[35px] self-stretch rounded-[40px] px-2 py-3 border-2 border-solid border-black-900 sm:pr-5"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='flex-1 flex items-center mt-2 text-red-500 italic text-sm'>{formik.errors.password}</div>
                )}
              </div>
              <div className="flex justify-between gap-5 sm:flex-col">
                <div className="flex w-[40%] justify-center gap-4 sm:w-full sm:p-5">
                  <div className="w-[20%] rounded-[24px] border-2 border-solid border-white-A700 bg-white-A700 p-[9px]">
                    <div className="h-[29px] w-[29px] rounded-[14px] bg-white-A700 shadow-2xl" />
                  </div>
                  <div className="flex pb-2.5 pt-[9px]">
                    <Text
                      size="7xl"
                      as="p"
                      className="!font-opensans !font-normal tracking-[2.00px] !text-blue_gray-800_01"
                    >
                      Remember me
                    </Text>
                  </div>
                </div>
                <div className="flex pb-[9px] pr-2.5 pt-2.5 sm:p-5">
                  <a
                    href="/forgotpassword"
                    target="_blank"
                  >
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!font-opensans !font-semibold tracking-[2.00px]"
                    >
                      Quên mật khẩu?
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
            <Button
              color="black_900"
              size="11xl"
              className="w-full rounded-[40px] font-nunito font-extrabold tracking-[2.80px] sm:px-5"
              onClick={login}
            >
              Đăng nhập
            </Button>
          </div>
          <div className="relative mr-[185px] mt-12 h-[43px] w-[51%] self-end md:mr-0">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[43px] w-[82%] bg-white-A700" />
            <Text
              size="7xl"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-nunito !font-normal tracking-[2.00px] !text-blue_gray-800_01"
            >
              Hoặc đăng nhập bằng
            </Text>
          </div>
          <div className="mt-4 flex w-[75%] justify-between gap-5 self-center md:w-full md:p-5">
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
        <Img
          src="images/img_image_48.png"
          alt="imagefortyeight"
          className="h-[965px] w-[57%] object-cover md:w-full"
        />
      </div>


    </>
  );
}
