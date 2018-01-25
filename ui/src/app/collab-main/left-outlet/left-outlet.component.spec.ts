import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOutletComponent } from './left-outlet.component';

describe('LeftOutletComponent', () => {
  let component: LeftOutletComponent;
  let fixture: ComponentFixture<LeftOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
