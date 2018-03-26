import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocikingaComponent } from './focikinga.component';

describe('FocikingaComponent', () => {
  let component: FocikingaComponent;
  let fixture: ComponentFixture<FocikingaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocikingaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocikingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
