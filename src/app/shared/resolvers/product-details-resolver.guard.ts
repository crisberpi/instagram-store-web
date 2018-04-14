import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product } from './../model/product.model';
import { ProductsService } from './../services/products.service';

@Injectable()
export class ProductDetailsResolverGuard implements Resolve<Product> {

  constructor(
    private router: Router,
    private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    return this.productsService
      .get(route.params['id'])
      .catch(error => {
        this.router.navigate(['/products']);
        return Observable.of(error);
      });
  }
}
