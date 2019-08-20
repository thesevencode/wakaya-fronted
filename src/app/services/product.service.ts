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
    this.http.post<any>(`${this.url}?token=${token}`, product).toPromise()
      .then(res => {
        this.http.post(URL + '/image/product/' + res.item._id, formData).toPromise()
          .then(resp => {
            return resp;
          });
      });

    return false;
  }

  getAll() {
    return this.http.get(URL + '/product').toPromise();
  }

  getByCategories(categories) {
    return this.http.post(URL + '/product/by_categories', { categories }).toPromise();
  }

  getById(_id){
    return this.http.get(URL + '/product/id_product/'+_id).toPromise();
  }

}
