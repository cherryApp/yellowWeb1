import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-foci-dani',
  templateUrl: './foci-dani.component.html',
  styleUrls: ['./foci-dani.component.css']
})
export class FociDaniComponent implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.clubs.json"
  lastKey: string = "";
  multiplier: number = 1;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.clubs = data.clubs;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  updateRow(club) {
    console.log(club);
  }

  deleteRow(i) {
    if (confirm('Biztosan törölni akarod ezt a csapatot a bajnokságból?')) {
      this.clubs.splice(i, 1);
    }
  }

  sortTable(key: string) {
    if (this.lastKey == key) {
      this.multiplier *= -1;
    }
    this.lastKey = key;
    this.clubs.sort((a, b) => {
      return a[key].localeCompare(b[key]) * this.multiplier;
    });
  }
}




interface serverData {
  name: string;
  clubs: Array<any>;
}