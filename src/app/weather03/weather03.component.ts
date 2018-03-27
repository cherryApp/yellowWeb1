import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
@Component({
  selector: 'app-weather03',
  templateUrl: './weather03.component.html',
  styleUrls: ['./weather03.component.css']
})


export class Weather03Component implements OnInit {
  queryList: Array<number> = [3054643, 3648559, 2643743, 524894, 5128638];
  cities: Array<any> = [];
  cities2: Array<any>;
  data: Object = {};
  city: Object;
  jsonUrl: string = "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=6df01486a38dc56c57be03a8d48765c9&lang=hu";
  //http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=6df01486a38dc56c57be03a8d48765c9
  ajaxUrl: string = "src/app/weather03/city.list.json";
  lastKey: string = '';
  multiplier: number = 1;

  constructor(private http: HttpClient) {
    /* this.http.get(this.jsonUrl).subscribe((data: object) => {
      console.log(data);*/
    //});
    //this.data = JSON.stringify(data);

    for (let i = 0; i < this.queryList.length; i++) {
      const element = this.queryList[i];
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${element}&appid=6df01486a38dc56c57be03a8d48765c9&lang=hu&units=metric`).subscribe((data: object) => {
        this.cities.push(data);
      });
    }

    //this.cities2 = this.cities.map(city => (city.main.temp - 273.15).toFixed(2));

    /* this.data = {
       "coord": {
         "lon": -0.13,
         "lat": 51.51
       },
       "weather": [
         {
           "id": 500,
           "main": "Rain",
           "description": "light rain",
           "icon": "10n"
         }
       ],
       "base": "cmc stations",
       "main": {
         "temp": 286.164,
         "pressure": 1017.58,
         "humidity": 96,
         "temp_min": 286.164,
         "temp_max": 286.164,
         "sea_level": 1027.69,
         "grnd_level": 1017.58
       },
       "wind": {
         "speed": 3.61,
         "deg": 165.001
       },
       "rain": {
         "3h": 0.185
       },
       "clouds": {
         "all": 80
       },
       "dt": 1446583128,
       "sys": {
         "message": 0.003,
         "country": "GB",
         "sunrise": 1446533902,
         "sunset": 1446568141
       },
       "id": 2643743,
       "name": "London",
       "cod": 200
     };*/
  }

  ngOnInit() {
  }

  /*write(city: Object) {
    this.city = city;
  }*/


}
