import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHTTPComponentComponent } from './simple-httpcomponent.component';

describe('SimpleHTTPComponentComponent', () => {
  let component: SimpleHTTPComponentComponent;
  let fixture: ComponentFixture<SimpleHTTPComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHTTPComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHTTPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
