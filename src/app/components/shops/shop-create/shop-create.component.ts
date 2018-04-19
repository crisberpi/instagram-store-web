import { ShopsService } from './../../../shared/services/shops.service';
import { SessionService } from './../../../shared/services/session.service';
import { Shop } from './../../../shared/model/shop.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.css']
})
export class ShopCreateComponent {
  shop: Shop = new Shop();

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private shopsService: ShopsService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      const shopId = params['id'];
      this.shopsService.getShopProducts(shopId)
        .subscribe((shop: Shop) => {
          this.shop = shop;
          //this.products = shop.products;
        });

    })

  }

  onSubmitShop(shopForm: NgForm ) {
      this.shopsService.create(this.shop)
        .subscribe((shop) => {
          shopForm.reset();
          this.router.navigate(['/shops']);
        });
    }
  }
