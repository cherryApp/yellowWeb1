import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matekaja',
  templateUrl: './matekaja.component.html',
  styleUrls: ['./matekaja.component.css']
})
export class MatekajaComponent implements OnInit {
  brcode: string;
  jsonUrl: string = "https://world.openfoodfacts.org/api/v0/product/[].json";
  kep: string;
  foody: string;
  kat: string;
  brand: string;
  countr: string;

  constructor(private http: HttpClient) {
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      // this.clubs = data.clubs;
      console.log(data);
      this.kep = data.product.image_front_small_url;
      this.foody = data.product.product_name;
      this.kat = data.product.categories;
      this.brand = data.product.brands;
      this.countr = data.product.countries;
      console.log(this.jsonUrl);


    });


  }
  ngOnInit() { }
  keres(a) {
    this.jsonUrl = `https://world.openfoodfacts.org/api/v0/product/${a}.json`;
    this.http.get(this.jsonUrl).subscribe((data: serverData) => {
      // this.clubs = data.clubs;
      console.log(data);
      this.kep = data.product.image_front_small_url;
      this.foody = data.product.product_name;
      this.kat = data.product.categories;
      this.brand = data.product.brands;
      this.countr = data.product.countries;
      console.log(this.jsonUrl);
    }
  }

}
interface serverData {
  product: any;
}
