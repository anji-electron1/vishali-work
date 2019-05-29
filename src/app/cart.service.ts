import { Item } from "./item.entity";
import { Cart } from "./cart.entity";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private cart: Cart;
  constructor() {
    this.cart = new Cart();
  }
  getCart() {
    return this.cart;
  }
  getCount() {
    return this.cart.items.length;
  }
  addItem(item: Item) {
    this.cart.items.push(item);
    this.cart.totalAmount =
      this.cart.totalAmount + item.qty * item.product.price;
  }
  removeItem(item: Item) {
    let index = this.cart.items.indexOf(item);
    if (index > -1) {
      this.cart.totalAmount =
        this.cart.totalAmount - item.qty * item.product.price;
      this.cart.items.splice(index, 1);
    }
  }
}
