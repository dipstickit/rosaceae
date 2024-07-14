import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "./../../store/cartSlice";
import { RootState } from "../../store/store";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Marginer } from "../../components/Checkout/Marginer";
import { Footer, Header, Input } from "../../components";
import instance from "../../api/axiosCustomize";
import { useFormik } from "formik";
import * as Yup from "yup";

const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
};

interface City {
  Name: string;
  Id: string;
  Districts: District[];
}

interface District {
  Name: string;
  Id: string;
  Wards: Ward[];
}

interface Ward {
  Name: string;
  Id: string;
}

const CheckOutPage: React.FC = () => {
  const [cityData, setCityData] = useState<City[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quantity, cartItems, total, finalTotal } = useSelector(
    (state: RootState) => state.cart
  );

  const isUserLoggedIn = Boolean(localStorage.getItem("usersID"));

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((result) => {
        setCityData(result.data);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerPhone: "",
      address: "",
      city: "",
      district: "",
      ward: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Vui lòng nhập tên"),
      customerPhone: Yup.string().required("Vui lòng nhập số điện thoại"),
      city: Yup.string().required("Vui lòng chọn tỉnh thành"),
      district: Yup.string().required("Vui lòng chọn quận huyện"),
      ward: Yup.string().required("Vui lòng chọn phường xã"),
    }),
    onSubmit: async (values) => {
      if (!isUserLoggedIn) {
        toast.error("Bạn cần đăng nhập trước khi thanh toán");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        return;
      }

      const id = toast.loading("Đơn hàng đang được thực hiện...");

      if (cartItems.length === 0) {
        toast.update(id, {
          render:
            "Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
        return;
      }

      const orderData = {
        description: "Thanh toán đơn hàng",
        returnUrl:
          "https://joint-socially-pipefish.ngrok-free.app/api/v1/payOS/success",
        cancelUrl:
          "https://joint-socially-pipefish.ngrok-free.app/api/v1/payOS/cancel",
        total: finalTotal,
        voucherId: 0,
        customerId: localStorage.getItem("usersID"),
        customerPhone: values.customerPhone,
        customerName: values.customerName,
        customerAddress: `${values.address}, ${values.ward}, ${values.district}, ${values.city}`,
        items: cartItems.map((item, index) => {
          const productKey = item.itemId ? item.itemId : `unknown-${index}`;
          if (!item.itemId) {
            console.warn(
              `Item ${index} is missing itemId, using ${productKey}`
            );
          }
          return {
            itemId: productKey,
            quantity: item.quantity,
          };
        }),
      };

      try {
        const response = await instance.post("payOS/createOrderQR", orderData);
        const { error, message, data } = response.data;
        if (error === 0) {
          const { checkoutUrl } = data;
          toast.update(id, {
            render: "Đơn hàng được tạo thành công!",
            type: "success",
            isLoading: false,
            autoClose: 4000,
          });
          if (checkoutUrl) {
            window.location.href = checkoutUrl;
            return;
          }
        } else {
          throw new Error(message || "Unknown error with order creation.");
        }
      } catch (error) {
        toast.update(id, {
          render: `Đã xảy ra lỗi: ${error.message || "Unknown error"}`,
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
      }
    },
  });

  return (
    <>
      <Header />
      <div className="container mx-auto mt-[100px]">
        {quantity === 0 ? (
          <div className="flex flex-col justify-center">
            <Marginer margin="4em" direction="vertical" />
            <div className="text-center text-4xl font-black text-primary">
              Không có sản phẩm nào trong giỏ hàng
            </div>
            <Link to="/" className="text-center underline">
              bấm vào đây để quay lại trang chủ
            </Link>
            <Marginer margin="4em" direction="vertical" />
          </div>
        ) : (
          <div>
            <div className="text-center text-4xl font-black text-primary">
              Thanh Toán
            </div>
            <div className="sx:flex shadow-ml flex-col ml:flex-row">
              <div className="w-full ml:w-1/2 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl text-primary">
                    Đơn hàng
                  </h1>
                  <h2 className="font-semibold text-2xl text-primary">
                    {quantity} sản phẩm
                  </h2>
                </div>
                {cartItems.map((cartItem) => (
                  <div
                    className="ml:flex items-strech py-8 ml:py-10 lg:py-8 border-t border-primary"
                    key={cartItem.itemId}
                  >
                    <div className="ml:w-4/12 2xl:w-1/4 w-full">
                      <img
                        src={cartItem.itemImages[0].imageUrl}
                        alt="San pham"
                        className="h-full object-center object-cover ml:block hidden"
                      />
                      <img
                        src={cartItem.itemImages[0]?.imageUrl}
                        alt="San pham"
                        className="ml:hidden w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml:pl-3 ml:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <p className="text-xs leading-3 text-gray-800 ml:pt-0 pt-4">
                        Rosaceae
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <p className="text-base font-black leading-none text-gray-800">
                          {cartItem.itemName}
                        </p>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Thông tin chi tiết: {cartItem.itemDescription}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Số lượng: {cartItem.quantity}
                      </p>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base font-black leading-none text-primary">
                          {formatPrice(cartItem.itemPrice!)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex font-semibold text-primary text-sx mt-10">
                  <Link to="/">
                    <span className="flex items-center">
                      <svg
                        className="fill-current mr-2 text-primary w-4"
                        viewBox="0 0 448 512"
                      >
                        <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                      </svg>
                      Quay lại trang mua hàng
                    </span>
                  </Link>
                </div>
              </div>
              <div id="summary" className="w-full ml:w-1/2 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b border-primary pb-8 text-primary">
                  Thông tin mua hàng
                </h1>
                <div className="flex justify-between mt-5 mb-5">
                  <span className="font-semibold text-sx uppercase">
                    Tạm tính
                  </span>
                  <span className="font-semibold text-sx">
                    {formatPrice(total)}
                  </span>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex flex-col space-y-4 mt-4 mb-5">
                    <Input
                      size="md"
                      type="text"
                      name="customerName"
                      placeholder="Tên khách hàng"
                      onChange={(value) =>
                        formik.setFieldValue("customerName", value)
                      }
                      value={formik.values.customerName}
                      onBlur={formik.handleBlur}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.customerName &&
                        formik.errors.customerName
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch ${
                        formik.touched.customerName &&
                        formik.errors.customerName
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    {formik.touched.customerName &&
                      formik.errors.customerName && (
                        <div className="text-red-500 text-xl">
                          {formik.errors.customerName}
                        </div>
                      )}
                    <Input
                      size="md"
                      type="text"
                      name="customerPhone"
                      placeholder="Số điện thoại"
                      onChange={(value) =>
                        formik.setFieldValue("customerPhone", value)
                      }
                      value={formik.values.customerPhone}
                      onBlur={formik.handleBlur}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.customerPhone &&
                        formik.errors.customerPhone
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch ${
                        formik.touched.customerPhone &&
                        formik.errors.customerPhone
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    {formik.touched.customerPhone &&
                      formik.errors.customerPhone && (
                        <div className="text-red-500 text-xl">
                          {formik.errors.customerPhone}
                        </div>
                      )}
                    <Input
                      size="md"
                      type="text"
                      name="address"
                      placeholder="Địa chỉ"
                      onChange={(value) =>
                        formik.setFieldValue("address", value)
                      }
                      value={formik.values.address}
                      onBlur={formik.handleBlur}
                      shape="round"
                      variant="outline"
                      color={
                        formik.touched.address && formik.errors.address
                          ? "gray_500_01"
                          : "blue_gray_100"
                      }
                      className={`self-stretch ${
                        formik.touched.address && formik.errors.address
                          ? "border-red-500"
                          : "border-black-900"
                      }`}
                    />
                    {formik.touched.address && formik.errors.address && (
                      <div className="text-red-500 text-xl">
                        {formik.errors.address}
                      </div>
                    )}
                    <select
                      required
                      className="form-select border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-2 mb-3"
                      id="city"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    >
                      <option value="" selected disabled>
                        Chọn tỉnh thành
                      </option>
                      {cityData.map((city) => (
                        <option key={city.Id} value={city.Name}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                    {formik.touched.city && formik.errors.city && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.city}
                      </p>
                    )}
                    <select
                      required
                      className="form-select border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-2 mb-3"
                      id="district"
                      name="district"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.district}
                      disabled={!formik.values.city}
                    >
                      <option value="" selected disabled>
                        Chọn quận huyện
                      </option>
                      {cityData
                        .find((c) => c.Name === formik.values.city)
                        ?.Districts.map((district) => (
                          <option key={district.Id} value={district.Name}>
                            {district.Name}
                          </option>
                        ))}
                    </select>
                    {formik.touched.district && formik.errors.district && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.district}
                      </p>
                    )}
                    <select
                      required
                      className="form-select border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-2 mb-3"
                      id="ward"
                      name="ward"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ward}
                      disabled={!formik.values.district}
                    >
                      <option value="" selected disabled>
                        Chọn phường xã
                      </option>
                      {cityData
                        .find((c) => c.Name === formik.values.city)
                        ?.Districts.find(
                          (d) => d.Name === formik.values.district
                        )
                        ?.Wards.map((ward) => (
                          <option key={ward.Id} value={ward.Name}>
                            {ward.Name}
                          </option>
                        ))}
                    </select>
                    {formik.touched.ward && formik.errors.ward && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.ward}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-bold inline-block mb-3 text-sx uppercase">
                      Thanh toán
                    </label>
                    <div className="block p-3 border border-primary text-gray-600 w-full text-sx ">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-row justify-center items-center">
                          <Checkbox defaultChecked disabled />
                          <p className="text-center font-semibold">
                            Chuyển khoản qua ngân hàng Kien Long
                          </p>
                        </div>
                        <p className="text-start p-2 text-ml bg-gray-300">
                          <WarningAmberIcon /> Sau khi bấm đặt đơn hàng bạn sẽ
                          được chuyển đến trang thông tin đơn hàng kèm với mã QR
                          để thực hiện thanh toán
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sx uppercase">
                      <span>Tổng cộng</span>
                      <span>{formatPrice(finalTotal)}</span>
                    </div>
                    <button
                      type="submit"
                      className=" font-semibold bg-secondary py-3 text-sx text-white uppercase w-full"
                    >
                      Đặt hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <Marginer margin="4em" direction="vertical" />
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default CheckOutPage;
