import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-weather04',
  templateUrl: './weather04.component.html',
  styleUrls: ['./weather04.component.css']
})
export class Weather04Component implements OnInit {
  dataBud: Array<any> = [];
  jsonUrl1: string = "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=d02ce6adf455a12b46649daf11169961";
  jsonUrl2: string = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=d02ce6adf455a12b46649daf11169961";
  jsonUrl3: string = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,us&appid=d02ce6adf455a12b46649daf11169961";
  jsonUrl4: string = "http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=d02ce6adf455a12b46649daf11169961";
  jsonUrl5: string = "http://api.openweathermap.org/data/2.5/weather?q=Rome,it&appid=d02ce6adf455a12b46649daf11169961";
  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl1).subscribe((data: serverData) => {
      console.log(data);
      this.dataBud.push(data);
    });
    this.http.get(this.jsonUrl2).subscribe((data: serverData) => {
     
      this.dataBud.push(data);
    });
    this.http.get(this.jsonUrl3).subscribe((data: serverData) => {
     
      this.dataBud.push(data);
    });
    this.http.get(this.jsonUrl4).subscribe((data: serverData) => {
     
      this.dataBud.push(data);
    });
    this.http.get(this.jsonUrl5).subscribe((data: serverData) => {
     
      this.dataBud.push(data);
    });

  }

  ngOnInit() {
  }
}
  interface serverData {
    name: string;
    dataBud: Array<any>;

  }

