import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatekajaComponent } from './matekaja.component';

describe('MatekajaComponent', () => {
  let component: MatekajaComponent;
  let fixture: ComponentFixture<MatekajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatekajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatekajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
