import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryComponent } from './new-entry.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewEntryComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
