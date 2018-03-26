import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCity: string;
  searchCountry: string;
  city: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  citySearch() {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.searchCity},${this.searchCountry}&appid=6df01486a38dc56c57be03a8d48765c9&lang=hu&units=metric`).subscribe((data: object) => {
      this.city = data;
    });
  }

}
