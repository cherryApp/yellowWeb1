import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Soccer1Component } from './soccer1.component';

describe('Soccer1Component', () => {
  let component: Soccer1Component;
  let fixture: ComponentFixture<Soccer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Soccer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Soccer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
