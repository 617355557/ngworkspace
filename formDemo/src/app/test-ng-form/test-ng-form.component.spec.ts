import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgFormComponent } from './test-ng-form.component';

describe('TestNgFormComponent', () => {
  let component: TestNgFormComponent;
  let fixture: ComponentFixture<TestNgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
