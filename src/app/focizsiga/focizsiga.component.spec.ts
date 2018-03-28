import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocizsigaComponent } from './focizsiga.component';

describe('FocizsigaComponent', () => {
  let component: FocizsigaComponent;
  let fixture: ComponentFixture<FocizsigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocizsigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocizsigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
