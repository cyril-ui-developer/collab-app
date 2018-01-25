import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMainContentComponent } from './default-main-content.component';

describe('DefaultMainContentComponent', () => {
  let component: DefaultMainContentComponent;
  let fixture: ComponentFixture<DefaultMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
