import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabMainComponent } from './collab-main.component';

describe('CollabMainComponent', () => {
  let component: CollabMainComponent;
  let fixture: ComponentFixture<CollabMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
