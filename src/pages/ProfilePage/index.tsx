import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ProfilePage() {
  let accessToken = useSelector((state: any) => state.auth.accessToken);
  let userInformation = useSelector((state: any) => state.userInfo.userInfo);
  const navigate = useNavigate();
  console.log(userInformation);
  if (accessToken === null) {
    if (localStorage.getItem("access-token") !== null) {
      accessToken = localStorage.getItem("access-token");
      userInformation = JSON.parse(localStorage.getItem("user-info")!);
    } else {
      navigate("/login");
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
      <Header />
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="max-w-[1200px] px-[21px] mt-[30px] mx-auto w-full md:px-5 sm:px-5">
          <div className="flex flex-col items-center">
            <div className="gap-2 w-1/5 flex flex-col items-center md:w-full">
              <Img
                src="images/img_profile_circle_svgrepo_com.svg"
                alt="profile"
                className="h-48 w-48 rounded-full"
              />
              <Heading
                size="2xl"
                as="h1"
                className="!font-manrope !font-semibold !text-gray-900"
              >
                {userInformation.accountName}
              </Heading>
              <Text
                size="xl"
                as="p"
                className="!font-manrope !font-medium !text-gray-600"
              >
                Email: {userInformation.email}
              </Text>
            </div>
            <div className="flex items-center mt-8 w-1/2 gap-6 md:w-full md:flex-row md:justify-center">
              <div className="flex-1 rounded-lg flex items-center gap-6 border border-gray-300 bg-white p-6 shadow-md">
                <div className="flex items-center justify-center bg-gray-200 rounded-full w-12 h-12">
                  <Img
                    src="images/img_thumbs_up.svg"
                    alt="silver"
                    className="h-6 w-6"
                  />
                </div>
                <Heading
                  size="md"
                  as="h2"
                  className="text-lg font-semibold text-gray-900"
                >
                  Silver
                </Heading>
              </div>
              <div className="flex-1 rounded-lg flex items-start gap-4 border border-gray-300 bg-white p-6 shadow-md">
                <div className="flex items-center gap-2 bg-gray-200 rounded-full p-3 ">
                  <Text
                    size="xl"
                    as="p"
                    className="w-6 h-6 flex items-center justify-center bg-black text-gray-950 rounded-full"
                  >
                    0
                  </Text>
                  <Img
                    src="images/img_arrow_up.svg"
                    alt="arrowup"
                    className="h-6 w-6"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <Heading
                    size="xs"
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Ưu đãi
                  </Heading>
                  <Text size="md" as="p" className="text-gray-600">
                    Dùng ngay
                  </Text>
                </div>
              </div>
            </div>
            <div className="my-8 self-stretch">
              <div className="gap-4 flex flex-col">
                <Link to="/order">
                  <ProfileSection
                    icon="images/img_lock_black_900.svg"
                    title="Lịch sử mua hàng"
                  />
                </Link>
                <ProfileSection
                  icon="images/img_icon_terms_privacy.svg"
                  title="Quản lý địa chỉ"
                />
                <ProfileSection
                  icon="images/img_thumbs_up_gray_300_05.svg"
                  title="Lịch sử đặt lịch"
                />
                <ProfileSection
                  icon="images/img_user_black_900.svg"
                  title="Cài đặt"
                />
                <ProfileSection
                  icon="images/img_inbox.svg"
                  title="Về chúng tôi"
                />
                <ProfileSection
                  icon="images/img_group_248.svg"
                  title="Điều khoản sử dụng"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
