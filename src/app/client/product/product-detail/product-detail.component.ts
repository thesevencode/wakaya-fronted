import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from '../../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: String;
  product;
  categories = [];
  products = [];
  limit ;
  compra = 0;
  total;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
    let numero = this.userService.loadNumberOfProducts();
  }

  buyProduct(){
    
    if (this.userService._isLogged() == true){
      console.log("compraremos algo ");
    }else{
      let data = {
        _id : this.id,
        shop : this.compra
      };
      this.userService._saveStorageLogin(data);
      this.router.navigate([`/home/login`]);

    }


  }

  getProduct(){
    this.product = this.productService.getById(this.id)
      .then(res => {
        this.product = res['item'];
        this.limit = res['item'].stock;
        // this.getProductsByCategories(res['item'].categories);
      }); 
  }

  dismisStock(){

    if(this.product.stock <= 0){
      console.log("kya no se puede añadir ");
    }else{
      this.product.stock--;
      this.compra++;
    }
  }

  addStock() {
    if(this.product.stock >= this.limit){
    }else{
      this.product.stock++;
      this.compra--;
    }
  }

  getProductsByCategories(categories){
    this.productService.getByCategories(categories)
      .then(res => {
        console.log("RES:",res)
        this.products = res['item'];
      });
  }
}
