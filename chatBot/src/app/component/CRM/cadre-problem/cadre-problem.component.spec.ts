import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CadreProblemComponent} from './cadre-problem.component';

describe('CadreProblemComponent', () => {
  let component: CadreProblemComponent;
  let fixture: ComponentFixture<CadreProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CadreProblemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
