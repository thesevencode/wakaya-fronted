import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../../../services/categorie.service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {
  allCategories = [];
  selectedCategories = [];
  goNextStep = false;

  constructor(
    private router: Router,
    private categorieService: CategorieService
  ) { }

  ngOnInit() {
    this.getAllCategories();
  }

  public nextStep() {
    if (this.selectedCategories.length > 0) {
      this.router.navigate([`/pages/product-two/${this.selectedCategories}`]);
    } else {
      console.log('"selecciona una categoria perra !!!"');
    }

  }

  selectCategorie(value) {
    const found = this.selectedCategories.indexOf(value);
    if (found < 0) {
      this.selectedCategories.push(value);
    } else if (found > 0 || found === 0) {
      this.selectedCategories.splice(found, 1);
    }
    // return value;
  }

  getAllCategories() {
    this.categorieService.getAllCategories()
      .then(res => {
        this.allCategories = res['item'];
      });

  }

}
