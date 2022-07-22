import { TestBed } from '@angular/core/testing';

import { VFireLibService } from './v-fire-lib.service';

describe('VFireLibService', () => {
  let service: VFireLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VFireLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
