import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather02Component } from './weather02.component';

describe('Weather02Component', () => {
  let component: Weather02Component;
  let fixture: ComponentFixture<Weather02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
