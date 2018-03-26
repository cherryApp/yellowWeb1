import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";


@Component({
  selector: 'app-weather02',
  templateUrl: './weather02.component.html',
  styleUrls: ['./weather02.component.css']
})
export class Weather02Component implements OnInit {

  result: string;
  atlanta: string = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=metric&appid=085808f96a352a5b9c43c337855a25cb";
  miami: string = "http://api.openweathermap.org/data/2.5/weather?q=Miami,us&units=metric&appid=085808f96a352a5b9c43c337855a25cb";
  losAngeles: string = "http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,us&units=metric&appid=085808f96a352a5b9c43c337855a25cb";
  newYork: string = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=metric&appid=085808f96a352a5b9c43c337855a25cb";
  seattle: string = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=metric&appid=085808f96a352a5b9c43c337855a25cb";
  cities: Array<any> = [this.atlanta, this.miami, this.losAngeles, this.newYork, this.seattle];
  citiesOnWindow: Array<any> = [];
  cityModal: Array<any> = [];
  sunrise: any;
  riseHours: any;
  riseMinutes: any;
  sunriseTime: any;


  constructor(private http: HttpClient) {
    for (let i = 0; i < this.cities.length; i++) {
      this.http.get(this.cities[i]).subscribe((data: serverData) => {
        this.citiesOnWindow.push(data);
        this.citiesOnWindow[i].sys.sunrise = this.sunriseConvert(this.citiesOnWindow[i].sys.sunrise);
      });
    }
    console.log(this.citiesOnWindow);

  }
  ngOnInit() {
  }

  sunriseConvert(data) {
    this.sunrise = new Date(data * 1000);
    this.riseHours = this.sunrise.getHours();
    this.riseMinutes = this.sunrise.getMinutes();
    if (this.riseMinutes < 10) {
      this.riseMinutes = '0' + this.riseMinutes;
    }
    return this.riseHours + ":" + this.riseMinutes;
  }

  search() {
    let userInputCity = (<HTMLInputElement>document.getElementById('searchCity')).value;
    let userInputCountry = (<HTMLInputElement>document.getElementById('searchCountry')).value;
    this.result = `http://api.openweathermap.org/data/2.5/weather?q=${userInputCity},${userInputCountry}&units=metric&appid=085808f96a352a5b9c43c337855a25cb`;

    this.http.get(this.result).subscribe((data: serverData) => {
      this.cityModal.push(data);
      for (let i = 0; i < this.cityModal.length; i++) {
        let icon = `http://openweathermap.org/img/w/${this.cityModal[i].weather[0].icon}.png`;
        document.getElementById('icon').style.background = `url("${icon}")`;
        console.log(this.cityModal[0]);

      }

      document.getElementById('modal').style.display = 'block';
    });
    this.cityModal.pop();
  }

}

interface serverData {
  main: string;
  name: string;
  cities: Array<any>;
  citiesOnWindow: Array<any>;
  cityModal: Array<any>;
  data: any;
  sunrise: any;
  riseHours: any;
  riseMinutes: any;
  sunriseTime: any;
}
