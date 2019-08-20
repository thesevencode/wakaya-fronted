import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AuthRoutes } from './auth.routing';
import { SharedModule } from './shared/shared.module';


import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorsComponent } from '../components/errors/errors.component';





@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),
    SharedModule
  ]
})
export class AuthModule { }
