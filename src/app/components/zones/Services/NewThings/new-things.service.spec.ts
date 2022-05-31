import { TestBed } from '@angular/core/testing';

import { NewThingsService } from './new-things.service';

describe('NewThingsService', () => {
  let service: NewThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
