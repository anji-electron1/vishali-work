import { ProductService } from "../product.service";
import { Product } from "../product.entity";
import { Component, OnInit } from "@angular/core";
import { Item } from "../item.entity";
import { Router } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  private productItems: Item[];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productItems = this.productService.findAll().map<Item>(product => {
      let productItem = new Item();
      productItem.product = product;
      productItem.qty = 1;
      return productItem;
    });
  }
  addToCart(productItem) {
    this.cartService.addItem(productItem);
    //this.topbar.cartSize = this.cartService.getCount();
  }
  checkoutToCart() {
    this.router.navigate(["/billing"]);
  }
}
