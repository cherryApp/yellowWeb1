import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather06Component } from './weather06.component';

describe('Weather06Component', () => {
  let component: Weather06Component;
  let fixture: ComponentFixture<Weather06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
