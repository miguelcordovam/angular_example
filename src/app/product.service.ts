import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'https://b8qm0ydxoh.execute-api.us-east-1.amazonaws.com/prod';

  constructor(
    private http: HttpClient
  ) {
  }

  getProducts(country: string): Observable<Product[]> {
    console.log("Query");
    return this.http.get<Product[]>(this.productsUrl);
  }
}
