import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  cartSize: number = 1;
  constructor(private cartService: CartService) {}

  async ngOnInit() {}
}
