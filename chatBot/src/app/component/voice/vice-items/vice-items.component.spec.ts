import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceItemsComponent } from './vice-items.component';

describe('ViceItemsComponent', () => {
  let component: ViceItemsComponent;
  let fixture: ComponentFixture<ViceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
