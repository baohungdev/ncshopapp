// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type ProductGeneral = {
  productId: number;
  name: string;
  price: number;
  imgUrl: string;
  namePath: string;
};

export type ProductDetail = {
  relateTags: [Tag];
  id: number;
  name: string;
  image: string;
  price: number;
  urlKey: string;
  shopFreeShipping: number;
  stockStatus: number;
  description: string;
  ratingInfo: {
    total_rated: number;
  };
};

export type ProductList = {
  Productlist: ProductGeneral[];
};

export type Tag = {
  title: string;
};
