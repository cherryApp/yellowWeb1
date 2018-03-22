import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";


@Component({
  selector: 'app-weather02',
  templateUrl: './weather02.component.html',
  styleUrls: ['./weather02.component.css']
})
export class Weather02Component implements OnInit {

  atlanta: string = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=085808f96a352a5b9c43c337855a25cb";
  miami: string = "http://api.openweathermap.org/data/2.5/weather?q=Miami,us&appid=085808f96a352a5b9c43c337855a25cb";
  losAngeles: string = "http://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles,us&appid=085808f96a352a5b9c43c337855a25cb";
  newYork: string = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,us&appid=085808f96a352a5b9c43c337855a25cb";
  seattle: string = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&appid=085808f96a352a5b9c43c337855a25cb";
  cities: Array<any> = [this.atlanta, this.miami, this.losAngeles, this.newYork, this.seattle];
  citiesOnWindow: Array<any> = [];
  //lastKey: string = '';
  //multiplier: number = 1;

  constructor(private http: HttpClient) {
    for (let i = 0; i < this.cities.length; i++) {
      this.http.get(this.cities[i]).subscribe((data: serverData) => {
        this.citiesOnWindow.push(data);
        this.citiesOnWindow[i].main.temp = (parseInt(this.citiesOnWindow[i].main.temp) - 273.15).toFixed(1) + ' °C';
        /*         console.log(data);
                console.log(data.main);
                console.log(data.name); */
      });
    }
    console.log(this.citiesOnWindow);

  }
  ngOnInit() {
  }
}

interface serverData {
  main: string;
  name: string;
  cities: Array<any>;
  citiesOnWindow: Array<any>;
}
