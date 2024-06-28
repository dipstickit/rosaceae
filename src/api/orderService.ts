import { AxiosResponse } from "axios";
import instance from "./axiosCustomize";
import { Order, ResponseData } from "../types/orderType";

type GetOrderParams = {
  page?: number;
  size?: number;
  orderStatus?: string;
  minTotal?: number;
  maxTotal?: number;
};

const getOrders = (
  customerId: number,
  params: GetOrderParams
): Promise<AxiosResponse<ResponseData<Order>>> => {
  const queryString = Object.entries(params)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .filter(Boolean)
    .join("&");
  return instance.get(
    `order/customer/${customerId}${queryString ? `?${queryString}` : ""}`
  );
};

const getOrderById = (customerID: number): Promise<AxiosResponse<Order>> => {
  return instance.get(`order/customer/${customerID}`);
};

export default {
  getOrders,
  getOrderById,
};
