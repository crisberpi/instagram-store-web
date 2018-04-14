import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../shared/services/products.service';
import { Product } from './../../../shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.list()
      .subscribe((products) => this.products = products);
  }

}
