import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather01',
  templateUrl: './weather01.component.html',
  styleUrls: ['./weather01.component.css']
})
export class Weather01Component implements OnInit {
  weatherData: object;
  // cities: Array<any> = [];
  city0: object;
  city1: object;
  city2: object;

  city: string = "Barcs";
  urls: Array<string> = ["http://api.openweathermap.org/data/2.5/weather?q=london,gb&appid=a674d2bcb4a86c23890ed376ef24ed04",
    "http://api.openweathermap.org/data/2.5/weather?q=new%20york,us&appid=a674d2bcb4a86c23890ed376ef24ed04",
    "http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=a674d2bcb4a86c23890ed376ef24ed04",
    "http://api.openweathermap.org/data/2.5/weather?q=Berlin,de&appid=a674d2bcb4a86c23890ed376ef24ed04",
    "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=a674d2bcb4a86c23890ed376ef24ed04"
  ];
  private country: string = "hu";
  //dataUrl: string = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},hu&appid=a674d2bcb4a86c23890ed376ef24ed04`

  constructor(private http: HttpClient) {
    this.http.get(this.dataUrl()).subscribe((data: object) => {
      this.weatherData = data;

      console.log(this.weatherData)
    })

    this.http.get(this.urls[0]).subscribe((data: object) => {
      this.city0 = data;

    })
    this.http.get(this.urls[1]).subscribe((data: object) => {
      this.city1 = data;

    })
    this.http.get(this.urls[2]).subscribe((data: object) => {
      this.city2 = data;

    })


  }
  writeWheatherData() {

    this.http.get(this.dataUrl()).subscribe((data: object) => {
      this.weatherData = data;
    })

  }

  dataUrl() {
    return `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=a674d2bcb4a86c23890ed376ef24ed04`
  }
  roundFun(unroundedNum: string) {
    return parseInt(unroundedNum)
  }

  ngOnInit() {


  }

}

