import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOutletComponent } from './right-outlet.component';

describe('RightOutletComponent', () => {
  let component: RightOutletComponent;
  let fixture: ComponentFixture<RightOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
