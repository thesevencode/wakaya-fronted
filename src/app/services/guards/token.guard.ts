import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(
    private userService: UserService
  ) {

  }

  canActivate(): Promise<boolean> | boolean {
    console.log('token guard');
    const token = this.userService.token;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expired = this.expired(payload.exp);
    console.log('token', token);
    console.log('payload', payload);
    console.log('expired', expired);

    if (expired) {
      this.userService._logout();
      return false;
    }
    return this.renewToken(payload.exp);
  }

  renewToken(expirationDate: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const tokenExp = new Date(expirationDate * 1000);
      const now = new Date();
      console.log('expira el token en ', tokenExp);
      console.log('fecha actual ', now);

      now.setTime(now.getTime() + (1 * 60 * 60 * 1000));
      console.log('fecha actual 2 ', now);
      if (tokenExp.getTime() > now.getTime()) {
        resolve(true);
      } else {
        this.userService._renewToken()
          .subscribe(() => {
            resolve(true);
          }, () => {
            this.userService._logout();
            reject(false);
          });
      }

    });
  }

  expired(expirationDate: number) {
    const now = new Date().getTime() / 1000;
    if (expirationDate < now) {
      return true;
    } else {
      return false;
    }
  }
}
