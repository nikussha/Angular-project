import { TestBed } from '@angular/core/testing';

import { ObserverserviceService } from './observerservice.service';

describe('ObserverserviceService', () => {
  let service: ObserverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
