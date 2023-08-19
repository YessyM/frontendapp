import { TestBed } from '@angular/core/testing';

import { RescatepostService } from './rescatepost.service';

describe('RescatepostService', () => {
  let service: RescatepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RescatepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
