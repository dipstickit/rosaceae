import { AxiosResponse } from "axios";
import instance from "./axiosCustomize";
import { SpaLocation } from "../types/spaLocation.type";

const getAllLocation = (): Promise<AxiosResponse<SpaLocation>> => {
  return instance.get(`location`);
};

const getLocationNearBy = (): Promise<AxiosResponse<SpaLocation>> => {
  return instance.get(
    `location/nearby-spa?latitude=10.868614&longitude=106.762813&radiusKm=10`
  );
};
export default {
  getAllLocation,
  getLocationNearBy,
};
