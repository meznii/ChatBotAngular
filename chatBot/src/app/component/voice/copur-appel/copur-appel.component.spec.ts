import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopurAppelComponent } from './copur-appel.component';

describe('CopurAppelComponent', () => {
  let component: CopurAppelComponent;
  let fixture: ComponentFixture<CopurAppelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopurAppelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopurAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
