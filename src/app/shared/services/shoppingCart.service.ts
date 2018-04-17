import { BaseApiService } from './base-api.service';
import { Product } from '../model/product.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs/Rx';
import {of} from 'rxjs/observable/of';

@Injectable()

export class ShoppingCartService extends BaseApiService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];
  private static readonly SHOPPINGCART_API = `${BaseApiService.BASE_API}/shoppingCart`;

  constructor(private http: Http) {
    super();
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }

  public removeFromCart(item: Product) {
     const currentItems = [...this.itemsInCart];
     const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
     this.itemsInCartSubject.next(itemsWithoutRemoved);
   }



//
// export class ShoppingCartService extends BaseApiService {
//   private static readonly SHOPPINGCART_API = `${BaseApiService.BASE_API}/shoppingCart`;
//
//   private items: Array<Product>;
//   private itemsSubject = new Subject<Array<Product>>();
//
//   // Observable string streams
//   items$: Observable<Array<Product>> = this.itemsSubject.asObservable();
//
//   constructor(private http: Http) {
//     super();
//   }
//
//   list(): Observable<Array<Product>> {
//     return this.http.get(ShoppingCartService.SHOPPINGCART_API, BaseApiService.defaultOptions)
//     .map((res: Response) => {
//       this.items = res.json();
//       this.itemsSubject.next(this.items);
//       return this.items;
//     })
//     .catch(error => this.handleError(error));
//   }
//
//   addProductToCart(item: Product): Observable<Product> {
//     return this.http.post(ShoppingCartService.SHOPPINGCART_API, ShoppingCart, new RequestOptions({ withCredentials: true }))
//       .map((res: Response) => res.json())
//       .catch(error => this.handleError(error));
//   }
//
//   removeProductFromCart(item: Product): Observable<void> {
//     return this.http.delete(ShoppingCartService.SHOPPINGCART_API, BaseApiService.defaultOptions)
//       .map((res: Response) => res.json())
//       .catch(error => this.handleError(error));
//   }
//
//   // getTotalAmount(): Observable<number> {
//   //   return this.itemsSubject.map((items: Product[]) => {
//   //     return items.reduce((prev, curr: Product) => {
//   //       return prev + curr.price;
//   //     }, 0);
//   //   });
//   // }
//
  pay(id: string, data) {
    return this.http.post(`${ShoppingCartService.SHOPPINGCART_API}/${id}/pay`, data, BaseApiService.defaultOptions)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

}
