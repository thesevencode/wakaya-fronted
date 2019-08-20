import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categories = [];
  productos = [];


  constructor(
    private categorieService: CategorieService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getAllProduct();
    this.getProductsByCategories();
  }

  getCategories() {
    this.categorieService.getAllCategories()
      .then(res => {
        this.categories = res['item'];
      });
  }

  getAllProduct(){
    this.productService.getAll()
      .then(res => {
        this.productos = ['item'];
      });
  }
  getProductsByCategories(){
    this.productService.getByCategories(['licor'])
      .then(res => {
        console.log("res:", res);
      });
  }

}
