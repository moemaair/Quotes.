import { TestBed } from '@angular/core/testing';

import { InfoserviceService } from './infoservice.service';

describe('InfoserviceService', () => {
  let service: InfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
