import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocibalazsComponent } from './focibalazs.component';

describe('FocibalazsComponent', () => {
  let component: FocibalazsComponent;
  let fixture: ComponentFixture<FocibalazsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocibalazsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocibalazsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
