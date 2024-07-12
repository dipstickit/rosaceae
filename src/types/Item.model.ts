export interface Image {
  imageUrl: string;
}
export interface Item {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  itemRate: number;
  itemImages: Image[];
  commentCount: number;
  countUsage: number;
  quantity: number;
  discount: number;
  category: {
    categoryId: number;
    categoryName: string;
  };
  itemType: {
    itemTypeId: number;
    itemTypeName: string;
  };
}
export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface ItemType {
  itemTypeId: number;
  itemTypeName: string;
}

export interface Items {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  itemRate: number;
  itemImages: Image[];
  commentCount: number;
  countUsage: number;
  quantity: number;
  discount: number;
  itemType: ItemType;
}

export interface ResponseData {
  content: Item[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
