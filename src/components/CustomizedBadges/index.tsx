import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { open } from "../../store/CheckOutSlice";

export function CustomizedBadges() {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state: RootState) => state.cart);

  return (
    <div className="relative">
      <button onClick={() => dispatch(open())} className="flex items-center">
        <AiOutlineShoppingCart className="w-7 h-7 text-white" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-orange-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {quantity}
        </span>
      </button>
    </div>
  );
}
