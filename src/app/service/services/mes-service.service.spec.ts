import { TestBed } from '@angular/core/testing';

import { MesServiceService } from './mes-service.service';

describe('MesServiceService', () => {
  let service: MesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
