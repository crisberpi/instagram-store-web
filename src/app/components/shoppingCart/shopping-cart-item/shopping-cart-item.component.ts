import { Component, OnInit } from '@angular/core';
import { Shop } from '../../../shared/model/shop.model';
import { User } from '../../../shared/model/user.model';
import { ShopsService } from './../../../shared/services/shops.service';
import { SessionService } from './../../../shared/services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from '../../../shared/model/product.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent  {

      shop: Shop = new Shop();
      user: User;

    constructor(private shopService: ShopsService,
      private sessionService: SessionService,
      private router: Router,) {

    }

    ngOnInit(){
      this.user = this.sessionService.getUser();
    }


    onSubmitShop(shopForm: NgForm ) {
        this.shopService.create(this.shop)
          .subscribe((shop) => {
            shopForm.reset();
            this.router.navigate(['/shops']);
          });
      }
    }
