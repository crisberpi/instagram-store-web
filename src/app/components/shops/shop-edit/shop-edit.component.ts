import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Shop } from '../../../shared/model/shop.model';
import { User } from '../../../shared/model/user.model';
import { Product } from '../../../shared/model/product.model';
import { ShopsService } from './../../../shared/services/shops.service';
import { SessionService } from './../../../shared/services/session.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  shop: Shop;
  user: User;
  products: Array<Product>;
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private shopsService: ShopsService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {

    this.routes.params.subscribe((params: Params) => {
      const shopId = params['id'];
      this.shopsService.editOne(shopId)
        .subscribe((shop: Shop) => {
          this.shop = shop;
          //this.products = shop.products;
        });

    })

  }

}
