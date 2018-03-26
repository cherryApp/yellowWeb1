import { Component, OnInit, HostListener } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-weather04',
  templateUrl: './weather04.component.html',
  styleUrls: ['./weather04.component.css']
})


export class Weather04Component implements OnInit {
  urlBeginning: string = "http://api.openweathermap.org/data/2.5/weather?q=";
  urlEnding: string = "&appid=d02ce6adf455a12b46649daf11169961";
  dataDisplay: Array<any> = [];
  weatherData: Array<any> =
    ["Budapest,hu",
      "London,uk",
      "New%20York,us",
      "Paris,fr",
      "Rome,it",
      "Sydney,au"];

  constructor(private http: HttpClient) {
    for (let i = 0; i < this.weatherData.length; i++) {
      this.http.get(this.urlBeginning + this.weatherData[i] + this.urlEnding).subscribe((data: serverData) => {
        console.log(data);
        this.dataDisplay.push(data);
      });
      this.dataDisplay.sort();
    }


  }

  ngOnInit() {
  }


}
interface serverData {
  name: string;
  dataDisplay: Array<any>;

}

