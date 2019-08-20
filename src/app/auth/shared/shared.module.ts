import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar/bottombar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BottombarComponent,
    NavbarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BottombarComponent,
    NavbarComponent,
    TopbarComponent
  ]
})
export class SharedModule { }
