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
  jsonUrl: string = "https://world.openfoodfacts.org/api/v0/product/5999038508006.json";
  lastKey: string = '';
  multiplier: number = 1;
  selectedRound: any;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      // this.clubs = data.clubs;
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

  //buggy
  sortTable(key: string) {
    let bugzy = 0;
    this.selectedRound.matches.sort((a: string, b: string) => {
      if (a[key] && b[key]) {
        console.log(bugzy++);
        return b[key].localeCompare(a[key])
      } else {
        return 0;
      }
    });
  }

}

interface serverData {
  name: string;
  clubs: Array<any>;
}
