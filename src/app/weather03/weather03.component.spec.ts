import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather03Component } from './weather03.component';

describe('Weather03Component', () => {
  let component: Weather03Component;
  let fixture: ComponentFixture<Weather03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
