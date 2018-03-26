import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { JsonData, Matchday, Match } from './data';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-focikinga',
  templateUrl: './focikinga.component.html',
  styleUrls: ['./focikinga.component.css']
})
export class FocikingaComponent implements OnInit {
  rounds: Array<Matchday>;
  matchday: Matchday;
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/en.1.json";
  lastKey: string = '';
  multiplier: number = 1;

  clubs2: Array<any> = [];
  jsonUrl2: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.clubs.json";


  constructor(private http: HttpClient, private http2: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: JsonData) => {
      // console.log(data);
      this.rounds = data.rounds;
      this.matchday = this.rounds[0];
      console.log(this.rounds[0]);
    });

    this.http2.get(this.jsonUrl2).subscribe((data2: serverData) => {
      this.clubs2 = data2.clubs;
      //console.log(data2);
    });

  }

  ngOnInit() {
  }

  showMatchday(day: any, k: number) {
    this.rounds[k] = day;
    console.log(this.rounds[k]);
  }


  updateRow(i: number, club: any) {
    console.log(club);
    console.log(i);
  }

  deleteRow(i) {
    if (confirm('Really?')) {
      this.clubs2.splice(i, 1);
    }
  }

  sortTable(key: string) {

    if (this.lastKey == key) {
      this.multiplier *= -1;
    }
    this.clubs2.sort((a, b) => {
      !a[key] ? a[key] = "" : a[key];
      !b[key] ? b[key] = "" : b[key];

      return a[key].localeCompare(b[key]) * this.multiplier;
    });
    this.lastKey = key;
  }
}


interface serverData {
  name: string;
  clubs: Array<any>;
}
