import { Component, OnInit } from '@angular/core';
import { Weather02Component } from '../weather02.component';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-weather02-search',
  templateUrl: './weather02-search.component.html',
  styleUrls: ['./weather02-search.component.css']
})
export class Weather02SearchComponent implements OnInit {
  http: HttpClient;
  result: any;
  /*   constructor(private http: HttpClient) {
      this.http.get(this.result).subscribe((data: serverData) => {
        //this.result.push(data);
        this.result.main.temp = (parseInt(this.result.main.temp) - 273.15).toFixed(1) + ' °C';
        this.result.main.temp_max = (parseInt(this.result].main.temp_max) - 273.15).toFixed(1) + ' °C';
        this.result.main.temp_min = (parseInt(this.result.main.temp_min) - 273.15).toFixed(1) + ' °C';
        this.result.wind.speed = (parseInt(this.result.wind.speed) * 1.60934).toFixed(1) + ' km/h';
        //this.result.sys.sunrise = this.sunriseConvert(this.result.sys.sunrise);
      });
  
      console.log(this.result);
  
    } */

  ngOnInit() {
  }

  /*   search() {
      console.log('hi!');
      let userInputCity = (<HTMLInputElement>document.getElementById('searchCity')).value;
      let userInputCountry = (<HTMLInputElement>document.getElementById('searchCountry')).value;
      let result = `http://api.openweathermap.org/data/2.5/weather?q=${userInputCity},${userInputCountry}&appid=085808f96a352a5b9c43c337855a25cb`
      console.log(userInputCity);
      console.log(userInputCountry);
      console.log(result);
  
  /*     this.http.get(this.result).subscribe((data: serverData) => {
        //this.result.push(data);
        this.result.main.temp = (parseInt(this.result.main.temp) - 273.15).toFixed(1) + ' °C';
        this.result.main.temp_max = (parseInt(this.result].main.temp_max) - 273.15).toFixed(1) + ' °C';
        this.result.main.temp_min = (parseInt(this.result.main.temp_min) - 273.15).toFixed(1) + ' °C';
        this.result.wind.speed = (parseInt(this.result.wind.speed) * 1.60934).toFixed(1) + ' km/h';
        //this.result.sys.sunrise = this.sunriseConvert(this.result.sys.sunrise);
      });
      console.log(this.result); */
}
/* 
}

interface serverData { } */
