import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  private url;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.url = URL + '/producer/';
  }

  getById(_id) {
    return this.http.get(URL + '/producer/id_producer/'+_id).toPromise();
  }

  saveShop(shopping) {
    console.log("el registro de la venta que se va a realizar ... ", shopping);
    return this.http.post(URL + '/product/by_categories', { shopping }).toPromise();
  }


}
