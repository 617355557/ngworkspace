import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Builer2Component } from './builer2.component';

describe('Builer2Component', () => {
  let component: Builer2Component;
  let fixture: ComponentFixture<Builer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Builer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Builer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
