import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shoppingCart.service';
import { Product } from '../../../shared/model/product.model';
import { SessionService } from '../../../shared/services/session.service';
import { User } from '../../../shared/model/user.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

interface Payment {
  name: string;
  price: string;
}

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {
  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];
  payment: Payment = {
    name: 'Falda',
    price: '34'
  };
  user: User;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private sessionService: SessionService
  ) {
    this.shoppingCartItems$ = this
      .shoppingCartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  public removeItem(item: Product) {
    this.shoppingCartService.removeFromCart(item)
  }

  private onClickPay () {
    this.shoppingCartService.pay(this.user.id, this.payment)
    .subscribe(
      res => {
        console.log(res.redirectUrl)
        window.location.href = res.redirectUrl;
      });
  }

}
