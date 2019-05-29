import { ProductListComponent } from "./product-list/product-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { HomeComponent } from "./home/home.component";
import { ProductListModule } from "./product-list/product-list.module";
import { ProvisionComponent } from "./provision/provision.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { AppRoutingModule } from "./app-routing.module";
import { BillingModule } from "./billing/billing.modules";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProvisionComponent,
    TopbarComponent
  ],
  imports: [BrowserModule, ProductListModule, BillingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProductListComponent]
})
export class AppModule {}
