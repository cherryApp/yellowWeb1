import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-focikinga',
  templateUrl: './focikinga.component.html',
  styleUrls: ['./focikinga.component.css']
})
export class FocikingaComponent implements OnInit {
  rounds: Array<matchday>;


  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.json";


  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: jsonData) => {
      console.log(data);
      this.rounds = data.rounds;
    })
  }

  ngOnInit() {
  }

  showMatchday(day: any) {
    this.rounds[day] = day;
    console.log(this.rounds[day]);
  }
}

interface jsonData {
  name: string;
  rounds: Array<matchday>;
}

interface matchday {
  name: string;
  matches: Array<match>;
}

interface match {
  date: Date;
  team1: team;
  team2: team;
  score1: number;
  score2: number;
}

interface team {
  key: string;
  name: string;
  code: string;
}

