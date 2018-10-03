import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Site} from './site';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private sitesUrl = 'https://api.mercadolibre.com/sites';

  constructor(
    private http: HttpClient
  ) { }

  getSites():Observable<Site[]> {
    return this.http.get<Site[]>(this.sitesUrl);
  }
}
