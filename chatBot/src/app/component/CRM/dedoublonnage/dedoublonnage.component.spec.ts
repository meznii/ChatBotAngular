import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DedoublonnageComponent} from './dedoublonnage.component';

describe('DedoublonnageComponent', () => {
  let component: DedoublonnageComponent;
  let fixture: ComponentFixture<DedoublonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DedoublonnageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedoublonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
