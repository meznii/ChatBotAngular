import {TestBed} from '@angular/core/testing';

import {AddResponsService} from './add-respons.service';

describe('AddResponsService', () => {
  let service: AddResponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddResponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
