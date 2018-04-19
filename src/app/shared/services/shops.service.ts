import { BaseApiService } from './base-api.service';
import { Shop } from '../model/shop.model';
import { User } from '../model/user.model';
import { Product } from '../model/product.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ShopsService extends BaseApiService {
  private static readonly SHOPS_API = `${BaseApiService.BASE_API}/shops`;

  constructor(private http: Http) {
    super();
  }

  index(): Observable<Array<Shop>> {
    return this.http.get(ShopsService.SHOPS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  list(): Observable<Array<Shop>> {
    return this.http.get(ShopsService.SHOPS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Shop> {
    return this.http.get(`${ShopsService.SHOPS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  editOne(id: string): Observable<Shop> {
    return this.http.get(`${ShopsService.SHOPS_API}/new/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  like(id: string): Observable<Shop> {
    return this.http.get(`${ShopsService.SHOPS_API}/${id}/like`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  getShopProducts(id: string): Observable<Shop>  {
    return this.http.get(`${ShopsService.SHOPS_API}/${id}/products`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }


  create(shop: Shop): Observable<Shop> {
      return this.http.post(ShopsService.SHOPS_API, shop.asFormData(), new RequestOptions({ withCredentials: true }))
        .map((res: Response) => res.json())
        .catch(error => this.handleError(error));
    }

  edit(shop: Shop): Observable<Shop> {
    return this.http.put(`${ShopsService.SHOPS_API}/${shop.id}`, shop.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }


  delete(id: string): Observable<void> {
    return this.http.delete(`${ShopsService.SHOPS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
