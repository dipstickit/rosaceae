import { Helmet } from "react-helmet";
import { Img, Button, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import ProductCard from "../../components/ProductCard";

interface ProductData {
  trangim: string;
  trangimbasic: string;
}
const data: ProductData[] = [
  {
    trangim: "images/img_rectangle_6003.png",
    trangimbasic: "Trang điểm basic",
  },
  {
    trangim: "images/img_rectangle_6004.png",
    trangimbasic: "Trang điểm douyin",
  },
  {
    trangim: "images/img_rectangle_6005.png",
    trangimbasic: "Trang điểm cô dâu",
  },
];
const data1 = [
  { nailsbasicone: "images/img_rectangle_6009.png", nailsbasic: "Nails basic" },
  {
    nailsbasicone: "images/img_rectangle_6010.png",
    nailsbasic: "Nails kiểu hàn",
  },
  {
    nailsbasicone: "images/img_rectangle_6011.png",
    nailsbasic: "Nails thiết kế ",
  },
];
const data2 = [
  { nimibasic: "images/img_rectangle_6012.png", nimibasic1: "Nối mi basic" },
  { nimibasic: "images/img_rectangle_6013.png", nimibasic1: "Nối mi angle" },
  {
    nimibasic: "images/img_rectangle_6014.png",
    nimibasic1: "Nối mi thiết kế ",
  },
];
const data3 = [
  {
    image: "images/img_rectangle_6006.png",
    giudngsinh: "Gội đầu dưỡng sinh 45 phút",
  },
  {
    image: "images/img_rectangle_6007.png",
    giudngsinh: "Gội đầu dưỡng sinh 60 phút",
  },
  { image: "images/img_rectangle_6008.png", giudngsinh: "Gội đầu chuyên sâu " },
];

export default function MakeupServicePagePage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Header2 />
      <div className="max-w-[1353px] mt-[46px] mx-auto flex w-full flex-col items-center md:p-5">
        <div className="h-[637px] relative self-stretch">
          <Text
            size="8xl"
            as="p"
            className="leading-[150%] right-[-0.66px] bottom-[0.00px] w-[62%] absolute m-auto !font-montserrat13 !text-gray-800"
          >
            Nơi cung cấp dụng cụ làm đẹp tại nhà là không gian thoải mái và tiện
            lợi, nơi bạn có thể tận hưởng các liệu trình chăm sóc cá nhân chất
            lượng, do các chuyên gia làm đẹp thực hiện ngay tại không gian riêng
            tư của mình.
          </Text>
          <div className="top-[0.00px] gap-[39px] w-[97%] absolute left-0 right-0 m-auto flex md:relative md:flex-col">
            <div className="sm:gap-[26px] gap-[53px] w-[39%] flex flex-col items-start md:w-full">
              <Img
                src="images/img_mask_group_495x516.png"
                alt="image"
                className="h-[495px] w-full object-cover md:h-auto"
              />
              <div className="flex">
                <Heading
                  size="6xl"
                  as="h1"
                  className="!font-syne13 !text-gray-900_06"
                >
                  <span className="text-gray-900_06">Địa điểm làm</span>{" "}
                  <span className="text-orange-700">&nbsp;đẹp</span>{" "}
                </Heading>
              </div>
            </div>
            <Img
              src="images/img_image_54.png"
              alt="image"
              className="w-[58%] h-[475px] object-cover md:w-full"
            />
          </div>
        </div>

        <div className="gap-[43px] flex flex-1 flex-col mt-[5rem]">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex py-2.5">
              <Heading
                size="11xl"
                as="h3"
                className="!font-suwannaphum13 !text-gray-900_06"
              >
                Trang điểm hàng ngày
              </Heading>
            </div>
            <Button
              shape="round"
              className="min-w-[210px] mb-2.5 self-end !rounded-sm border border-solid border-gray-900_06 font-montserrat13 sm:px-5"
            >
              Khám phá tất cả
            </Button>
          </div>
          <div className="gap-[130px] w-[96%] flex md:w-full md:flex-col">
            {data.map((item, index) => (
              <ProductCard
                key={"makeupservice17" + index}
                className="gap-[34px] items-center md:w-full"
                {...item} // Spread the item object as props
              />
            ))}
          </div>
        </div>
        <div className="gap-[188px] mt-[221px] w-[97%] flex flex-col md:w-full">
          <div className="flex flex-1 pt-1">
            <div className="gap-[43px] flex w-full flex-col">
              <div className="flex items-center justify-between gap-5">
                <Heading
                  size="11xl"
                  as="h2"
                  className="!font-sura13 !text-gray-900_06"
                >
                  Gội đầu
                </Heading>
                <Button
                  shape="round"
                  className="min-w-[210px] !rounded-sm border border-solid border-gray-900_06 font-montserrat13 sm:px-5"
                >
                  Khám phá tất cả
                </Button>
              </div>
              <div className="gap-[130px] w-[96%] flex md:w-full md:flex-col">
                {data.map((item, index) => (
                  <ProductCard
                    key={"makeupservice17" + index}
                    className="gap-[34px] items-center md:w-full"
                    {...item} // Spread the item object as props
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="gap-[43px] flex flex-1 flex-col">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex py-2.5">
                <Heading
                  size="11xl"
                  as="h3"
                  className="!font-suwannaphum13 !text-gray-900_06"
                >
                  Làm nail
                </Heading>
              </div>
              <Button
                shape="round"
                className="min-w-[210px] mb-2.5 self-end !rounded-sm border border-solid border-gray-900_06 font-montserrat13 sm:px-5"
              >
                Khám phá tất cả
              </Button>
            </div>
            <div className="gap-[130px] w-[96%] flex md:w-full md:flex-col">
              {data.map((item, index) => (
                <ProductCard
                  key={"makeupservice17" + index}
                  className="gap-[34px] items-center md:w-full"
                  {...item} // Spread the item object as props
                />
              ))}
            </div>
          </div>
          <div className="gap-[46px] flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-5">
              <Heading
                size="11xl"
                as="h4"
                className="mb-[5px] !font-syne13 !font-semibold !text-gray-900_06"
              >
                Nối Mi
              </Heading>
              <Button
                shape="round"
                className="min-w-[210px] !rounded-sm border border-solid border-gray-900_06 font-montserrat13 sm:px-5"
              >
                Khám phá tất cả
              </Button>
            </div>
            <div className="gap-[130px] w-[96%] flex md:w-full md:flex-col">
              {data.map((item, index) => (
                <ProductCard
                  key={"makeupservice17" + index}
                  className="gap-[34px] items-center md:w-full"
                  {...item} // Spread the item object as props
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[156px] flex gap-3 md:flex-col">
          <div className="rounded-[19px] p-[19px] flex flex-col items-center border-2 border-solid border-blue_gray-50_04 bg-white-A700">
            <Img
              src="images/img_icon_pagination.svg"
              alt="iconpagination"
              className="w-[38px] h-[38px]"
            />
          </div>
          <div className="rounded-[19px] p-[19px] flex flex-col items-center border-2 border-solid border-blue_gray-50_04 bg-white-A700">
            <Img
              src="images/img_icon_pagination_black_900.svg"
              alt="iconpagination"
              className="w-[38px] h-[38px]"
            />
          </div>
          <Button
            color="blue_A400"
            size="10xl"
            className="rounded-[19px] min-w-[77px] font-opensans13 sm:px-5"
          >
            1
          </Button>
          <Button
            color="white_A700"
            size="10xl"
            className="rounded-[19px] min-w-[77px] border-2 border-solid border-blue_gray-50_04 font-opensans13 sm:px-5"
          >
            2
          </Button>
          <Button
            color="white_A700"
            size="10xl"
            className="rounded-[19px] min-w-[77px] border-2 border-solid border-blue_gray-50_04 font-opensans13 sm:px-5"
          >
            3
          </Button>
          <Button
            color="white_A700"
            size="10xl"
            className="rounded-[19px] min-w-[77px] font-opensans13 sm:px-5"
          >
            ...
          </Button>
          <Button
            color="white_A700"
            size="10xl"
            className="rounded-[19px] min-w-[77px] border-2 border-solid border-blue_gray-50_04 font-opensans13"
          >
            10
          </Button>
          <div className="rounded-[19px] p-[19px] flex flex-col items-center border-2 border-solid border-blue_gray-50_04 bg-white-A700">
            <Img
              src="images/img_icon_pagination_black_900_38x38.svg"
              alt="iconpagination"
              className="w-[38px] h-[38px]"
            />
          </div>
          <div className="rounded-[19px] p-[19px] flex flex-col items-center border-2 border-solid border-blue_gray-50_04 bg-white-A700">
            <Img
              src="images/img_icon_pagination_38x38.svg"
              alt="iconpagination"
              className="w-[38px] h-[38px]"
            />
          </div>
        </div>
      </div>
      <Footer className="mt-[15px]" />
    </>
  );
}
