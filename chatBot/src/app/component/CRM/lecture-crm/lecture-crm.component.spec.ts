import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LectureCrmComponent} from './lecture-crm.component';

describe('LectureCrmComponent', () => {
  let component: LectureCrmComponent;
  let fixture: ComponentFixture<LectureCrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LectureCrmComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
