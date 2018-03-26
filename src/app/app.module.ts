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
import { LindakajaComponent } from './lindakaja/lindakaja.component';
import { Weather04Component } from './weather04/weather04.component';
import { MatekajaComponent } from './matekaja/matekaja.component';
import { FociricsiComponent } from './fociricsi/fociricsi.component';
import { Weather05Component } from './weather05/weather05.component';
import { Weather06Component } from './weather06/weather06.component';
import { Weather07Component } from './weather07/weather07.component';
import { FocibalazsComponent } from './focibalazs/focibalazs.component';

import { SearchComponent } from './weather03/search/search.component';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';
/*
import { Weather02SearchComponent } from './weather02/weather02-search/weather02-search.component';

import { SelectedMatchComponent } from './focikinga/selected-match/selected-match.component';

import { Weather02SearchComponent } from './weather02/weather02-search/weather02-search.component';
*/

const routes: Routes = [
<<<<<<< HEAD
  { component: Soccer1Component, path: '', pathMatch: 'full' },
  { component: Soccer1Component, path: 'soccer1' },
  { component: Weather01Component, path: 'weather01' },
  { component: FocikingaComponent, path: 'focikinga' },
  { component: FocirekaComponent, path: 'focireka' },
  { component: FociandiComponent, path: 'fociandi' },
  { component: OlikajaComponent, path: 'olikaja' },
  { component: Soccer02Component, path: 'soccer02' },
  { component: Weather02Component, path: 'weather02' },
  { component: Weather03Component, path: 'weather03' },
  { component: LindakajaComponent, path: 'lindakaja' },
  { component: Weather04Component, path: 'weather04' },
  { component: MatekajaComponent, path: 'matekaja' },
  { component: FociricsiComponent, path: 'fociricsi' },
  { component: Weather05Component, path: 'weather05' },
  { component: Weather06Component, path: 'weather06' },
  { component: Weather07Component, path: 'weather07' },
  { component: FocibalazsComponent, path: 'focibalazs' }
=======
    { path: '', component: Soccer1Component, pathMatch: 'full' },
    { component: Soccer1Component, path: 'soccer1' },
    { component: Weather01Component, path: 'weather01' },
    { component: FocikingaComponent, path: 'focikinga' },
    { component: FocirekaComponent, path: 'focireka' },
    { component: FociandiComponent, path: 'fociandi' },
    { component: OlikajaComponent, path: 'olikaja' },
    { component: Soccer02Component, path: 'soccer02' },
    { component: Weather02Component, path: 'weather02' },
    { component: Weather03Component, path: 'weather03' },
    { component: LindakajaComponent, path: 'lindakaja' },
    { component: Weather04Component, path: 'weather04' },
    { component: MatekajaComponent, path: 'matekaja' },
    { component: FociricsiComponent, path: 'fociricsi' },
    { component: Weather05Component, path: 'weather05' },
    { component: Weather06Component, path: 'weather06' },
    { component: Weather07Component, path: 'weather07' },
    { component: FocibalazsComponent, path: 'focibalazs' },
    { component: SearchComponent, path: 'weather03/search' }
>>>>>>> 6e9b847063027c921d67e160cc732956fb5829a6
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
        SearchComponent,
        LindakajaComponent,
        Weather04Component,
        MatekajaComponent,
        FociricsiComponent,
        Weather05Component,
        Weather06Component,
        Weather07Component,
        KelvinToCelsiusPipe,
        FocibalazsComponent/*,
        Weather02SearchComponent,
        SelectedMatchComponent*/
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
