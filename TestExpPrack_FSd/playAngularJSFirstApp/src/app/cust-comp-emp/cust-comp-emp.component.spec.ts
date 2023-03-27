import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustCompEmpComponent } from './cust-comp-emp.component';

describe('CustCompEmpComponent', () => {
  let component: CustCompEmpComponent;
  let fixture: ComponentFixture<CustCompEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustCompEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustCompEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
