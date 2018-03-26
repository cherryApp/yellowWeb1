import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { City } from './city';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

  /* constructor(private http: Http) {
     cityList: Array<City>;
     this.getJSON().subscribe(data => cityList = data, error => console.log(error));
   }
   public getJSON(): Observable<any> {
     return this.http.get("./city.list.json")
       .map((res: any) => res.json())
   }
 }
 
 getCityData() {
   let apiUrl = './city.list.json';
   return this.http.get(apiUrl)
   .map((response: Response) => {
     const cityData = response.json();
     return cityData;
    });
  }
  */
  constructor() { }

}