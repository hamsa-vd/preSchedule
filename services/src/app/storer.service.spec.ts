import { TestBed } from '@angular/core/testing';

import { StorerService } from './storer.service';

describe('StorerService', () => {
  let service: StorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
