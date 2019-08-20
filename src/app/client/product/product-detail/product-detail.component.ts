import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: String;
  product = {};
  categories = [];
  products = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct();
    // this.getProductsByCategories();
  }

  getProduct(){
    this.productService.getById(this.id)
      .then(res => {
        this.product = res['item'];
        this.getProductsByCategories(res['item'].categories);
      });
  }

  getProductsByCategories(categories){
    this.productService.getByCategories(categories)
      .then(res => {
        console.log("RES:",res)
        this.products = res['item'];
      });
  }


}
