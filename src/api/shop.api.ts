import { AxiosResponse } from 'axios';
import instance from './axiosCustomize';
import { ResponseData, Item } from '../types/Item.model';

type GetItemParams = {
    page?: number;
    size?: number;
    categoryName?: string,
    minPrice? :number,
    maxPrice? :number
};

const getShop = (params: GetItemParams): Promise<AxiosResponse<ResponseData>> => {
    const queryString = Object.entries(params)
        .map(([key, value]) => value ? `${key}=${value}` : '')
        .filter(Boolean)
        .join('&');
    return instance.get(`shop${queryString ? `?${queryString}` : ''}`
);
};

const getShopById = (id: number, params: GetItemParams): Promise<AxiosResponse<Item>> => {
    const queryString = Object.entries(params)
    .map(([key, value]) => value ? `${key}=${value}` : '')
    .filter(Boolean)
    .join('&');
    return instance.get(`shop/${id}${queryString ? `?${queryString}` : ''}`);
};

export default {
    getShop,
    getShopById
};
