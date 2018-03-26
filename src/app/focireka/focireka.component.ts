import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-focireka',
  templateUrl: './focireka.component.html',
  styleUrls: ['./focireka.component.css']
})
export class FocirekaComponent implements OnInit {

  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/es.1.clubs.json";
  lastKey: string = '';
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
    if (confirm('Really?')) {
      this.clubs.splice(i, 1);
    }
  }

  sortTable(key: string) {

    if (this.lastKey == key) {
      this.multiplier *= -1;
    }

    this.clubs.sort((a, b) => {
      a[key] = a[key] || "";
      b[key] = b[key] || "";
      return a[key].localeCompare(b[key]) * this.multiplier;
    });
  }
}

interface serverData {
  name: string;
  clubs: Array<any>;
}
