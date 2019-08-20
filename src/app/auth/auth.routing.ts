import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

import { ProductDetailComponent } from '../client/product/product-detail/product-detail.component';
import { ProductListComponent } from '../client/product/product-list/product-list.component';


export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'productos',
        component: ProductListComponent
      },
      {
        path: 'producto/:id',
        component: ProductDetailComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Auth',
          urls: [
            { title: 'Auth', url: '/auth' },
            { title: 'AuthComponent' },
            { title: 'auth' }
          ]
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Auth',
          urls: [
            { title: 'Auth', url: '/auth' },
            { title: 'AuthComponent' },
            { title: 'auth' }
          ]
        }
      }

    ]
  }
];
