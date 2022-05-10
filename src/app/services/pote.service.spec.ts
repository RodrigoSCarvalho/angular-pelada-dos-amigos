import { TestBed } from '@angular/core/testing';

import { PoteService } from './pote.service';

describe('PoteService', () => {
  let service: PoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
