import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-weather05',
  templateUrl: './weather05.component.html',
  styleUrls: ['./weather05.component.css']
})
export class Weather05Component implements OnInit {
  weather: Array<any> = [];
  city: String = "";
  temp: Number = 0;
  pressure: Number = 0;
  humidity: Number = 0;

  jsonUrl: string = "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=7b589666541dced92f6bb1ae15152055";

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.city = data.name;
      this.temp = parseFloat(data.main.temp) - 273.15;
      this.temp = this.temp.toFixed(2)
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.weather.push(data.weather[0].main);
      this.weather.push(data.weather[0].description);

      console.log(data);
      console.log(this.city);
      console.log(this.weather);
    });
  }

  ngOnInit() {
  }

}

interface serverData {
  name: string;
  coord: object;
  main: object;


}
