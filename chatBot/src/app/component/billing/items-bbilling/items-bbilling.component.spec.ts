import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsBbillingComponent } from './items-bbilling.component';

describe('ItemsBbillingComponent', () => {
  let component: ItemsBbillingComponent;
  let fixture: ComponentFixture<ItemsBbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsBbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsBbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
