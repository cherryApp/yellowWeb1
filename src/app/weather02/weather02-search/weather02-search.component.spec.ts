import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather02SearchComponent } from './weather02-search.component';

describe('Weather02SearchComponent', () => {
  let component: Weather02SearchComponent;
  let fixture: ComponentFixture<Weather02SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weather02SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weather02SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
