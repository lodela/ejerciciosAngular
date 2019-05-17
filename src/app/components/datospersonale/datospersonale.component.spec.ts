import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospersonaleComponent } from './datospersonale.component';

describe('DatospersonaleComponent', () => {
  let component: DatospersonaleComponent;
  let fixture: ComponentFixture<DatospersonaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatospersonaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
