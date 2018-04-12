import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../shared/model/shop.model';
import { ShopsService } from './../../../shared/services/shops.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
shop: Shop = new Shop();

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private shopsService: ShopsService
  ) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        this.shop = data['shop'];
      });
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
