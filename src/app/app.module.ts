import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Soccer1Component } from './soccer1/soccer1.component';
import { Weather01Component } from './weather01/weather01.component';

const routes: Routes = [
  { path: '', component: Soccer1Component, pathMatch: 'full' },
  { path: 'weather01', component: Weather01Component, pathMatch: 'full' },
  { path: 'soccer1', component: Soccer1Component }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Soccer1Component,
    Weather01Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
