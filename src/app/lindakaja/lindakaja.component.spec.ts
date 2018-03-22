import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LindakajaComponent } from './lindakaja.component';

describe('LindakajaComponent', () => {
  let component: LindakajaComponent;
  let fixture: ComponentFixture<LindakajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindakajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LindakajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
