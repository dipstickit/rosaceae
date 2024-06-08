import { Link, useNavigate } from "react-router-dom";
import { Heading, Text, Img, RatingBar } from "./../..";

interface Props {
  className?: string;
  itemImages?: any[];
  itemName?: string;
  itemPrice?: number;
  discount?: number;
  itemType?: string;
  id?: number;
}

export default function ProductCardService({
  itemImages = [],
  itemName = "Massage cổ vai gáy",
  itemPrice = 199.0,
  discount = 25,
  itemType = "Sản Phẩm",
  id,
  ...props
}: Props) {
  const navigate = useNavigate();

  const discountedPrice = itemPrice - (itemPrice / 100) * discount;

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
    >
      <Link to={`/item/${id}`} className="w-full">
        <Img
          src={itemImages[0]?.imageUrl}
          alt="image"
          className="h-[282px] w-full object-cover rounded-t-lg"
        />
      </Link>
      <div className="mt-4 flex flex-col items-center w-full">
        <Heading
          as="h6"
          className="tracking-[0.50px] !text-indigo-900 text-center text-lg font-semibold"
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
          <Heading as="h6" className="tracking-[0.50px] text-lg text-light_blue-A200">
            đ{discountedPrice.toFixed(0)}
          </Heading>
          <Text
            size="xl"
            as="p"
            className="tracking-[0.50px] line-through text-gray-500"
          >
            đ{itemPrice.toFixed(0)}
          </Text>
          <Heading
            size="s"
            as="p"
            className="tracking-[0.50px] text-sm font-bold text-pink-300"
          >
            {discount}% OFF
          </Heading>
        </div>
        {/* <Heading
          as="h6"
          className="tracking-[0.50px] !text-indigo-900 text-center mt-2 text-sm font-medium"
        >
          {itemType}
        </Heading> */}
      </div>
    </div>
  );
}
