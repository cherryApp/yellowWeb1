import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-lindakaja',
  templateUrl: './lindakaja.component.html',
  styleUrls: ['./lindakaja.component.css']
})

export class LindakajaComponent implements OnInit {
    jsonUrlArray: Array<string> = [
    "https://world.openfoodfacts.org/api/v0/product/5000189974593.json",
    "https://world.openfoodfacts.org/api/v0/product/4014400400007.json",
    "https://world.openfoodfacts.org/api/v0/product/3564700435014.json",
    "https://world.openfoodfacts.org/api/v0/product/5410081200551.json",
    "https://world.openfoodfacts.org/api/v0/product/7610400020206.json",
    "https://world.openfoodfacts.org/api/v0/product/7610036002676.json",
    "https://world.openfoodfacts.org/api/v0/product/4104420144248.json",
    "https://world.openfoodfacts.org/api/v0/product/7616500644403.json",
    "https://world.openfoodfacts.org/api/v0/product/7610400010429.json",
    "https://world.openfoodfacts.org/api/v0/product/4000539222009.json",
    "https://world.openfoodfacts.org/api/v0/product/7613032652531.json",
    "https://world.openfoodfacts.org/api/v0/product/7610036002820.json"
    ];
    csokik: Array<serviceData> = [];
    product: Array<{brands: string, categories: string, id: number, image: string, product_name: string, link: string}>;

  constructor(private http: HttpClient) {
    for (let i = 0; i < this.jsonUrlArray.length; i++) {
      this.http.get(this.jsonUrlArray[i]).subscribe((data: serviceData) => {
        this.csokik.push(data);
        console.log(this.csokik);
      });
  }
  }
  ngOnInit() {
  }
 
  deleteCard(i) {
    if (confirm('Are you sure?')){
      this.csokik.splice(i, 1);
    }
  }
}
interface serviceData {
  code: number;
  product: {brands: string, categories: string, id: number, image: string, product_name: string, link: string, quantity: string};
}


