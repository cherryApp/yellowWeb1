import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showDropdown: boolean = false;

  menuList: Array<{ label: string, url: string }> = [
    { label: 'Péti', url: '/soccer1' },
    { label: 'Tomi', url: '/weather01' },
    { label: 'Kinga', url: '/focikinga' },
    { label: 'Réka', url: '/focireka' },
    { label: 'Andi', url: '/fociandi' },
    { label: 'Olivér', url: '/olikaja' },
    { label: 'Miro', url: '/soccer02' },
    { label: 'Peti', url: '/weather02' },
    { label: 'Frédi', url: '/weather03' },
    { label: 'Linda', url: '/lindakaja' },
    { label: 'Doni', url: '/weather04' },
    { label: 'Máté', url: '/matekaja' },
    { label: 'Ricsi', url: '/fociricsi' },
    { label: 'Marci', url: '/weather05' },
    { label: 'Péter', url: '/weather06' },
    { label: 'Zsombor', url: '/weather07' },
    { label: 'Balázs', url: '/focibalazs' }
    , { label: 'Zsiga', url: '/focizsiga' }
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  disableClick(event: MouseEvent) {
    event.preventDefault();
  }
}
