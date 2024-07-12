import { Link, useNavigate } from "react-router-dom";
import { Heading, Text, Img, RatingBar } from "./../..";
import { useDispatch } from "react-redux";
import { add } from "../../../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  className?: string;
  itemImages?: any[];
  itemName?: string;
  itemPrice?: number;
  discount?: number;
  itemType?: {
    itemTypeId: number;
    itemTypeName: string;
  };
  itemId?: number;
}

export default function ProductCardService({
  itemImages = [],
  itemName = "Massage cổ vai gáy",
  itemPrice = 199.0,
  discount = 25,
  itemType,
  itemId,
  ...props
}: Props) {
  const dispatch = useDispatch();

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const discountPrice = itemPrice - (itemPrice * discount) / 100;
  const handleAddToCart = () => {
    console.log("itemType: ", itemType);
    if (itemType?.itemTypeId === 1) {
      toast.error("Đây là dịch vụ không được thêm vào giỏ hàng!");
      return;
    }

    const product = {
      itemImages,
      itemName,
      itemPrice,
      discount,
      itemType,
      itemId,
    };
    dispatch(add(product));
    toast.success("Đã thêm 1 sản phẩm vào giỏ!");
  };

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <Link to={`/item/${itemId}`} className="w-full">
        <Img
          src={itemImages[0]?.imageUrl}
          alt="image"
          className="h-[282px] w-full object-cover rounded-t-lg"
        />
      </Link>
      <div className="mt-4 flex flex-col items-center w-full">
        <Heading
          as="h6"
          className="tracking-[0.50px] text-indigo-900 text-center text-lg font-semibold"
        >
          {itemName}
        </Heading>
        <div className="flex justify-center w-full mt-2">
          <RatingBar
            value={4}
            isEditable={true}
            color="#cfd9de"
            activeColor="#ffa331"
            size={14}
            className="flex"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-2 space-x-2">
          <Heading
            size="xl"
            as="p"
            className="tracking-[0.50px] text-sm font-bold text-gray-900"
          >
            {formatPrice(discountPrice)}
          </Heading>
          <Heading
            size="s"
            as="p"
            className="tracking-[0.50px] text-sm font-bold text-pink-300"
          >
            {discount}% OFF
          </Heading>
        </div>
        <div className="w-full mt-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-700 transition duration-300"
          >
            <Text> Thêm vào giỏ hàng</Text>
          </button>
        </div>
      </div>
    </div>
  );
}
