import { TestBed } from '@angular/core/testing';

import { CommonInputService } from './common-input.service';

describe('CommonInputService', () => {
  let service: CommonInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
