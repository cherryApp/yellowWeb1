import { Component, OnInit, Input } from '@angular/core';
import { FocikingaComponent } from '../focikinga.component';
import { Matchday, JsonData, Match } from '../data';

@Component({
  selector: 'app-selected-match',
  templateUrl: './selected-match.component.html',
  styleUrls: ['./selected-match.component.css']
})

export class SelectedMatchComponent implements OnInit {
  @Input() matchday: Matchday;
  @Input() rounds: JsonData;
  lastKey: string = '';
  multiplier: number = 1;
  constructor() {

  }

  ngOnInit() {
  }

  sortTable3(key: string) {

    if (this.lastKey == key) {
      this.multiplier *= -1;
    }
    if (key == 'team1' || key == 'team2') {
      this.matchday.matches.sort((a, b) => {
        return a[key].name.localeCompare(b[key].name) * this.multiplier;
      });
    } else {
      this.matchday.matches.sort((a, b) => {
        return a[key].localeCompare(b[key]) * this.multiplier;
      });
    }
    this.lastKey = key;
  }

}
