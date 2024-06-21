// src/pages/Cart.js
import { AiOutlineArrowLeft, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutItem from './checkoutItem';
import { RootState } from '../../store/store';
import { close } from '../../store/CheckOutSlice';
import { clear } from './../../store/cartSlice';
import { Link } from 'react-router-dom';

const formatPrice = (price: number): string => {
  return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

export default function Cart() {
  const dispatch = useDispatch();
  const { quantity, cartItems, total } = useSelector((state: RootState) => state.cart);

  return (
    <>
      {/* Background làm mờ */}
      <div className="bg-black bg-opacity-70 fixed inset-0 z-40"></div>

      {/* Nội dung giỏ hàng */}
      <div className="fixed z-50 top-0 left-0 w-1/3 h-full bg-pastel-200 p-6 rounded-r-lg shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between text-black mb-6">
          <div 
            onClick={() => dispatch(close())}
            className="flex items-center cursor-pointer text-sm text-black"
          >
            <AiOutlineArrowLeft className="text-black" />
            <span className="ml-2 uppercase">Tiếp tục mua hàng</span>
          </div>
          <div className="text-lg font-bold">Giỏ hàng ({quantity})</div>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div className="text-center text-2xl uppercase text-black">Chưa có sản phẩm nào trong giỏ hàng!</div>
          ) : (
            <>
              {cartItems.map(cartItem => (
                <CheckOutItem key={cartItem.itemId} cartItem={cartItem} />
              ))}
              <div className="flex justify-between items-center mt-8 text-black">
                <div className="text-lg font-bold">Tổng tiền: {formatPrice(total)}</div>
                <div className="cursor-pointer" onClick={() => dispatch(clear())}>
                  <AiOutlineDelete className="text-red-500 text-2xl" />
                </div>
              </div>
              <Link to="/checkout">
                <div 
                  className="text-center bg-white text-primary p-3 mt-8 rounded-xl hover:bg-gray-100 transition duration-300"
                >
                  Đến trang Thanh Toán
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
