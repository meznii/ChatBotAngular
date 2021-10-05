import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionEchoueComponent } from './connexion-echoue.component';

describe('ConnexionEchoueComponent', () => {
  let component: ConnexionEchoueComponent;
  let fixture: ComponentFixture<ConnexionEchoueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionEchoueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionEchoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
