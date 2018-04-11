import { Component, OnInit } from '@angular/core';
import { ShopsService } from './../../../shared/services/shops.service';
import { Shop } from './../../../shared/model/shop.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
shops: Array<Shop> = [];

  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.shopsService.list()
      .subscribe((shops) => this.shops = shops);
  }

}
