import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestateComponent } from './changestate.component';

describe('ChangestateComponent', () => {
  let component: ChangestateComponent;
  let fixture: ComponentFixture<ChangestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
