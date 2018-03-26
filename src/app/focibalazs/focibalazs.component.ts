import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-focibalazs',
  templateUrl: './focibalazs.component.html',
  styleUrls: ['./focibalazs.component.css']
})

export class FocibalazsComponent implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/it.1.clubs.json";
  lastKey: string = '';
  multiplier: number = 1;
  showTable: boolean;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.clubs = data.clubs;
      console.log(data);
    });
    this.showTable = false;
  }

  sortingTable(key: string) {
    if (this.lastKey == key) {
      this.multiplier *= -1;
    }
    this.clubs.sort((a, b) => {
      return a[key].localeCompare(b[key]) * this.multiplier;
    });
  }

  toggleTable() {
    if (this.showTable) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  updateRow(club) {
    console.log(club);
  }

  deleteRow(i) {
    if (confirm('Really?')) {
      this.clubs.splice(i, 1);
    }
  }

  ngOnInit() {
  }

}

interface serverData {
  name: string;
  clubs: Array<any>;
}
