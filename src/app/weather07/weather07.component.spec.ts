import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather07Component } from './weather07.component';

describe('Weather07Component', () => {
  let component: Weather07Component;
  let fixture: ComponentFixture<Weather07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
