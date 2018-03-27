import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { RoundSoccer1 } from "./roundSoccer1";

@Component({
  selector: "app-soccer1",
  templateUrl: "./soccer1.component.html",
  styleUrls: ["./soccer1.component.css"]
})

export class Soccer1Component implements OnInit {
  rounds: Array<any> = [];
  nameOfTheGame: string;
  selectedRound: RoundSoccer1;
  matches: Array<any> = [];
  lastKey: string = '';
  multiplier: number = 1;

  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/it.1.json";

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.rounds = data.rounds;
      this.nameOfTheGame = data.name;
      console.log(data);
    });
  }
  ngOnInit() { }

  onSelect(round): void {
    this.selectedRound = round;
    console.log(this.selectedRound);
  }

  deleteRow(i) {
    if (confirm("Tényleg töröljük?")) {
      this.selectedRound.matches.splice(i, 1)
    }
  }

  updateScore(i) {
    this.selectedRound.matches[i].score2 = parseInt(this.selectedRound.matches[i].score2);
  }

  sortTable(key: string, deepKey: string) {
    if (this.lastKey == key) {
      this.multiplier *= -1;
    }

    if (deepKey) {
      this.selectedRound.matches.sort((a, b) => {
        return a[key][deepKey].localeCompare(b[key][deepKey]) * this.multiplier;
      });
    } else {
      this.selectedRound.matches.sort((a, b) => {
        return a[key].localeCompare(b[key]) * this.multiplier;
      });
    }

    this.lastKey = key;
  }
}

interface serverData {
  name: string;
  rounds: Array<any>;
}
