import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ViacepService } from './viacep.service';

describe('ViacepService', () => {
  let service: ViacepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(ViacepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
