import { TestBed } from '@angular/core/testing';

import { ServiceGetAllHeroService } from './service-get-all-hero.service';

describe('ServiceGetAllHeroService', () => {
  let service: ServiceGetAllHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGetAllHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
