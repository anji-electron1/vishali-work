import { Product } from "./product.entity";
import { Injectable } from "@angular/core";
import { findLocaleData } from "@angular/common/src/i18n/locale_data_api";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = [
      {
        productname: "JBL Flip 4",
        code: "cat1-0001",
        price: 18.01,
        cartprice: 0,
        available: 10,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/61bwTIJQWXL._SX425_.jpg"
      },
      {
        productname: "Bose Sound Link",
        code: "cat1-0010",
        price: 129.05,
        cartprice: 0,
        available: 9,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/61Cf8EJHBFL._SX425_.jpg"
      },
      {
        productname: "AB Portable",
        code: "cat1-0008",
        price: 19.78,
        cartprice: 0,
        available: 11,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/61bwTIJQWXL._SX425_.jpg"
      },
      {
        productname: "AE-9 Portable",
        code: "cat1-0011",
        price: 299.99,
        cartprice: 0,
        available: 8,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/61Cf8EJHBFL._SX425_.jpg"
      },
      {
        productname: "JBL Pulse 3",
        code: "cat1-0009",
        price: 23.05,
        cartprice: 0,
        available: 10,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/I/61bwTIJQWXL._SX425_.jpg"
      }
    ];
  }
  findAll(): Product[] {
    return this.products;
  }

  find(code: string): Product {
    return this.products[this.getSelectedIndex(code)];
  }

  private getSelectedIndex(code: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].code == code) {
        return i;
      }
    }
    return -1;
  }
}
