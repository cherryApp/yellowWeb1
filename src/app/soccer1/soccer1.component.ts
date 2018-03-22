import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-soccer1",
  templateUrl: "./soccer1.component.html",
  styleUrls: ["./soccer1.component.css"]
})
export class Soccer1Component implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.clubs.json";
  lastKey: string = '';
  multiplier: number = 1;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.clubs = data.clubs;
    });
  }
  ngOnInit() {}
}

interface serverData {
  name: string;
  clubs: Array<any>;
}
