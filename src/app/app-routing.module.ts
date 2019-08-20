import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { ClientComponent } from './client/client.component';

import { LoginGuard } from './services/guards/login.guard';

export const Approutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      }
    ],
    canActivate: [LoginGuard]
  },
  {
    path: '',
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ],
    // canActivate: [LoginGuard]
  },
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
