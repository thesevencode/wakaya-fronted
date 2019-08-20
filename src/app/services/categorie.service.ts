import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { URL } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getAllCategories() {

    return this.http.get(URL + '/product/categorie').toPromise();
  }
}
