import { TestBed } from '@angular/core/testing';

import { UsesGaurdService } from './uses-gaurd.service';

describe('UsesGaurdService', () => {
  let service: UsesGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsesGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
