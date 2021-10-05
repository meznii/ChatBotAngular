import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChercherContactComponent} from './chercher-contact.component';

describe('ChercherContactComponent', () => {
  let component: ChercherContactComponent;
  let fixture: ComponentFixture<ChercherContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChercherContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
