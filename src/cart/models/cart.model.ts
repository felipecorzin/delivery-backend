import { Product } from 'src/products/models/product.model';

export interface CartModel {
  totalQty?: number;
  totalPrice?: number;
  shippingCost?: number;
  shippingLimit?: number;
  shippingType?: string;
  items: Product[];
}
