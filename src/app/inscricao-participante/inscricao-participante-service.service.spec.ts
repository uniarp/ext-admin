import { TestBed } from '@angular/core/testing';

import { InscricaoParticipanteService } from './inscricao-participante-service.service';

describe('InscricaoParticipanteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscricaoParticipanteService = TestBed.get(InscricaoParticipanteService);
    expect(service).toBeTruthy();
  });
});
