import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReceptionNFComponent} from './reception-nf.component';

describe('ReceptionNFComponent', () => {
  let component: ReceptionNFComponent;
  let fixture: ComponentFixture<ReceptionNFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionNFComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
