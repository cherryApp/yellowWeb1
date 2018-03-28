import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FociDaniComponent } from './foci-dani.component';

describe('FociDaniComponent', () => {
  let component: FociDaniComponent;
  let fixture: ComponentFixture<FociDaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FociDaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FociDaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
