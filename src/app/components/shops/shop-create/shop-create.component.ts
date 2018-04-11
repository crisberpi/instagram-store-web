import { ShopsService } from './../../../shared/services/shops.service';
import { Shop } from './../../../shared/model/shop.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private shopsService: ShopsService
  ) { }

  onSubmitShop(shopForm: NgForm) {

      this.shopsService.create(this.shop)
        .subscribe((phone) => {
          shopForm.reset();
          this.router.navigate(['/shops']);
        });
    }
  }
