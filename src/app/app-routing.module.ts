import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ClientComponent } from './client/client.component';

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
    ]
  },
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'cliente',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
