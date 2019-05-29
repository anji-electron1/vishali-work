import { Component, OnInit, OnDestroy } from "@angular/core";
import { CartService } from "../cart.service";
import { Cart } from "../cart.entity";
import { Item } from "../item.entity";
import { Router } from "@angular/router";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.css"]
})
export class BillingComponent implements OnInit, OnDestroy {
  constructor(private cartService: CartService, private router: Router) {}
  private cart: Cart;
  model = {};
  ngOnDestroy(): void {
    console.log(this.model);

    localStorage.setItem("model", JSON.stringify(this.model));
  }
  ngOnInit() {
    this.cart = this.cartService.getCart();
    if (localStorage.getItem("model")) {
      this.model = JSON.parse(localStorage.getItem("model"));
    }
  }

  removeFromCart(item: Item) {
    this.cartService.removeItem(item);
  }

  checkOut() {
    this.router.navigate(["/provision"]);
  }
}
