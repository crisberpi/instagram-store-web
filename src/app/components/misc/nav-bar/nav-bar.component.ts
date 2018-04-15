import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { User } from './../../../shared/model/user.model';
import { Product } from './../../../shared/model/product.model';
import { ShoppingCartService } from './../../../shared/services/shoppingCart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit, OnDestroy {
  private user: User;
  private userSubscription: Subscription;
  public shoppingCartItems$: Observable<Product[]>;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private routes: ActivatedRoute,
    public location: Location,
    private shoppingCartService: ShoppingCartService,
  ) {

    this.shoppingCartItems$ = this
         .shoppingCartService
         .getItems();

       this.shoppingCartItems$.subscribe(_ => _);
     }


  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.userSubscription = this.sessionService.onUserChanges()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
