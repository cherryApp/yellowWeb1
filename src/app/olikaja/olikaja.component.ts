import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vonalkod } from './vonalkod';
@Component({
  selector: 'app-olikaja',
  templateUrl: './olikaja.component.html',
  styleUrls: ['./olikaja.component.css']
})

export class OlikajaComponent implements OnInit {
  clubs: Array<any> = [];
  jsonUrl: string = "";
  products1: Vonalkod = new Vonalkod();
  products: any;
  tableOrDetails: boolean = true;
  choose: string = "9100000819136";
  choosenProduct: any = {};
  keres: string = "";
  constructor(private http: HttpClient) {

    this.products = this.products1.list;
    this.jsonUrl = `https://world.openfoodfacts.org/api/v0/product/${this.choose}.json`;
    this.http.get(this.jsonUrl).subscribe((data: any) => {
      this.choosenProduct = data.product;
    });
  }
  ngOnInit() {
  }
  back() {
    this.tableOrDetails = true;
  }
  details(i) {
    this.tableOrDetails = false;
    this.choose = this.products[i].code;
    this.jsonUrl = `https://world.openfoodfacts.org/api/v0/product/${this.choose}.json`;
    this.http.get(this.jsonUrl).subscribe((data: any) => {
      this.choosenProduct = data.product;
    });

  }
  delete(i) {
    this.products.splice(i, 1);
  }
  search() {
    this.tableOrDetails = false;
    this.choose = this.keres;
    this.jsonUrl = `https://world.openfoodfacts.org/api/v0/product/${this.choose}.json`;
    this.http.get(this.jsonUrl).subscribe((data: any) => {
      this.choosenProduct = data.product;
    });
  }
  save() {
    for (let i in this.products) {

      if (this.products[i].code == this.choosenProduct.code) {
        console.log(this.products[i]);
        this.products[i].name = this.choosenProduct.product_name;
        this.products[i].made = this.choosenProduct.brands;
        this.tableOrDetails = true;
        break;
      }
    }
  }
  sort(key, i) {
    if (i == 1) {
      this.products.sort((a, b) => {
        return a[key].localeCompare(b[key]);
      });
    }
    if (i == 0) {
      this.products.sort((a, b) => {
        return b[key].localeCompare(a[key]);
      });
    }
  }
}
