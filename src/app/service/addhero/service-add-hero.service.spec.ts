import { TestBed } from '@angular/core/testing';

import { ServiceAddHeroService } from './service-add-hero.service';

describe('ServiceAddHeroService', () => {
  let service: ServiceAddHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAddHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
