import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrVoiBillingComponent} from './cr-voi-billing.component';

describe('CrVoiBillingComponent', () => {
  let component: CrVoiBillingComponent;
  let fixture: ComponentFixture<CrVoiBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrVoiBillingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrVoiBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
