import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/Card/ProductList";

interface Props {
  className?: string;
  title?: string;
  buttontext?: string;
  userimage?: string;
  ratingCount?: number;
}

const spaData: Props[] = [
  {
    title: "Gà Spa",
    buttontext: "XEM CHI TIẾT",
    userimage: "images/img_rectangle_14_143x225.png",
    ratingCount: 54,
  },
  {
    title: "Seoul Center",
    buttontext: "XEM CHI TIẾT",
    userimage: "images/img_rectangle_14_4.png",
    ratingCount: 78,
  },
  {
    title: "Serene Spa",
    buttontext: "XEM CHI TIẾT",
    userimage: "images/img_rectangle_14_4.png",
    ratingCount: 62,
  },
];

const SpaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header className="ml-[12rem]"/>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="max-w-[1331px] gap-[33px] mt-[19px] mx-auto flex w-full flex-col items-center md:p-5">
          <div className="gap-[46px] flex flex-col self-stretch">
            <div className="sm:gap-[27px] gap-[54px] flex flex-1 flex-col items-start">
              <Heading
                size="11xl"
                as="h1"
                className="!font-syne7 !font-semibold !text-gray-900_06"
              >
                Danh sách Spa
              </Heading>
              {spaData.map((spa, index) => (
                <ProductList
                  key={index}
                  title={spa.title}
                  buttontext={spa.buttontext}
                  userimage={spa.userimage}
                  ratingCount={spa.ratingCount}
                />
              ))}
            </div>
          </div>
          <Button
            color="blue_gray_100_02"
            size="8xl"
            className="rounded-[10px] min-w-[388px] font-manrope7 font-extrabold sm:px-5 mb-[15px]"
          >
            Hiển thị thêm
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpaPage;
