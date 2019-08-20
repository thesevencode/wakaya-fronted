import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';



export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
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
