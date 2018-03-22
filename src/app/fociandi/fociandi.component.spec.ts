import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FociandiComponent } from './fociandi.component';

describe('FociandiComponent', () => {
  let component: FociandiComponent;
  let fixture: ComponentFixture<FociandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FociandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FociandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
