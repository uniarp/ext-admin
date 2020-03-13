import { TestBed } from '@angular/core/testing';

import { VoluntarioService } from "./voluntario.service";

describe('VoluntarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoluntarioService = TestBed.get(VoluntarioService);
    expect(service).toBeTruthy();
  });
});
