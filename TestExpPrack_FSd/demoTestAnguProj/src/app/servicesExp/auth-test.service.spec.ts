import { TestBed } from '@angular/core/testing';
import { AuthTestService } from './auth-test.service';

xdescribe('AuthTestService', () => {
  let service: AuthTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
