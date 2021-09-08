import { TestBed } from '@angular/core/testing';

import { SuperheroessService } from './superheroes.service';

describe('SuperheroessService', () => {
  let service: SuperheroessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
