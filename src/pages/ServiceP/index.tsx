import { Helmet } from "react-helmet";
import { Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServiceCard from "../../components/Card/ServiceCard";

interface Props {
  className?: string;
  userimage?: string;
  buttontext?: string;
  titletext?: string;
}
const data: Props[] = [
  {
    userimage: "images/img_rectangle_6003.png",
    buttontext: "Xem",
    titletext: "Mèo beauty  - Nguyễn Thị Minh Khai, Q1",
  },
  {
    userimage: "images/img_rectangle_6003.png",
    buttontext: "Xem",
    titletext: "Mèo beauty  - Nguyễn Thị Minh Khai, Q1",
  },
  {
    userimage: "images/img_rectangle_6003.png",
    buttontext: "Xem",
    titletext: "Mèo beauty  - Nguyễn Thị Minh Khai, Q1",
  },
];
export default function ServicePage() {
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
        <div>
          <Header />
        </div>
        <div className="flex flex-col items-end">
          <div className="mr-[47px] mt-[89px] w-[91%] flex flex-col md:mr-0 md:w-full md:p-5">
            <div className="w-[96%] flex flex-col items-center md:w-full">
              <Img
                src="images/img_image_55.png"
                alt="imagefiftyfive"
                className="rounded-[75px] h-[624px] w-full object-cover md:h-auto"
              />
              <Heading
                size="12xl"
                as="h1"
                className="mt-[20px] relative !font-suwannaphum4 !font-bold"
              >
                Trang điểm basic
              </Heading>
            </div>
            <div className="gap-[53px] w-[88%] mt-11 flex flex-col md:w-full mb-[10rem]">
              {data.map((item, index) => (
                <ServiceCard
                  userimage={item.userimage}
                  buttontext={item.buttontext}
                  titletext={item.titletext}
                  key={index}
                  className="max-w-[1149px] h-[303px] mx-auto w-full md:p-5"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
