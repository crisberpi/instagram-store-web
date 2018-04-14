import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../shared/model/shop.model';
import { ShopsService } from './../../../shared/services/shops.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
shop: Shop;
error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private shopsService: ShopsService
  ) { }

  ngOnInit() {
    this.routes.params.subscribe((params: Params) => {
      const shopId = params['id'];
      this.shopsService.get(shopId)
        .subscribe(shop => this.shop = shop);
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



}
