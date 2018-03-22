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
  clubs: Array<any> = [];
  data: string = "";
  jsonUrl: string = "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=6df01486a38dc56c57be03a8d48765c9&lang=hu";
  lastKey: string = '';
  multiplier: number = 1;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: object) => {
      console.log(data);
      this.data = JSON.stringify(data);
    });
  }

  ngOnInit() {
  }

}
