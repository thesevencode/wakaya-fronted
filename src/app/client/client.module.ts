import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PaypalComponent } from './paypal/paypal.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    PaypalComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports : [
    ProductDetailComponent,
    ProductListComponent,
    PaypalComponent
  ]
})
export class ClientModule { }
