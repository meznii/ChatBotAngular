import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackListeComponent } from './black-liste.component';

describe('BlackListeComponent', () => {
  let component: BlackListeComponent;
  let fixture: ComponentFixture<BlackListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
