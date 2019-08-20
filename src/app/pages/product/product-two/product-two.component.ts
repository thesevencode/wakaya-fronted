import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css']
})
export class ProductTwoComponent implements OnInit {

  public categories = [];
  public uploadImages = [];
  public product = {
    name: '',
    description: '',
    categories: [],
    url: [],
    price: '',
    stock: '',
    type: 'image',

  };

  public formData = new FormData();

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const split = this.router.url.split('/');
    this.product.categories = split[split.length - 1].split(',');
  }

  public createProduct() {

    this.productService.createProduct({ product: this.product, formdata: this.formData })
      .then(res => {

        console.log(res);
      })
      .catch(e => {
      });
  }

  public beforeStep() {
    this.router.navigate([`/pages/product-one`]);
  }

  public loadImages(files) {
    let i = 0;
    if (files.length === 0) {
      return;
    }


    this.uploadImages = [];

    if (!files) {
      this.uploadImages = [];
      return;
    }

    this.product.url = files;

    for (const element of files) {
      const reader = new FileReader();
      this.formData.append('image' + (i += 1), element);

      reader.readAsDataURL(element);

      reader.onload = (e: any) => {
        // Simply set e.target.result as our <img> src in the layout
        this.uploadImages.push(e.target.result);
      };

    }


    // if (archivo.type.indexOf('image') < 0) {
    //   swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
    //   this.imagenSubir = null;
    //   return;
    // }


    // console.log(reader.readAsDataURL(file[0]));



    // console.log(tempImages);



  }

}
