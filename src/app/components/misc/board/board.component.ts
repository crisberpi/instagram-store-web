import { Component, OnInit } from '@angular/core';
import { ShopsService } from './../../../shared/services/shops.service';
import { ProductsService } from './../../../shared/services/products.service';
import { Shop } from './../../../shared/model/shop.model';
import { Product } from './../../../shared/model/product.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
products: Array<Product>;

shops: Array<Shop>

  constructor(private shopService: ShopsService, private productService: ProductsService) { }

  ngOnInit() {
    this.productService.index().subscribe();
    this.shopService.index().subscribe();
  }

}
