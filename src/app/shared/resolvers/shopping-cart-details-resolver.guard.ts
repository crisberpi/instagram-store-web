import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from './../model/shoppingCart.model';
import { ShoppingCartService } from './../services/shoppingCart.service';

@Injectable()
export class ShoppingCartDetailsResolverGuard implements Resolve<ShoppingCart> {
  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ShoppingCart> {
    return this.shoppingCartService
      .list()
      .catch(error => {
        this.router.navigate(['/']);
        return Observable.of(error);
      });
  }
}
