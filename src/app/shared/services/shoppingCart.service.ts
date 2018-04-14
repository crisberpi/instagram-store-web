import { BaseApiService } from './base-api.service';
import { Product } from '../model/product.model';
import { ShoppingCart } from '../model/shoppingCart.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ShoppingCartService extends BaseApiService {
  private static readonly SHOPPINGCART_API = `${BaseApiService.BASE_API}/shoppingCart`;

  constructor(private http: Http) {
    super();
  }

  list(): Observable<Array<ShoppingCart>> {
    return this.http.get(ShoppingCartService.SHOPPINGCART_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  addProductToCart(product: Product): Observable<ShoppingCart> {
    return this.http.post(ShoppingCartService.SHOPPINGCART_API, ShoppingCart, new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  removeProductFromCart(id: string): Observable<void> {
    return this.http.delete(`${ShoppingCartService.SHOPPINGCART_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  pay(id: string): Observable<ShoppingCart> {
    return this.http.post(ShoppingCartService.SHOPPINGCART_API, ShoppingCart, new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
