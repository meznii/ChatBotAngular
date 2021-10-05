import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteListeComponent } from './white-liste.component';

describe('WhiteListeComponent', () => {
  let component: WhiteListeComponent;
  let fixture: ComponentFixture<WhiteListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
