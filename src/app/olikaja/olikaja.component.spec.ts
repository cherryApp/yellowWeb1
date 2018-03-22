import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlikajaComponent } from './olikaja.component';

describe('OlikajaComponent', () => {
  let component: OlikajaComponent;
  let fixture: ComponentFixture<OlikajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlikajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlikajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
