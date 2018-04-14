import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../shared/services/products.service';
import { Product } from './../../../shared/model/product.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
product: Product = new Product();

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

    onSubmitShop(productForm: NgForm) {
      this.productsService.create(this.product)
        .subscribe((phone) => {
          productForm.reset();
          this.router.navigate(['/products']);
        });
    }

}
