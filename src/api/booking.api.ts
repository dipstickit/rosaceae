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
  const url = `location/nearby-spa?latitude=${latitude}&longitude=${longitude}&radiusKm=10`;
  return instance.get(url);
};

const getTimeBooking = (): Promise<AxiosResponse<any>> => {
  return instance.get('booking/time-booking')
}

const createBooking = (bookingInfo: any): Promise<AxiosResponse<any>> => {
  return instance.post('booking', bookingInfo)
}

export default {
  getAllLocation,
  getLocationNearBy,
  getTimeBooking,
  createBooking
};
