import { BaseApiService } from './base-api.service';
import { Product } from '../model/product.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductsService extends BaseApiService {
  private static readonly PRODUCTS_API = `${BaseApiService.BASE_API}/products`;

  constructor(private http: Http) {
    super();
  }

  index(): Observable<Array<Product>> {
    return this.http.get(ProductsService.PRODUCTS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }


  list(): Observable<Array<Product>> {
    return this.http.get(ProductsService.PRODUCTS_API, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  get(id: string): Observable<Product> {
    return this.http.get(`${ProductsService.PRODUCTS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  create(product: Product): Observable<Product> {
    return this.http.post(ProductsService.PRODUCTS_API, product.asFormData(), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

  edit(product: Product): Observable<Product> {
    return this.http.put(`ProductsService.PRODUCTS_API/${product.id}`, JSON.stringify(product), new RequestOptions({ withCredentials: true }))
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }


  delete(id: string): Observable<void> {
    return this.http.delete(`${ProductsService.PRODUCTS_API}/${id}`, BaseApiService.defaultOptions)
      .map((res: Response) => res.json())
      .catch(error => this.handleError(error));
  }

}
