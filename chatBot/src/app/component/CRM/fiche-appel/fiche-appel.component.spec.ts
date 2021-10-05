import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FicheAppelComponent} from './fiche-appel.component';

describe('FicheAppelComponent', () => {
  let component: FicheAppelComponent;
  let fixture: ComponentFixture<FicheAppelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FicheAppelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
