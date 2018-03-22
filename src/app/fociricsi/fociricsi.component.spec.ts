import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FociricsiComponent } from './fociricsi.component';

describe('FociricsiComponent', () => {
  let component: FociricsiComponent;
  let fixture: ComponentFixture<FociricsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FociricsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FociricsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
