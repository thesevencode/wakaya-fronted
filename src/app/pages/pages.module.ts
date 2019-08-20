import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';

import { SharedModule } from '../shared/shared.module';

import { ProductOneComponent } from './product/product-one/product-one.component';
import { ProductTwoComponent } from './product/product-two/product-two.component';


@NgModule({
  declarations: [
    ProductOneComponent,
    ProductTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule
  ]
})
export class PagesModule { }
