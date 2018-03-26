import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fociandi',
  templateUrl: './fociandi.component.html',
  styleUrls: ['./fociandi.component.css']
})
export class FociandiComponent implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.clubs.json";
  lastKey: string = '';
  multiplier: number = 1;


  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.newMethod(data);
      console.log(data);
    });
  }

  private newMethod(data: serverData) {
    this.clubs = data.clubs;
  }

  ngOnInit() {
  }

  updateRow(club) {
    console.log(club);
  }

  deleteRow(club, i) {
    if (confirm('Tuti???')) {
      this.clubs.splice(i, 1);
    }
    console.log(club);
  }

  sortTable(key: string) {
    if (this.lastKey == key) {
      this.multiplier *= -1;
    }
    this.clubs.sort((a, b) => {
      return a[key].localCompare(b(key)) * this.multiplier;
    });
  }

}

interface serverData {
  name: string;
  clubs: Array<any>;
}
