import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather04Component } from './weather04.component';

describe('Weather04Component', () => {
  let component: Weather04Component;
  let fixture: ComponentFixture<Weather04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
