import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSonComponent } from './problem-son.component';

describe('ProblemSonComponent', () => {
  let component: ProblemSonComponent;
  let fixture: ComponentFixture<ProblemSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
