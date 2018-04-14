import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/model/product.model';
import { ProductsService } from './../../../shared/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product = new Product();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        console.log(data);
        this.product = data['product'];
      });
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.productsService.delete(this.product.id)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
    }
  }

  onClickEdit(product) {
    this.productsService.edit(this.product)
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }

}
