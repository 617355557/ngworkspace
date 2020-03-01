import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Builder1Component } from './builder1.component';

describe('Builder1Component', () => {
  let component: Builder1Component;
  let fixture: ComponentFixture<Builder1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Builder1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Builder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
