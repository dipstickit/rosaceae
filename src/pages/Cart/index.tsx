import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Item from "../../components/Checkout/Item";
import OrderBill from "../../components/Checkout/OrderBill";

const cartData = [
  {
    img: "images/img_rectangle_6003.png",
    name: "Nails thiết kế",
    salePrice: "250.000vnd",
    quantity: "1",
    originPrice: "250.000vnd",
  },
  {
    img: "images/img_rectangle_6003.png",
    name: "Massage cổ vai gáy chuyên sâu",
    salePrice: "199.000vnd",
    quantity: "1",
    originPrice: "199.000vnd",
  },
];

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Rosaceae</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col bg-white-A700">
        <Header className="ml-[12rem]" />
        <div className="max-w-[1846px] mt-[20px] mx-auto flex w-full items-start gap-12 md:flex-col md:p-5">
          <Item className="flex-1 mt-10" data={cartData} />
          <OrderBill />
        </div>
        <Footer />
      </div>
    </>
  );
}
