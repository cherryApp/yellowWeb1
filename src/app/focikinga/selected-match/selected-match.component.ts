import { Component, OnInit, Input } from '@angular/core';
import { FocikingaComponent } from '../focikinga.component';

@Component({
  selector: 'app-selected-match',
  templateUrl: './selected-match.component.html',
  styleUrls: ['./selected-match.component.css']
})
export class SelectedMatchComponent implements OnInit {
  @Input() rounds: FocikingaComponent;
  @Input() matchday: FocikingaComponent;

  constructor() { }

  ngOnInit() {
  }

}
