import { Component, OnInit } from '@angular/core';
// import { ShoppingCart } from '../../../shared/model/shoppingCart.model';
import { ShoppingCartService } from './../../../shared/services/shoppingCart.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../../../shared/model/product.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]> = of([]);
    public shoppingCartItems: Product[] = [];

    constructor(private cartService: ShoppingCartService) {
      this.shoppingCartItems$ = this
        .cartService
        .getItems();

      this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    }

    ngOnInit() {
    }



}
