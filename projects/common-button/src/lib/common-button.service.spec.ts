import { TestBed } from '@angular/core/testing';

import { CommonButtonService } from './common-button.service';

describe('CommonButtonService', () => {
  let service: CommonButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
