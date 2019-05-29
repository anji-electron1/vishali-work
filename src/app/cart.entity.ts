import { Item } from "./item.entity";

export class Cart {
  items: Item[] = [];
  totalAmount: number = 0;
}
