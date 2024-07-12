import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "./../../store/cartSlice";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Marginer } from "../../components/Checkout/Marginer";
import { Footer, Header } from "../../components";
import instance from "../../api/axiosCustomize";

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
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [ward, setWard] = useState<string>("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const { quantity, cartItems, total, finalTotal } = useSelector(
    (state: RootState) => state.cart
  );
  useEffect(() => {
    const citis = document.getElementById("city") as HTMLSelectElement;
    const districts = document.getElementById("district") as HTMLSelectElement;
    const wards = document.getElementById("ward") as HTMLSelectElement;

    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((result) => {
        renderCity(result.data);
      });

    function renderCity(data: City[]) {
      for (const x of data) {
        citis.options[citis.options.length] = new Option(x.Name, x.Id);
      }

      citis.onchange = function (this: GlobalEventHandlers) {
        const inputElement = this as HTMLInputElement;
        districts.length = 1;
        wards.length = 1;
        if (inputElement.value !== "") {
          const result = data.filter((n) => n.Id === inputElement.value);
          for (const k of result[0].Districts) {
            districts.options[districts.options.length] = new Option(
              k.Name,
              k.Id
            );
          }
        }
      };

      districts.onchange = function (event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        wards.length = 1;
        const dataCity = data.filter((n) => n.Id === citis.value);
        if (selectElement.value !== "") {
          const dataWards = dataCity[0].Districts.filter(
            (n) => n.Id === selectElement.value
          )[0].Wards;
          for (const w of dataWards) {
            wards.options[wards.options.length] = new Option(w.Name, w.Id);
          }
        }
      };
    }
  }, []);

  const getAddress = (): string => {
    const city = document.getElementById("city") as HTMLSelectElement;
    const district = document.getElementById("district") as HTMLSelectElement;
    const ward = document.getElementById("ward") as HTMLSelectElement;
    const addressInput = document.getElementById("address") as HTMLInputElement;

    const cityText = city.options[city.selectedIndex].text;
    const districtText = district.options[district.selectedIndex].text;
    const wardText = ward.options[ward.selectedIndex].text;
    const addressText = addressInput.value;

    return `${addressText}, ${wardText}, ${districtText}, ${cityText}`;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!city) {
      newErrors.city = "Vui lòng chọn tỉnh thành";
    }

    if (!district) {
      newErrors.district = "Vui lòng chọn quận huyện";
    }

    if (!ward) {
      newErrors.ward = "Vui lòng chọn phường xã";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = async () => {
    if (!validateForm()) {
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

    console.log("Cart Items:", cartItems);

    const orderData = {
      description: "Thanh toán đơn hàng",
      returnUrl:
        "https://joint-socially-pipefish.ngrok-free.app/api/v1/payOS/success",
      cancelUrl:
        "https://joint-socially-pipefish.ngrok-free.app/api/v1/payOS/cancel",
      total: finalTotal,
      voucherId: 0,
      customerId: localStorage.getItem("usersID"),
      items: cartItems.map((item, index) => {
        const productKey = item.itemId ? item.itemId : `unknown-${index}`;
        if (!item.itemId) {
          console.warn(`Item ${index} is missing itemId, using ${productKey}`);
        }
        return {
          itemId: productKey,
          quantity: item.quantity,
        };
      }),
    };

    console.log("Final Order Data:", orderData);

    try {
      const response = await instance.post("payOS/createOrderQR", orderData);
      const { error, message, data } = response.data;
      console.log(response.data);
      if (error === 0) {
        const { checkoutUrl, qrCode, orderCode } = data;
        console.log("Checkout URL:", checkoutUrl);
        console.log("QR Code:", qrCode);
        console.log("Order Code:", orderCode);

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
      console.error("Error placing order:", error.message || error);
      toast.update(id, {
        render: `Đã xảy ra lỗi: ${error.message || "Unknown error"}`,
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
  };

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
              {" "}
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
                  <div className="ml:flex items-strech py-8 ml:py-10 lg:py-8 border-t border-primary">
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
                <div className="flex flex-col space-y-4 mt-4 mb-5">
                  <span className=""></span>
                  <span className=""></span>
                  <span className=""></span>
                  <span className=" flex flex-col">
                    <select
                      required
                      className="form-select border mt-2 p-2 border-primary form-select-sx mb-3"
                      id="city"
                      aria-label=".form-select-sx"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="" selected>
                        Chọn tỉnh thành
                      </option>
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-xs">{errors.city}</p>
                    )}
                    <select
                      required
                      className="form-select border  border-primary  p-2 form-select-sx mb-3"
                      id="district"
                      aria-label=".form-select-sx"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                    >
                      <option value="" selected>
                        Chọn quận huyện
                      </option>
                    </select>
                    {errors.district && (
                      <p className="text-red-500 text-xs">{errors.district}</p>
                    )}
                    <select
                      required
                      className="form-select  border p-2 border-primary form-select-sx"
                      id="ward"
                      aria-label=".form-select-sx"
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                    >
                      <option value="" selected>
                        Chọn phường xã
                      </option>
                    </select>
                    {errors.ward && (
                      <p className="text-red-500 text-xs">{errors.ward}</p>
                    )}
                  </span>
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
                {/* <div>
                  <label className="font-bold inline-block mb-3 text-sx uppercase">
                    Vận chuyển
                  </label>
                  <select className="block p-2 border border-primary text-gray-600 w-full text-sx">
                    <option>
                      Giao hàng tận nơi - chuyển phát thương mại điện tử -
                      30.000đ
                    </option>
                  </select>
                </div> */}
                {/* <div className="my-10 p-4 border border-tertiary">
                  <label className="font-semibold inline-block mb-3 text-sx uppercase">
                    Mã giảm giá
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Nhập mã giảm giá tại đây"
                    className="p-2 text-sx w-full border border-primary"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  {couponDescription && (
                    <p className="text-primary font-medium mt-2">
                      {couponDescription}
                    </p>
                  )}
                  <button
                    className="mt-5 bg-red-500 hover:bg-red-600 px-5 py-2 text-sx text-white uppercase"
                    // onClick={applyCoupon}
                  >
                    Áp dụng mã
                  </button>
                </div> */}
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sx uppercase">
                    <span>Tổng cộng</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                  <button
                    className="bg-primaryy font-semibold hover:bg-secondary py-3 text-sx text-white uppercase w-full"
                    onClick={handleOrder}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
            <Marginer margin="4em" direction="vertical" />
          </div>
        )}
      </div>
      <Footer />
      <div />
    </>
  );
};

export default CheckOutPage;
