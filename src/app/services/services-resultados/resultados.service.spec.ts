import { TestBed } from '@angular/core/testing';

import { ResultadoService } from './resultados.service';

describe('ResultadoService', () => {
  let service: ResultadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});