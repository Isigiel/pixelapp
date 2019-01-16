import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DIsplayYearComponent } from './display-year.component';

describe('DIsplayYearComponent', () => {
  let component: DIsplayYearComponent;
  let fixture: ComponentFixture<DIsplayYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DIsplayYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DIsplayYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
