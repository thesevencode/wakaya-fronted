import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    console.log('guard ', this.userService._isLogged());

    if (this.userService._isLogged()) {
      console.log('pasando');
      return true;
    } else {
      console.log('bloueado por el guard');
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
