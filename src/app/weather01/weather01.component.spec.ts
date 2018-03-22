import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather01Component } from './weather01.component';

describe('Weather01Component', () => {
  let component: Weather01Component;
  let fixture: ComponentFixture<Weather01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
