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
import { FocikingaComponent } from './focikinga/focikinga.component';
import { FocirekaComponent } from './focireka/focireka.component';
import { FociandiComponent } from './fociandi/fociandi.component';
import { OlikajaComponent } from './olikaja/olikaja.component';
import { Soccer02Component } from './soccer02/soccer02.component';
import { Weather02Component } from './weather02/weather02.component';
import { Weather03Component } from './weather03/weather03.component';
import { Weather04Component } from './weather04/weather04.component';
import { Weather05Component } from './weather05/weather05.component';
import { Weather06Component } from './weather06/weather06.component';
import { Weather07Component } from './weather07/weather07.component';
import { LindakajaComponent } from './lindakaja/lindakaja.component';
import { MatekajaComponent } from './matekaja/matekaja.component';
import { FociricsiComponent } from './fociricsi/fociricsi.component';
import { FocibalazsComponent } from './focibalazs/focibalazs.component';

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
    Weather01Component,
    FocikingaComponent,
    FocirekaComponent,
    FociandiComponent,
    OlikajaComponent,
    Soccer02Component,
    Weather02Component,
    Weather03Component,
    Weather04Component,
    Weather05Component,
    Weather06Component,
    Weather07Component,
    LindakajaComponent,
    MatekajaComponent,
    FociricsiComponent,
    FocibalazsComponent
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
