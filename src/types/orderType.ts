export interface OrderDetail {
  orderDetailId: number;
  quantity: number;
  price: number;
  itemId: number;
  itemName: string;
  itemTypeId: number;
  customerName: string;
  itemImages: string;
}

export interface Order {
  content: Order[];
  orderId: number;
  orderDate: string;
  total: number;
  orderStatus: string;
  orderDetails: OrderDetail[];
  customerPhone: string;
  customerAddress: string;
  customerName: string;
}

export interface ResponseData<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
