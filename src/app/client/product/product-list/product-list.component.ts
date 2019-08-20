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
  categories_selected = [];


  constructor(
    private categorieService: CategorieService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getAllProduct();
    // this.getProductsByCategories();
  }

  filterByCategorie(categorie){
    const existing = this.categories_selected.indexOf(categorie);

    if (existing < 0) {
      this.categories_selected.push(categorie);
    } else if (existing > 0 || existing === 0) {
      this.categories_selected.splice(existing, 1);
    }

    return this.categories_selected.length == 0  ? this.getAllProduct() : this.getProductsByCategories();

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
        this.productos = res['item'];
      });
  }
  getProductsByCategories(){
    this.productService.getByCategories(this.categories_selected)
      .then(res => {
        this.productos = res['item'];
      });
  }

}
