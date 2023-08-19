import { TestBed } from '@angular/core/testing';

import { GetanimalsService } from './getanimals.service';

describe('GetanimalsService', () => {
  let service: GetanimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetanimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
