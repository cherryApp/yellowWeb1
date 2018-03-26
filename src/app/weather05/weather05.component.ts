import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-weather05',
  templateUrl: './weather05.component.html',
  styleUrls: ['./weather05.component.css']
})


export class Weather05Component implements OnInit {
  sziliShow: boolean = false;
  weather: Array<any> = [];
  city: String = "";
  temp: Number = 0;
  pressure: Number = 0;
  humidity: Number = 0;
  icon: String = "";
  iconArray: Array<any> = [];
  citySearch: String = "Budapest";
  countrySearch: String = "Hungary";
  jsonUrl: string = "http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&appid=7b589666541dced92f6bb1ae15152055";
  iconJsonUrl: string = "https://gist.githubusercontent.com/tbranyen/62d974681dea8ee0caa1/raw/3405bfb2a76b7cbd90fde33d8536f0cd13706955/icons.json";


  constructor(private http: HttpClient) {

    this.jsonUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch},${this.countrySearch}&appid=7b589666541dced92f6bb1ae15152055`;
    console.log(32, this.jsonUrl);
    this.getData();






  }

  ngOnInit() {
  }

  getData() {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.city = data.name;
      this.temp = data.main.temp - 273.15;
      this.temp = parseFloat(this.temp.toFixed(2))
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.weather.push(data.weather[0].main);
      this.weather.push(data.weather[0].description);


      this.http.get(this.iconJsonUrl).subscribe((data: iconData) => {
        this.iconArray = Object.keys(data).map(i => data[i]);

        //egyszerubb lett volna csak a stringet osszehasonlitani, de igy egy weather modult importalva erikFlowers gitrol egybol jo ikont illeszt be
        switch (this.whatIcon(this.weather[1], this.iconArray)) {
          case 'storm-showers':

            this.icon = 'assets/weatherIcons/drop.png'
            break;
          case 'thunderstorm':

            this.icon = 'assets/weatherIcons/light.png'
            break;
          case 'sprinkle':

            this.icon = 'assets/weatherIcons/drop.png'
            break;
          case 'rain':

            this.icon = 'assets/weatherIcons/drop.png'
            break;
          case 'showers':

            this.icon = 'assets/weatherIcons/drop.png'
            break;
          case 'snow':

            this.icon = 'assets/weatherIcons/snowflake.png'
            break;
          case 'day-haze':

            this.icon = 'assets/weatherIcons/sunny.png'
            break;
          case 'cloudy-gusts':

            this.icon = 'assets/weatherIcons/cloudy.png'
            break;
          case 'hail':

            this.icon = 'assets/weatherIcons/snowflake.png'
            break;
          case 'hot':

            this.icon = 'assets/weatherIcons/sunny.png'
            break;
          case 'sunny':

            this.icon = 'assets/weatherIcons/sunny.png'
            break;
          case 'cloudy':

            this.icon = 'assets/weatherIcons/cloud.png'
            break;
          default:
            this.icon = 'assets/weatherIcons/sad.png'
        }




      });



    });
  }



  whatIcon(desc: String, array: Array<any>) {

    for (let i in array) {
      if (array[i].label == desc) {
        return array[i].icon
      }
    }

  }

  onSearch() {
    this.jsonUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch},${this.countrySearch}&appid=7b589666541dced92f6bb1ae15152055`;
    console.log(32, this.jsonUrl);
    this.getData();
  }

  sziliClick() {
    this.sziliShow = !this.sziliShow;
  }



}


interface serverData {
  name: string;
  coord: object;

  main: {
    pressure: number;
    temp: number;
    humidity: number;
  };
  weather: Array<any>;
}


interface iconData {
  [key: string]: {
    label: string;
    icon: string;
  };


}
