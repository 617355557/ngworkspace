import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuoTubeSearchComponentComponent } from './yuo-tube-search-component.component';

describe('YuoTubeSearchComponentComponent', () => {
  let component: YuoTubeSearchComponentComponent;
  let fixture: ComponentFixture<YuoTubeSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuoTubeSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuoTubeSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
