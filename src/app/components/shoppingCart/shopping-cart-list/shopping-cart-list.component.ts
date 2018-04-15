import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../shared/services/shoppingCart.service';
import { ShoppingCart } from './../../../shared/model/shoppingCart.model';
import { Product } from '../../../shared/model/product.model';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
shoppingCart: Array<Product> = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.list()
      .subscribe((shoppingCart) => this.shoppingCart = shoppingCart);
  }

}
