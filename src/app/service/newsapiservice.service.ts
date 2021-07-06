import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(public _http: HttpClient) {}

    newsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c701b79a95b44249a3b37330521e340";

    //technewsapi
    techNewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c701b79a95b44249a3b37330521e340";

    //business news api
    businessNewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7c701b79a95b44249a3b37330521e340";

    topHeading(): Observable <any>
    {
      return this._http.get(this.newsapiUrl);
    }  

    techNews(): Observable <any>{
      return this._http.get(this.techNewsapiUrl);
    }
   
    businessNews(): Observable <any>{
      return this._http.get(this.businessNewsapiUrl);
    }
}
