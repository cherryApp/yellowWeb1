import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer02Component } from './soccer02.component';

describe('Soccer02Component', () => {
  let component: Soccer02Component;
  let fixture: ComponentFixture<Soccer02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Soccer02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Soccer02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
