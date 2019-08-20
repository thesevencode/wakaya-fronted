import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember: boolean = false;
  email: string;

  user = {};

  constructor(
    private router: Router,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.verifyRemember();
  }
  verifyRemember() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.remember = true;
    }
  }
  sign_in(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.user = {
      email: form.value.email,
      password: form.value.password,
      type: null,
      terms: null
    };

    Swal.fire({
      title: 'Verificando Credenciales',
      onBeforeOpen: () => {
        Swal.showLoading();
        this.userService._sign_in(this.user, form.value.remember)
          .subscribe(resp => {
            Swal.hideLoading();
            Swal.close();
            this.router.navigate(['/']);
          });
      },
    });
  }

}
