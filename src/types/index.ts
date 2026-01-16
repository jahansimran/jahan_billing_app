export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type BasketItem = Product & {
  quantity: number;
};

export type OfferResult = {
  description: string;
  saving: number;
};
