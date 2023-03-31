import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupregComponent } from './signupreg.component';

describe('SignupregComponent', () => {
  let component: SignupregComponent;
  let fixture: ComponentFixture<SignupregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
