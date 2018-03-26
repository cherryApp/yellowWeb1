import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-fociricsi',
  templateUrl: './fociricsi.component.html',
  styleUrls: ['./fociricsi.component.css']
})
export class FociricsiComponent implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/de.1.clubs.json";
  multiplier: number = 1;
  lastKey: string = "";

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.clubs = data.clubs;
      console.log(data);
    });

  }

  ngOnInit() {
  }

  updateRow(club) {

  }
  deleteRow(i) {
    if (prompt("Biztosan törlöd? y/n") == "y") {
      this.clubs.splice(i, 1);
    }
  }
  sortingThis(key: string) {
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
