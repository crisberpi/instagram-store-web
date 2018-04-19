import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../shared/model/shop.model';
import { User } from '../../../shared/model/user.model';
import { Product } from '../../../shared/model/product.model';
import { ShopsService } from './../../../shared/services/shops.service';
import { SessionService } from './../../../shared/services/session.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
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
    this.user = this.sessionService.getUser();
    this.routes.params.subscribe((params: Params) => {
      const shopId = params['id'];
      this.shopsService.getShopProducts(shopId)
        .subscribe((shop: Shop) => {
          this.shop = shop;
          //this.products = shop.products;
        });

    })
    // this.routes
    //   .data
    //   .subscribe(data => {
    //     console.log(data)
    //     this.shop = data['shop'];
    //   });
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.shopsService.delete(this.shop.id)
        .subscribe(() => {
          this.router.navigate(['/shops']);
        });
    }
  }

  onClickEdit() {
    this.shopsService.editOne(this.shop.id)
      .subscribe((shop) => {
          this.router.navigate(['/new', shop.id]);
    });
  }


  onClickFavorite(shop) {
    this.shopsService.like(this.user.id)
      .subscribe(() => {
        this.router.navigate(['/shops/:id']);
      });
  }



}
