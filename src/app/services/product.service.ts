import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = URL + '/product/';
  }

  createProduct(product) {
    const token = localStorage.getItem('token');
    return this.http.post<any>(`${this.url}?token=${token}`, product).toPromise();
  }
}
