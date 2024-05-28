import { Helmet } from "react-helmet";
import { Text, Img, SelectBox, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductCardService from "../../components/Card/ProductCardService";
import Sidebar2 from "../../components/Sidebar2";
import { Link } from "react-router-dom";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const productData = [
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Massage cổ vai gáy",
    saleprice: "₫199.000",
    oriprice: "₫500.000",
    saleoff: "25% Off",
  },
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Facial Treatment",
    saleprice: "₫299.000",
    oriprice: "₫600.000",
    saleoff: "50% Off",
  },
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Facial Treatment",
    saleprice: "₫299.000",
    oriprice: "₫600.000",
    saleoff: "50% Off",
  },
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Facial Treatment",
    saleprice: "₫299.000",
    oriprice: "₫600.000",
    saleoff: "50% Off",
  },
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Facial Treatment",
    saleprice: "₫299.000",
    oriprice: "₫600.000",
    saleoff: "50% Off",
  },
  {
    userimage: "images/img_rectangle_6028.png",
    title: "Facial Treatment",
    saleprice: "₫299.000",
    oriprice: "₫600.000",
    saleoff: "50% Off",
  },
];

export default function SpaDetailPage() {
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
        <Header  />
        <div className="sm:gap-[39px] md:gap-[59px] gap-[79px] flex flex-col">
          <div className="!bg-gray-100_08 py-4 flex justify-center items-center px-5 font-bold">
            <div className="text-blue-400 pr-2">Trang chủ /</div>
            <Link
              to="/spafeedback"
              className="text-black pr-2"
            >
              Đánh giá
            </Link>
          </div>
          <div className="flex items-start md:flex-col">
            <Sidebar2 />
            <div className="flex flex-1 flex-col gap-1 md:self-stretch md:p-5">
              <div className="gap-[17px] w-[95%] flex flex-col md:w-full">
                <Img
                  src="images/img_rectangle_1_copy.png"
                  alt="image"
                  className="h-[232px] object-cover"
                />
                <div className="bg-[url(/public/images/img_group_1278.svg)] pl-[23px] h-[45px] bg-cover bg-no-repeat md:h-auto sm:pl-5">
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <div className="flex items-center justify-between gap-5 w-[32%] md:w-full">
                      <Text as="p" className="!font-alata12 !text-gray-900_03">
                        36 dịch vụ
                      </Text>
                      <div className="flex items-center justify-between gap-5 w-[65%]">
                        <Text
                          as="p"
                          className="!font-alata12 !text-gray-900_03"
                        >
                          Lọc
                        </Text>
                        <SelectBox
                          size="sm"
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_900_03.svg"
                              alt="arrow down"
                              className="h-[3px] w-[7px]"
                            />
                          }
                          name="loidchv"
                          placeholder={`Loại dịch vụ`}
                          options={dropDownOptions}
                          className="w-[67%] gap-px font-alata12 text-gray-900_03 sm:pr-5"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 w-[62%] md:w-full">
                      <div className="flex items-center justify-center gap-[7px] w-[29%] mb-1.5">
                        <Text
                          as="p"
                          className="!font-alata12 !text-gray-900_03"
                        >
                          Show
                        </Text>
                        <SelectBox
                          size="xs"
                          shape="square"
                          indicator={
                            <Img
                              src="images/img_arrow_down_gray_900_03.svg"
                              alt="arrow down"
                              className="h-[3px] w-[7px]"
                            />
                          }
                          name="twelve"
                          placeholder={`12`}
                          options={dropDownOptions}
                          className="flex-grow gap-px font-alata12 text-gray-900_03 sm:px-5"
                        />
                      </div>
                      <div className="flex justify-center w-[19%]">
                        <div className="relative flex bg-gray-100_05 p-3.5 z-[1]">
                          <Img
                            src="images/img_grid.svg"
                            alt="grid"
                            className="h-[15px]"
                          />
                        </div>
                        <Img
                          src="images/img_megaphone.svg"
                          alt="megaphone"
                          className="ml-[-1px] w-[50%] h-[45px] relative"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-[53px] grid grid-cols-3 justify-center md:grid-cols-1 mb-[20px]">
                  {productData.map((product, index) => (
                    <ProductCardService key={index} {...product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center mt-6 md:px-5 mb-[25px]">
          <Heading size="7xl" as="p" className="text-center text-blue-400">
            Hiển thị thêm
          </Heading>
          {/* <div className="h-[3px] w-full bg-blue-400 mt-2" /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
