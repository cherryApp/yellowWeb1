import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-weather07",
  templateUrl: "./weather07.component.html",
  styleUrls: ["./weather07.component.css"]
})
export class Weather07Component implements OnInit {
  mainBudapest: Array<any> = [];
  jsonUrlBudapest: string = "http://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=243669b24ee92ac1351b22b1e42556bd";
  mainMadrid: Array<any> = [];
  jsonUrlMadrid: string = "http://api.openweathermap.org/data/2.5/weather?q=Madrid,es&appid=243669b24ee92ac1351b22b1e42556bd";
  mainWashington: Array<any> = [];
  jsonUrlWashington: string = "http://api.openweathermap.org/data/2.5/weather?q=Washington&appid=243669b24ee92ac1351b22b1e42556bd";
  mainPeking: Array<any> = [];
  jsonUrlPeking: string = "http://api.openweathermap.org/data/2.5/weather?q=Peking&appid=243669b24ee92ac1351b22b1e42556bd";
  mainLondon: Array<any> = [];
  jsonUrlLondon: string = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=243669b24ee92ac1351b22b1e42556bd";
  mainParis: Array<any> = [];
  jsonUrlParis: string = "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=243669b24ee92ac1351b22b1e42556bd";
  mainBerlin: Array<any> = [];
  jsonUrlBerlin: string = "http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=243669b24ee92ac1351b22b1e42556bd";

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrlBudapest).subscribe((data: serverData) => {
      this.mainBudapest = data.main;
      console.log(this.mainBudapest);
    });
    this.http.get(this.jsonUrlMadrid).subscribe((data: serverData) => {
      this.mainMadrid = data.main;
      console.log(this.mainMadrid);
    });
    this.http.get(this.jsonUrlWashington).subscribe((data: serverData) => {
      this.mainWashington = data.main;
      console.log(this.mainWashington);
    });
    this.http.get(this.jsonUrlPeking).subscribe((data: serverData) => {
      this.mainPeking = data.main;
      console.log(this.mainPeking);
    });
    this.http.get(this.jsonUrlLondon).subscribe((data: serverData) => {
      this.mainLondon = data.main;
      console.log(this.mainLondon);
    });
    this.http.get(this.jsonUrlParis).subscribe((data: serverData) => {
      this.mainParis = data.main;
      console.log(this.mainParis);
    });
    this.http.get(this.jsonUrlBerlin).subscribe((data: serverData) => {
      this.mainBerlin = data.main;
      console.log(this.mainBerlin);
    });
  }
  ngOnInit() {}
}

interface serverData {
  name: string;
  main: Array<any>;
}
