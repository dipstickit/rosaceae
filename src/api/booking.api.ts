import { AxiosResponse } from "axios";
import instance from "./axiosCustomize";
import { SpaLocation } from "../types/spaLocation.type";

const getAllLocation = (): Promise<AxiosResponse<SpaLocation>> => {
  return instance.get(`location`);
};

const getLocationNearBy = (
  latitude: number,
  longitude: number
): Promise<AxiosResponse<SpaLocation>> => {
  const url = `location/nearby-spa?latitude=${latitude}&longitude=${longitude}&radiusKm=50`;
  return instance.get(url);
};

const getTimeBooking = (): Promise<AxiosResponse<any>> => {
  return instance.get("booking/time-booking");
};

const createBooking = (bookingInfo: any): Promise<AxiosResponse<any>> => {
  return instance.post("booking", bookingInfo);
};

const getBookingById = (customerID: number): Promise<AxiosResponse<any>> => {
  return instance.get(`booking/customer/${customerID}`);
};

export default {
  getAllLocation,
  getLocationNearBy,
  getTimeBooking,
  createBooking,
  getBookingById,
};
