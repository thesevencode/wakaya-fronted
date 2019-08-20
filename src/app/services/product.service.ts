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

    let formData = new FormData();

    const token = localStorage.getItem('token');

    for (const iterator of product.url) {
      formData.append(iterator.name, iterator);

    }


    this.http.post(URL + '/image/product/5d517c642d3346572838fda0', formData).toPromise();

    // return this.http.post<any>(`${this.url}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkNTJhYzUzNjUxMDhlNmYwODNiYzEzYiIsImVtYWlsIjoianVhbi4xNTEyMTAwMUBnbWFpbC5jb20iLCJ0eXBlIjoicHJvZHVjZXIiLCJ0ZXJtcyI6dHJ1ZSwiYWN0aXZhdGUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMTktMDgtMTNUMTI6MjU6NTUuNDA3WiIsInVwZGF0ZWRBdCI6IjIwMTktMDgtMTNUMTM6MDI6NTMuNzA1WiIsIl9fdiI6MH0sInBlcm1pc3Npb25zIjpbInVzZXI6d3JpdGUiLCJ1c2VyOnJlYWQiXSwiaWF0IjoxNTY2Mjc1NTYyLCJleHAiOjE1NjYyODk5NjJ9.JxWi4tqc4_E-BT1QuG78geoAQ0A73LS4AL_v_Dk-q0E`, product).toPromise();
  }

  getAll(){
    return this.http.get(URL + '/product').toPromise();
  }

  getByCategories(categories){
    return this.http.post(URL + '/product/by_categories', { categories }).toPromise();
  }

}
