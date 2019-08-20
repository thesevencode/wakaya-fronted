import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: {
          title: 'Product',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'PagesComponent' },
            { title: 'product' }
          ]
        }
      },
      // {
      //   path: 'producto/:id',
      //   component: ProductDetailComponent,
      //   data: {
      //     title: 'Product',
      //     urls: [
      //       { title: 'Dashboard', url: '/dashboard' },
      //       { title: 'PagesComponent' },
      //       { title: 'product' }
      //     ]
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
