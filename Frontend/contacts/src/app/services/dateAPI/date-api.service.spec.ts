import { TestBed } from '@angular/core/testing';

import { DateAPIService } from './date-api.service';

describe('DateAPIService', () => {
  let service: DateAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
