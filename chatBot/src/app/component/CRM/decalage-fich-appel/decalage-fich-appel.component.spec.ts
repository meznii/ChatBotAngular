import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DecalageFichAppelComponent} from './decalage-fich-appel.component';

describe('DecalageFichAppelComponent', () => {
  let component: DecalageFichAppelComponent;
  let fixture: ComponentFixture<DecalageFichAppelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecalageFichAppelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecalageFichAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
