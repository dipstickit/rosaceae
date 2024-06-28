import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../../types/orderType";
import { setCustomerId } from "../../store/customerSlice";
import orderService from "../../api/orderService";
import { RootState } from "../../store/store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Img } from "../../components";

const OrderList: React.FC = () => {
  const dispatch = useDispatch();
  const customerId = useSelector(
    (state: RootState) => state.customer.customerId
  );
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedCustomerId = localStorage.getItem("usersID");
    if (savedCustomerId) {
      dispatch(setCustomerId(Number(savedCustomerId)));
    } else {
      console.error("User ID not found in localStorage.");
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getOrderById(customerId);
        setOrders(response.data.content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (customerId !== null) {
      fetchOrders();
    }
  }, [customerId]);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8">Error: {error}</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Thông tin</h1>
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.orderId} className="border rounded shadow-sm mb-4">
              <div className="p-4">
                <p className="text-gray-600">
                  Số điện thoại: {order.customerPhone}
                </p>
                <p className="text-gray-600">
                  Địa chỉ: {order.customerAddress}
                </p>
                <p className="text-gray-600">
                  Tổng: {formatPrice(order.total)}
                </p>
                <p className="text-gray-600">
                  Ngày : {new Date(order.orderDate).toLocaleString()}
                </p>
              </div>
              <div className="border-t">
                <h2 className="text-lg font-bold p-4">Thông tin đơn hàng</h2>
                <ul>
                  {order.orderDetails.map((detail) => (
                    <li
                      key={detail.orderDetailId}
                      className="border-t p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-20 h-20 overflow-hidden mr-4">
                          <Img
                            src={detail.itemImages}
                            className="w-full h-full object-cover"
                            alt="Item Image"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{detail.itemName}</p>
                          <p className="text-gray-600">
                            Số lượng: {detail.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {formatPrice(detail.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-8">No orders found.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrderList;
