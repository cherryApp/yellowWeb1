import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocirekaComponent } from './focireka.component';

describe('FocirekaComponent', () => {
  let component: FocirekaComponent;
  let fixture: ComponentFixture<FocirekaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocirekaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocirekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
