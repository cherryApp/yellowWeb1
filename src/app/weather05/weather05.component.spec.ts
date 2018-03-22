import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather05Component } from './weather05.component';

describe('Weather05Component', () => {
  let component: Weather05Component;
  let fixture: ComponentFixture<Weather05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
