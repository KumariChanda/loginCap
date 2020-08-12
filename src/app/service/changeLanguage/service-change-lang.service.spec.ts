import { TestBed } from '@angular/core/testing';

import { ServiceChangeLangService } from './service-change-lang.service';

describe('ServiceChangeLangService', () => {
  let service: ServiceChangeLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceChangeLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
