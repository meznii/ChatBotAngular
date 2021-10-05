import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FicheMuettesComponent} from './fiche-muettes.component';

describe('FicheMuettesComponent', () => {
  let component: FicheMuettesComponent;
  let fixture: ComponentFixture<FicheMuettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FicheMuettesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheMuettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
