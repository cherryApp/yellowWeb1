import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { JsonData, Matchday, Match } from './data';

@Component({
  selector: 'app-focikinga',
  templateUrl: './focikinga.component.html',
  styleUrls: ['./focikinga.component.css']
})
export class FocikingaComponent implements OnInit {
  rounds: Array<Matchday>;
  matchday: Matchday;

  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.json";


  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: JsonData) => {
      console.log(data);
      this.rounds = data.rounds;
      this.matchday = this.rounds[0];
    })
  }

  ngOnInit() {
  }

  showMatchday(day: any) {
    this.rounds[day] = day;
    console.log(this.rounds[day]);

  }
}
