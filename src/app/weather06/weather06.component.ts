import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-weather06',
  templateUrl: './weather06.component.html',
  styleUrls: ['./weather06.component.css']
})
export class Weather06Component implements OnInit {
  locations: Array<any> = [];
  city: string = "";
  country: string = "";
  jsonUrl: string = "";
  inv: number = 1;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  addLocation() {
    this.jsonUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "," + this.country + "&appid=d8db72b772130de32e719bff9c8610c9";
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.locations.push(data);
      console.log(this.locations);
    });
  }
  removeLocation(i) {
    if (confirm("\nDo you really want to erase me??\nDo you really want to wipe me out?"))
      this.locations.splice(i, 1);

  }

  sortTable(key: any, deepKey: string) {
    console.log(this.locations[1][key]);

    /* locations.sort((a, b) => { return (a.key > b.key) ? 1 : ((b.key > a.key) ? -1 : 0); });*/
    if (this.inv > 0) {
      this.inv *= -1;
      this.locations.sort((a: any, b: any) => {
        if (deepKey) {
          return a[key][deepKey].toString().localeCompare(b[key][deepKey].toString());
        } else {
          return a[key].toString().localeCompare(b[key].toString());
        }
      });
    } else {
      this.inv *= -1;
      this.locations.sort((a: any, b: any) => {
        return b[key].toString().localeCompare(a[key].toString());
      });
    }
  }
  /* if (this.key == key){
    this.multiplier*= -1;
  }
this.locations.sort((a,b)=>{
  return b[key].toString().localeCompare(a[key].toString());
});
  */
}
interface serverData {
  base: string;
  clouds: Object;
  cod: number;
  coord: Object;
  dt: Date;
  id: number;
  main: Object;
  name: string;
  sys: Object;
  visibility: number;
  weather: Array<any>;
  wind: Object;
}
