import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-soccer02',
  templateUrl: './soccer02.component.html',
  styleUrls: ['./soccer02.component.css']
})
export class Soccer02Component implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "https://raw.githubusercontent.com/opendatajson/football.json/master/2016-17/de.1.clubs.json"
  lastKey: string = '';
  mpr: number = 1;
  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      this.clubs = data.clubs;
      //  console.log(data.clubs);
    });
  }
  deleteRow(i) {
    this.clubs.splice(i, 1);
    // console.log(i);
  }

  modifyRow(i) {
    this.clubs[i].name
  }

  ngOnInit() {
  }

  sortTable(key: string) {

    if (this.lastKey == key) {
      this.mpr *= -1;
    }
    this.clubs.sort((a, b) => {
      return a[key].localeCompare(b[key]) * this.mpr;
    });
  }
}

interface serverData {
  name: string;
  clubs: Array<any>;
}