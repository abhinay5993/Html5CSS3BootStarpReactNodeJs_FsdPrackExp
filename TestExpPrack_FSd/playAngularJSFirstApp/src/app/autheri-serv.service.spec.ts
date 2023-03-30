import { TestBed } from '@angular/core/testing';

import { AutheriServService } from './autheri-serv.service';

describe('AutheriServService', () => {
  let service: AutheriServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheriServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
