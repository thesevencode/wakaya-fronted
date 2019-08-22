import { Routes } from '@angular/router';


import { ProductOneComponent } from './product/product-one/product-one.component';
import { ProductTwoComponent } from './product/product-two/product-two.component';
import { ProfileComponent } from './profile/profile.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product-one',
        component: ProductOneComponent,
        data: {
          title: 'Product',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'PagesComponent' },
            { title: 'product' }
          ]
        }
      },
      {
        path: 'product-two/:categories',
        component: ProductTwoComponent,
        data: {
          title: 'Product',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'PagesComponent' },
            { title: 'product' }
          ]
        }
      },
      {
        path: 'profile',
        component: ProfileComponent
      }

    ]
  }
];
