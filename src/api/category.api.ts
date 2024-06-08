import { AxiosResponse } from 'axios';
import instance from './axiosCustomize';
import { ResponseData, Item } from '../types/Item.model';



const getCategories = (): Promise<AxiosResponse<ResponseData>> => {
    return instance.get(`category`);
};

const getICategoryyId = (id: number): Promise<AxiosResponse<Item>> => {
    return instance.get(`category/${id}`);
};

export default {
    getCategories,
    getICategoryyId
};
