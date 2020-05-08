import { TestBed } from '@angular/core/testing';

import { EscolherParticipanteService } from './escolher-participante.service';

describe('EscolherParticipanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscolherParticipanteService = TestBed.get(EscolherParticipanteService);
    expect(service).toBeTruthy();
  });
});
