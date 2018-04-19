import { ShopsService } from './../../../shared/services/shops.service';
import { SessionService } from './../../../shared/services/session.service';
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
    private shopsService: ShopsService,
    private sessionService: SessionService
  ) { }

  onSubmitShop(shopForm: NgForm ) {
      this.shopsService.create(this.shop)
        .subscribe((shop) => {
          shopForm.reset();
          this.router.navigate(['/shops']);
        });
    }
  }
