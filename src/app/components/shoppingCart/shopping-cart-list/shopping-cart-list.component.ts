import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../../shared/services/shoppingCart.service';
import { Product } from '../../../shared/model/product.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItems$ = this
      .shoppingCartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

    public removeItem(item: Product) {
      this.shoppingCartService.removeFromCart(item)
    }

}
