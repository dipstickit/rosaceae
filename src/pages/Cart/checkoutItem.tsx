import { useDispatch } from "react-redux";
import { increase, decrease, remove } from "./../../store/cartSlice";
import { Items } from "../../types/Item.model";
import { AiOutlineDelete } from "react-icons/ai";

interface IProductProps {
  cartItem: Items;
}

const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

const CheckOutItem = ({ cartItem }: IProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border border-solid border-white p-4 mb-10 text-white">
      <div className="flex items-center gap-4">
        <img
          src={cartItem.itemImages[0]?.imageUrl}
          alt={cartItem.itemName}
          className="w-20 h-20 object-cover"
        />
      </div>
      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{cartItem.itemName}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-primary bg-white rounded-full flex items-center justify-center"
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div className="text-lg">{cartItem.quantity}</div>
          <button
            className="w-8 h-8 text-primary bg-white rounded-full flex items-center justify-center"
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <AiOutlineDelete
          className="cursor-pointer text-xl"
          onClick={() => dispatch(remove(cartItem))}
        />
        <div className="text-lg">
          {cartItem.itemPrice * cartItem.quantity
            ? formatPrice(
                (cartItem.itemPrice -
                  (cartItem.itemPrice * cartItem.discount) / 100) *
                  cartItem.quantity
              )
            : "0.0 VND"}
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
