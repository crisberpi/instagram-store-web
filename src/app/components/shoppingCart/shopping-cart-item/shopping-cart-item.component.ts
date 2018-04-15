import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/model/shoppingCart.model';
import { ShoppingCartService } from './../../../shared/services/shoppingCart.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../../../shared/model/product.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  shoppingCart: ShoppingCart = new ShoppingCart();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        console.log(data);
        this.shoppingCart = data['shoppingCart'];
      });
  }

  removeProductFromCart(item: Product) {
    console.log(item);
    this.shoppingCartService.removeProductFromCart(item)
  }

  // getTotal(): Observable<number> {
  //   return this.shoppingCartService.getTotalAmount();
  // }


}
